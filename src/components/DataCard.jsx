import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { getRandUsername, getRandPostTitle } from "../utils";
import { LowerCardButtons } from "./LowerCardButtons";

const DataCard = () => {
    const [userImg, setUserImage] = useState();
    const [postImg, setPostImage] = useState();
    const [postTitle, setPostTitle] = useState();
    const [username, setUsername] = useState();
    const [randMinutes] = useState(Math.floor(Math.random()*89))
    const [randCred] = useState(Math.floor(Math.random() * 998))

    // Grabs a random photo and sizes it according to passed in height and width parameters
    const fetchPhoto = async (width, height) => {
        const response = await fetch(`https://picsum.photos/${width}/${height}`);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    useEffect(() => {
        fetchPhoto(30, 30).then(img => setUserImage(img))
        fetchPhoto(520, 400).then(img => setPostImage(img))
        setUsername(getRandUsername());
        setPostTitle(getRandPostTitle());
    }, [])
    return (
        <div className="inf-card">
                <h5>{postTitle}</h5>
                <div style={{display: "flex", flexDirection: "unset"}}>
                    <Col xs={1}>
                        <Row>
                            <img style={{height: "30px", width: "30px", borderRadius: "25px"}} src={userImg} />
                        </Row>
                    </Col>
                    <Col xs={8} style={{fontSize:"10px"}}>
                        <Row>
                            <span>{username} { } • {randCred} { } cred</span>
                        </Row>
                        <Row>
                            <span><i>Posted {randMinutes} minutes ago.</i></span>
                        </Row>
                    </Col>
                </div>
                <img 
                    className="py-3"
                    style={{height: "400px", width: "100%"}}
                    src={postImg}
                />
                <LowerCardButtons className="py-2"/>
        </div>
    )
}

export default DataCard
