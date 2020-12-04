import { useState, useEffect, useMemo } from "react";
import DataCard from "./components/DataCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchPhoto, getRandUsername, getRandPostTitle } from "./utils";
import "./bootstrap.min.css";

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [userImg, setUserImage] = useState();
  const [postImg, setPostImage] = useState();
  const [imgSet, setImgSet] = useState();
  const [payload, setPayload] = useState([]);
  // const [randMinutes] = useState(Math.floor(Math.random() * 89))
  // const [randCred] = useState(Math.floor(Math.random() * 998))

  useEffect(() => {
    injectPayload();
    // const zz = Array.from({ length: 10 })
    // for (let item of zz) {
    //   Promise.all([fetchPhoto(520, 400), fetchPhoto(30, 30)])
    //     .then(promises => { 
    //       setPayload(state => [...state, {
    //         username: getRandUsername(),
    //         postTitle: getRandPostTitle(),
    //         userImg: promises[1],
    //         postImg: promises[0]
    //       }])
    //         // setPayload( c => payload.push(1))
    //       console.log(payload)
    //     })
    // }
    // Promise.all([...items])
    //   .then(imgs => {
    //     imgs.forEach(i => { setPayload() }) // TODO set up a payload system and send it as a prop to the DataCard component
    //     setImgSet(imgs)
    //   })
  }, [])

  // Handles adding content to the feed
  const fetchMoreData = () => {
    if (items >= 500) {
      setHasMore(false);
      return;
    }

    // If scrolled to bottom, load 20 more posts
    setTimeout(() => {
      injectPayload();
      
      // Promise.all([...newImgBatch])
      //   .then(imgs => {setImgSet([...imgSet, ...imgs])})

      // setItems(
      //   [...items, Array.from({ length: 10 })]
      // );
    }, 200);
  };

  const injectPayload = () => {
    const newFeedItems = Array.from({ length: 5 })
    for (let item of newFeedItems) {
      Promise.all([fetchPhoto(520, 400), fetchPhoto(30, 30)])
        .then(promises => { 
          setPayload(state => [...state, {
            username: getRandUsername(),
            postTitle: getRandPostTitle(),
            randMinutes: Math.floor(Math.random() * 89),
            randCred: Math.floor(Math.random() * 998),
            userImg: promises[1],
            postImg: promises[0]
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
