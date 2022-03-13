import '../../styles/togglebar.css';

import { useCallback } from 'react';
import styled from 'styled-components';

import useProfileData from '../../hooks/useProfileData';
import SideBarFooter from '../SideBarFooter';
import SideBarHeader from '../SideBarHeader';
import SideBarLoginBox from '../SideBarLoginBox';
import SideBarMenu from '../SideBarMenu';

// 사이드 토글 바 컴포넌트 - 유저 데이터가 있는(로그인 한) 여부에 따라 로그인 박스 또는 헤더 컴포넌트가 보임
function SideToggleBar(props) {
  const { toggleBar, setToggleBar } = props;

  const profile = useProfileData();

  const closeToggleBar = useCallback(() => {
    setToggleBar(false);
  }, []);
  return (
    <>
      <ToggleBar toggleBar={toggleBar}>
        {profile.nickname === '' ? (
          <SideBarLoginBox />
        ) : (
          <SideBarHeader nickName={profile.nickname} />
        )}
        <SideBarMenu />
        <SideBarFooter />
      </ToggleBar>
      <Overlay toggleBar={toggleBar} onClick={closeToggleBar}></Overlay>
    </>
  );
}

const ToggleBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 260px;
  background-color: #fff;
  transform: ${(props) =>
    props.toggleBar ? 'translateX(0)' : 'translateX(-260px)'};
  transition: transform 0.3s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  visibility: ${(props) => (props.toggleBar ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.toggleBar ? '1' : '0')};
  z-index: 1;
  transition: opacity 0.3s;
`;

export default SideToggleBar;
