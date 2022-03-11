import styled from 'styled-components';

import backImage from '../../assets/back-visual.gif';

function MyInfoContainer() {
  return (
    <UserInfoContainer>
      <LeftContents>
        <h1>
          백유라님,
          <br />
          안녕하세요.
        </h1>
        <AddressButton>내 주소 보기</AddressButton>
      </LeftContents>
      <img style={{ width: '144px' }} src={backImage} alt="" />
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LeftContents = styled.div`
  text-align: left;
  padding-left: 16px;
  font-size: 14px;
`;

const AddressButton = styled.button`
  border-style: none;
  background-color: #fff;
  border: 1.5px solid #4c6ef5;
  border-radius: 16px;
  padding: 8px 16px;
  color: #4c6ef5;
  font-weight: 600;
  font-size: 13px;
`;

export default MyInfoContainer;
