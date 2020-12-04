import { useRef, useState } from "react";

export const LowerCardButtons = () => {
    const [liked, setLiked] = useState(false);
    const [comments] = useState(Math.floor(Math.random() * 11))

    const likeButtonReference = useRef();

    // Handles the visual formatting of the like button
    const likeHandler = () => {
        setLiked(!liked);
        if (liked){
            likeButtonReference.current.style.color = "green";
            likeButtonReference.current.classList.add("like-button")
        } else {
            likeButtonReference.current.style.color = "lightgray";
            likeButtonReference.current.classList.remove("like-button")
        }
    }

    // Social buttons at the bottom of each card
    return (
        <div className="buttons-cont" style={{display: "flex"}}>
            <i ref={likeButtonReference} onClick={likeHandler} className="fas fa-thumbs-up pr-3"> <span className="bottom-buttons-font removeOnMobile">Like</span></i>
            <i className="fas fa-comment-dots pr-3"> <span className="bottom-buttons-font removeOnMobile">Reply</span></i>
            <i className="fas fa-share-alt pr-3"> <span className="bottom-buttons-font removeOnMobile">Share</span></i>
            <i className="fas fa-flag"> <span className="bottom-buttons-font removeOnMobile">Report</span></i>
            <i className="fas bottom-buttons-font" style={{marginLeft: "auto", fontWeight: "100"}}> {comments} Comments</i>
        </div>
    )
}
