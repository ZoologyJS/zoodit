import { useState, useEffect, useMemo } from "react";
import DataCard from "./components/DataCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchPhoto, getRandUsername, getRandPostTitle } from "./utils";
import "./bootstrap.min.css";

const App = () => {
  const [hasMore, setHasMore] = useState(true);
  const [payload, setPayload] = useState([]);

  // Handles checking and adding content to the feed
  const fetchMoreData = () => {
    if (payload >= 500) {
      setHasMore(false);
      return;
    }

    // Add 5 more posts to the container
    setTimeout(() => {
      injectPayload();
    }, 200);
  };

  // Run once on initial component mount
  useEffect(() => {
    injectPayload();
  }, [])

  /* 
  ** Fetches payload data for the cards in groups, then returns them all at once.
  ** This helps prevent the unsuredness of when fetch requests will fulfill, and 
  ** allows for cards to appear on the screen in a single order.
  */
  const injectPayload = () => {
    const newFeedItems = Array.from({ length: 5 })
    for (let item of newFeedItems) {
      Promise.all([fetchPhoto(520, 400), fetchPhoto(30, 30)])
        .then(promises => { 
          setPayload(state => [...state, {
            username: getRandUsername(),                  //  Grabs a random username from the list
            postTitle: getRandPostTitle(),                //  Grabs a random post title from the list
            randMinutes: Math.floor(Math.random() * 89),  //  Chooses a random integer from 1-89
            randCred: Math.floor(Math.random() * 998),    //  Chooses a random integer from 1-998
            userImg: promises[1],                         //  A returned image blob for the user's profile photo
            postImg: promises[0]                          //  A returned image blob for the user's post photo
          }])  
        })
    }
  }

  return (
    <div className="feed-container">
      <p className="main-title">Zoodit</p>
      <p className="sub-title">Infinitely Scrollable Images for You</p>
      <br />
      <InfiniteScroll
        dataLength={payload.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading more images...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Wow. You reached the end. That's seriously impressive.</b>
          </p>
        }
      >        
        {payload.length && payload.map((metadata, index) => (
          <DataCard 
            cardMetadata={metadata} 
            key={index} 
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
