import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// 푸터 컴포넌트
function Footer() {
  return (
    <FooterContainer>
      <CorpArea>
        <CorpItem href="/">고객센터</CorpItem>|
        <CorpItem href="/">이용약관</CorpItem>|
        <CorpItem href="/">개인정보처리방침</CorpItem>
      </CorpArea>
      <CorpItem href="/">
        <strong>@2020. GROUND1 Corp. All rights reserved.</strong>
      </CorpItem>
      <CorpInfo>
        (주)그라운드엑스&nbsp;
        <FontAwesomeIcon icon={faCircleDown} />
      </CorpInfo>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  text-align: left;
  padding: 0 16px 44px;
  background-color: rgb(240, 248, 250);
  color: rgb(39, 67, 68);
`;

const CorpArea = styled.div`
  color: rgb(182, 203, 204);
`;

const CorpItem = styled.a`
  text-decoration: none;
  color: rgb(133, 160, 161);
  font-size: 13px;
  margin: 4px;
`;

const CorpInfo = styled.div`
  color: rgb(114, 140, 141);
  font-size: 13px;
`;

export default Footer;
