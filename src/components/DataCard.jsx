import { Row, Col } from "react-bootstrap";
import { LowerCardButtons } from "./LowerCardButtons";

const DataCard = ({ cardMetadata }) => {
    const {
        postTitle,
        postImg,
        username,
        userImg,
        randCred,
        randMinutes
    } = cardMetadata


    return (
        <div className="inf-card">
                <h5>{postTitle}</h5>
                <div style={{display: "flex", flexDirection: "unset"}}>
                    <Col xs={1}>
                        <Row>
                            <img style={{height: "30px", width: "30px", borderRadius: "25px"}} src={userImg} />
                        </Row>
                    </Col>
                    <Col xs={8} style={{fontSize:"11px"}}>
                        <Row>
                            <span><b>{username} • {randCred} points</b></span>
                        </Row>
                        <Row>
                            <span><i>Posted {randMinutes} minutes ago</i></span>
                        </Row>
                    </Col>
                </div>
                <img 
                    className="py-3"
                    style={{height: "100%", width: "100%"}}
                    src={postImg}
                />
                <LowerCardButtons className="py-2"/>
        </div>
    )
}

export default DataCard
