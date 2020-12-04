import { useState, useEffect } from "react";
import DataCard from "./components/DataCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "./bootstrap.min.css";

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  // Handles adding content to the feed
  const fetchMoreData = () => {
    if (items >= 500) {
      setHasMore(false);
      return;
    }

    // If scrolled to bottom, load 20 more posts
    setTimeout(() => {
      setItems(
        [...items, Array.from({ length: 20 })]
      );
    }, 200);
  };

  return (
    <div className="feed-container">
      <p className="main-title">Zoodit</p>
      <p className="sub-title">Infinitely Scrollable Images for You</p>
      <br />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading more images...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Wow. You reached the end. That's seriously impressive.</b>
          </p>
        }
      >        
        {items.map((_, index) => (
          <DataCard key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
