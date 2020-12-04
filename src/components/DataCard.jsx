import { useState, memo } from "react";
import { Row, Col } from "react-bootstrap";
import { LowerCardButtons } from "./LowerCardButtons";

const DataCard = ({ cardMetadata }) => {
    // const [userImg, setUserImage] = useState();
    // const [postImg, setPostImage] = useState();
    // const [randMinutes] = useState(Math.floor(Math.random() * 89))
    // const [randCred] = useState(Math.floor(Math.random() * 998))

    return (
        <div className="inf-card">
                <h5>{cardMetadata.postTitle}</h5>
                <div style={{display: "flex", flexDirection: "unset"}}>
                    <Col xs={1}>
                        <Row>
                            <img style={{height: "30px", width: "30px", borderRadius: "25px"}} src={cardMetadata.userImg} />
                        </Row>
                    </Col>
                    <Col xs={8} style={{fontSize:"11px"}}>
                        <Row>
                            <span><b>{cardMetadata.username} • {cardMetadata.randCred} points</b></span>
                        </Row>
                        <Row>
                            <span><i>Posted {cardMetadata.randMinutes} minutes ago</i></span>
                        </Row>
                    </Col>
                </div>
                <img 
                    className="py-3"
                    style={{height: "100%", width: "100%"}}
                    src={cardMetadata.postImg}
                />
                <LowerCardButtons className="py-2"/>
        </div>
    )
}

export default DataCard
