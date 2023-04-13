import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = {
  ItemWrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    margin: 20px;
    width: 350px;
    border: 1px solid rgb(227, 227, 227);
    background-color: rgb(253, 253, 253);
    border-radius: 20px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  `,
  Img: styled.img`
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  `,
  NameSpan: styled.span`
    margin-right: 20px;
    font-size: 30px;
    font-weight: 700;
  `,
  Status: styled.span`
    display: inline-block;
    margin-right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    ${({ isOnline }) => (isOnline ? 'background: green ' : 'background: red ')}
  `,
};
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Styled.ItemWrapper>
      <Styled.Status isOnline={isOnline}></Styled.Status>

      <Styled.Img src={avatar} alt={name} />
      <Styled.NameSpan>{name}</Styled.NameSpan>
    </Styled.ItemWrapper>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
