import '../../styles/togglebar.css';

import { faImages } from '@fortawesome/free-regular-svg-icons';
import { faCoins, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import getSessionStorageOrDefault from '../../services/getSessionStorageOrDefault';

// import profile from '/Users/yoorabaek/Desktop/klip-frontend-interview-yoorabaek/src/assets/profileImg.JPG';

function SideBarHeader(props) {
  const { nickName } = props;
  const profile_image_url = getSessionStorageOrDefault(
    'user_profile_image',
    '',
  );
  return (
    <ToggleBarHeader>
      <FontAwesomeIcon className="uploadBtn" icon={faExpand} />
      <UserProfile>
        <ProfileImage src={profile_image_url} alt="" />
        <h3 style={{ margin: '8px' }}>{nickName}</h3>
      </UserProfile>
      <AddressButton>내 주소 보기</AddressButton>
      <WalletBox>
        <WalletItemButton>
          <FontAwesomeIcon className="iconInBtn" icon={faCoins} />
          토큰
        </WalletItemButton>
        <WalletItemButton>
          <FontAwesomeIcon className="iconInBtn" icon={faImages} />
          NFT
        </WalletItemButton>
      </WalletBox>
    </ToggleBarHeader>
  );
}

const ToggleBarHeader = styled.div`
  margin: 16px auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #eee;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const AddressButton = styled.button`
  border-style: none;
  border: 1px solid lightgrey;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 16px;
  color: dimgray;
`;

const WalletBox = styled.div`
  margin: 24px auto 0;
  display: flex;
  justify-content: space-between;
`;

const WalletItemButton = styled.button`
  border-style: none;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  margin: 0 4px;
  font-size: 16px;
  border-radius: 4px;
  background-color: rgb(249, 249, 250);
`;

export default SideBarHeader;
