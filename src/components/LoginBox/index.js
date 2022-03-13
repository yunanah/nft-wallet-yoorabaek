import styled from 'styled-components';

import backImage from '../../assets/back-visual.gif';
import KakaoLoginButton from '../KakaoLoginButton';

function LoginBox() {
  return (
    <MainLoginBox>
      <BoxTitle>
        내 손안의 디지털 지갑 <br />
        KLIP
      </BoxTitle>
      <BoxContents>
        가입부터 자산관리까지, <br />
        편리하지만 무엇보다 안전한 지갑입니다.
      </BoxContents>

      <img style={{ width: '244px' }} src={backImage} alt="" />
      <KakaoLoginButton />
    </MainLoginBox>
  );
}

const MainLoginBox = styled.div`
  margin: 32px auto;
`;

const BoxTitle = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 24px auto 16px;
  font-weight: 700;
`;

const BoxContents = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 8px auto 0;
  font-weight: 600;
  color: #bebebe;
`;

export default LoginBox;
