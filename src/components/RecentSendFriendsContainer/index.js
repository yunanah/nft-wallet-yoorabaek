import styled from 'styled-components';

import BoxTitle from '../BoxTitle';
import RecentSendFriendsList from '../RecentSendFriendsList';

// 최근 전송한 친구 목록을 감싸는 컨테이너 컴포넌트
function RecentSendFriendsContainer() {
  return (
    <Container>
      <BoxTitle>최근 전송한 친구</BoxTitle>
      <RecentSendFriendsList />
    </Container>
  );
}

const Container = styled.div`
  margin: 8px;
  padding: 16px 24px;
`;

export default RecentSendFriendsContainer;
