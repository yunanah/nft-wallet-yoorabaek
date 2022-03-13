import styled from 'styled-components';

import backImage from '../../assets/back-visual.gif';
import KakaoLoginButton from '../KakaoLoginButton';

// 앱 메인 화면 로그인박스 컴포넌트 - 로그인 전에만 보임
function LoginBox() {
  return (
    <MainLoginBox>
      <Title>
        내 손안의 디지털 지갑 <br />
        KLIP
      </Title>
      <Contents>
        가입부터 자산관리까지, <br />
        편리하지만 무엇보다 안전한 지갑입니다.
      </Contents>

      <img style={{ width: '244px' }} src={backImage} alt="" />
      <KakaoLoginButton />
    </MainLoginBox>
  );
}

const MainLoginBox = styled.div`
  margin: 32px auto;
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 24px auto 16px;
  font-weight: 700;
`;

const Contents = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 8px auto 0;
  font-weight: 600;
  color: #bebebe;
`;

export default LoginBox;
