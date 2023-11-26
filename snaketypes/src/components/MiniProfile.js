import "../assets/css/MiniProfile.css"
import React from 'react';
import Card from 'react-bootstrap/Card';
import MiniChart from './MiniChart';

const MiniProfile = () => {
    return (
        <div className="MiniProfile">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <img id="user-avatar"
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        alt="Avatar"
                    />
                    <Card.Title>{"Username"}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{"average 50 wpm"}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">View Stats</Card.Link>
                    <Card.Link href="#">Edit Profile</Card.Link>
                    <MiniChart />
                </Card.Body>
            </Card>

        </div>
    );
}

export default MiniProfile;