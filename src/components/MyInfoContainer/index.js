import styled from 'styled-components';

import backImage from '../../assets/back-visual.gif';
import useProfileData from '../../hooks/useProfileData';

// 로그인한 유저의 정보가 담긴 상단 컴포넌트
function MyInfoContainer() {
  const profile = useProfileData();

  if (profile.nickname === '') return null;

  return (
    <UserInfoContainer>
      <LeftContents>
        <h1>
          {profile.nickname}님,
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
