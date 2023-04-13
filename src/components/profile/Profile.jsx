import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = {
  Profile: styled.div`
    margin: 50px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 10px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  `,
  Description: styled.div`
    text-align: center;
    width: 300px;
    padding: 30px;
  `,
  AvatarImg: styled.img`
    width: 200px;
    border-radius: 25px;
  `,
  Name: styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 16px;
  `,
  TagSLocation: styled.p`
    color: rgb(141, 141, 141);
  `,
  Stats: styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #f3f6f9;
    border-top: 1px solid rgb(227, 227, 227);
  `,
  Item: styled.div`
    text-align: center;
    padding: 20px;
    width: 100%;
    list-style: none;
  `,
  ItemLabel: styled.span`
    display: block;
    color: rgb(123, 123, 123);
    font-weight: 500;
    margin-bottom: 5px;
  `,
  ItemQuantity: styled.span`
    font-size: 18px;
    font-weight: 700;
    display: block;
  `,
};

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <Styled.Profile>
      <Styled.Description>
        <Styled.AvatarImg src={avatar} alt={userName} />
        <Styled.Name>{userName}</Styled.Name>
        <Styled.TagSLocation>@{tag}</Styled.TagSLocation>
        <Styled.TagSLocation>{location}</Styled.TagSLocation>
      </Styled.Description>

      <Styled.Stats>
        <Styled.Item>
          <Styled.ItemLabel>Followers</Styled.ItemLabel>
          <Styled.ItemQuantity>{stats.followers}</Styled.ItemQuantity>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemLabel>Views</Styled.ItemLabel>
          <Styled.ItemQuantity>{stats.views}</Styled.ItemQuantity>
        </Styled.Item>
        <Styled.Item>
          <Styled.ItemLabel>Likes</Styled.ItemLabel>
          <Styled.ItemQuantity>{stats.likes}</Styled.ItemQuantity>
        </Styled.Item>
      </Styled.Stats>
    </Styled.Profile>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
