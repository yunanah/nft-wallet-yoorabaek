import styled from 'styled-components';

import addChannelIcon from '../../assets/klipchannel.png';
function SideBarFooter() {
  return (
    <ToggleBarFooter>
      <a href="/">
        <AddChannelButton src={addChannelIcon} alt="채널 추가하기 버튼" />
      </a>
      <AddChannelMessage>
        klip의 소식을 가장 먼저 받으실 수 있습니다.
      </AddChannelMessage>
    </ToggleBarFooter>
  );
}

const ToggleBarFooter = styled.div`
  padding: 16px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const AddChannelButton = styled.img`
  width: 100px;
`;

const AddChannelMessage = styled.p`
  font-size: 13px;
  color: rgb(170, 168, 168);
  margin: 2px auto;
`;

export default SideBarFooter;
