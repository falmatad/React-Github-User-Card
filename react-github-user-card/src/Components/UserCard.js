
import React from "react"
import styled from "styled-components";

const UserContainer = styled.div `
    // width: auto;
    background-color: #fafbfc;
    display:flex;
    justify-content: center;

    .card {
        margin-top: 10px;
        width: 400px;
        height: 600px;
        padding: 20px;
        display: flex;
        flex-direction:column
        align-items: center;
        border-radius: 5px;
        box-shadow: 0 1px 6px -2px #000;
        background-color: #f6f8fa;
        margin-bottom: 30px;

        .chart {
            width: 400px;
            height: 100px;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
        }

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
const UserCard = props => {

return (
    <UserContainer>
        <div className="card">
            <img alt='github user profile' src={props.user.avatar_url} />
            <a href={`${props.user.html_url}`}> {props.user.name} </a> 
            <p>Location: {props.user.location}</p>
            <a href={`${props.user.html_url}`}>Profile: {props.user.html_url} </a>
            <p>Public Repos: {props.user.public_repos}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>Bio: {props.user.bio}</p>
        </div>
    </UserContainer>
);
};

export default UserCard;