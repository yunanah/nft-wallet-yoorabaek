import styled from 'styled-components';

import ContainerTitle from '../ContainerTitle';
import RecentGetCardList from '../RecentGetCardList';

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
