import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendListItem from './FriendListItem';

const Styled = {
  FriendListWrapper: styled.div`
    margin: 50px;
    list-style: none;
    padding: 0;
  `,
};
const FriendList = ({ friends }) => {
  return (
    <Styled.FriendListWrapper>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Styled.FriendListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
