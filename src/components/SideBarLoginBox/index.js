import styled from 'styled-components';

import KakaoLoginButton from '../KakaoLoginButton';

// 사이드 토글 바의 로그인 박스 컴포넌트 (유저가 로그인 하지 않은 경우에 보임)
function SideBarLoginBox() {
  return (
    <SmallLoginBox>
      <Text>
        지금 Klip에 가입하고 <br />
        쉽고 간편하게 디지털 자산을
        <br />
        관리하세요.
      </Text>
      <KakaoLoginButton width={'180px'} />
    </SmallLoginBox>
  );
}

const Text = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 16px;
`;

const SmallLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
`;

export default SideBarLoginBox;
