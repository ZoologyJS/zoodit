import { useRef, useState } from "react";

export const LowerCardButtons = () => {
    const [liked, setLiked] = useState(false);
    const [comments] = useState(Math.floor(Math.random() * 11))

    const likeButtonReference = useRef();

    // Handles the visual formatting of the like button
    const likeHandler = () => {
        setLiked(!liked);
        likeButtonReference.current.style.color = liked ? "lightgray" : "green";
    }

    // Social buttons at the bottom of each card
    return (
        <div className="buttons-cont" style={{display: "flex"}}>
            <i ref={likeButtonReference} onClick={likeHandler}className="fas fa-thumbs-up pr-3"> <span className="bottom-buttons-font">Like</span></i>
            <i className="fas fa-comment-dots pr-3"> <span className="bottom-buttons-font">Reply</span></i>
            <i className="fas fa-share-alt pr-3"> <span className="bottom-buttons-font">Share</span></i>
            <i className="fas fa-flag"> <span className="bottom-buttons-font">Report</span></i>
            <i className="fas bottom-buttons-font" style={{marginLeft: "auto", fontWeight: "100"}}> {comments} Comments</i>
        </div>
    )
}
