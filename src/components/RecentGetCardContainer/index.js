import styled from 'styled-components';

import ContainerTitle from '../ContainerTitle';
import RecentGetCardList from '../RecentGetCardList';

// 최근 받은 카드 목록을 감싸는 컨테이너 컴포넌트
function RecentGetCardContainer() {
  return (
    <Container>
      <ContainerTitle>최근 받은 카드</ContainerTitle>
      <RecentGetCardList />
    </Container>
  );
}

const Container = styled.div`
  margin: 8px;
  padding: 16px 24px;
`;

export default RecentGetCardContainer;
