
import React from "react";
import styled from "styled-components"

const FollowerContainer = styled.div `
    // width: auto;
    background-color: gray;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;

    .card {
        margin: 10px;
        width: 400px;
        height: 600px;
        padding: 20px;
        display: flex;
        flex-direction:column
        align-items: center;
        border-radius: 5px;
        box-shadow: 0 1px 6px -2px #000;
        background-color: #FFF;
        margin-bottom: 30px;


        img {
            width: 200px;
            height: 200px;
            border-radius: 3px;
            margin-right: 20px;
            object-fit: scale-down;
    }
`;

const Followers = props => {

return (
    <FollowerContainer>
        {props.followers.map(follower => (
            <div className="card" key={follower.id}>
                <img alt='github user profile' src={follower.avatar_url} />
                <p>Login: {follower.login}</p>
                <p>Bio: {follower.bio}</p>
                <p>Location: {follower.location}</p>
                <p>Profile: {follower.html_url}</p>
            </div>
        ))}
    </FollowerContainer>
);
};

export default Followers;