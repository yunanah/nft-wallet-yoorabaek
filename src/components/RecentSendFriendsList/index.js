import styled from 'styled-components';

import useFriendData from '../../hooks/useFriendData';

// 최근 전송한 친구 목록 컴포넌트 - useFriendData 훅과 연결됨
function RecentSendFriendsList() {
  const friendList = useFriendData();

  if (!friendList) return null;

  return (
    <FriendsList>
      {friendList.length &&
        friendList.map((item, index) => {
          return (
            <FriendProfileBox key={index}>
              <ProfileImage src={item.imageUrl} alt="프로필 이미지" />
              <ProfileName>{item.name}</ProfileName>
            </FriendProfileBox>
          );
        })}
    </FriendsList>
  );
}

const FriendsList = styled.div`
  display: flex;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FriendProfileBox = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  margin: 4px;
  border-radius: 4px;
  background-color: rgb(247, 251, 251);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  overflow: hidden;
  border-radius: 50%;
`;

const ProfileName = styled.p`
  margin: 8px auto 0;
`;

export default RecentSendFriendsList;
