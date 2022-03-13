import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import ContainerTitle from '../ContainerTitle';
import MyTokenList from '../MyTokenList';

// 내가 보유한 토큰 목록 컴포넌트를 감싸는 컨테이너 컴포넌트
function MyTokenContainer() {
  return (
    <Container>
      <ContainerTitle>나의 토큰</ContainerTitle>
      <MyTokenList />
      <TokenSendButton>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        &nbsp; 토큰 보내기
      </TokenSendButton>
    </Container>
  );
}

const Container = styled.div`
  margin: 8px;
  padding: 16px 24px;
`;

const TokenSendButton = styled.button`
  background-color: rgb(22, 135, 248);
  color: white;
  border-style: none;
  width: 100%;
  margin: 8px auto;
  padding: 18px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
`;

export default MyTokenContainer;
