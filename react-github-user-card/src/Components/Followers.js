
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

        a {
            text-decoration: none;
        }
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
                <a href={`${follower.html_url}`}> Username: {follower.login} </a> 
                <p>Public Repos: {follower.public_repos}</p>
                <a href={`${follower.html_url}`}>Profile: {follower.html_url} </a>
                <p>Bio: {follower.bio}</p>
            </div>
        ))}
    </FollowerContainer>
);
};

export default Followers;