import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import Profile from './profile/Profile';
import user from './profile/user.json';
import styled from 'styled-components';
import Statistics from './statistics/Statistics';
import data from './statistics/data.json';
import TransactionHistory from './history/TransactionHistory';
import transactions from './history/transactions.json';

const Styled = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
export const App = () => {
  return (
    <Styled.MainWrapper>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Styled.MainWrapper>
  );
};
