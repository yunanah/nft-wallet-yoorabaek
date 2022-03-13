import { useEffect, useState } from 'react';
import {} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import BannerContainer from './components/BannerContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginBox from './components/LoginBox';
import MyInfoContainer from './components/MyInfoContainer';
import MyTokenContainer from './components/MyTokenContainer';
import RecentGetCardContainer from './components/RecentGetCardContainer';
import RecentSendFriendsContainer from './components/RecentSendFriendsContainer';
import SideToggleBar from './components/SideToggleBar';
import getSessionStorageOrDefault from './services/getSessionStorageOrDefault';

function App() {
  const [toggleBar, setToggleBar] = useState(false);
  const [nickName, setNickName] = useState('');
  // 로그인상태이면 setNickName 하고 재렌더링 로직 추가하기
  useEffect(() => {
    setNickName(getSessionStorageOrDefault('user_nickname', ''));
  }, [setNickName]);
  return (
    <RecoilRoot>
      <Body>
        <Header setToggleBar={setToggleBar} />
        {nickName !== '' ? (
          <LoginBox />
        ) : (
          <>
            <MyInfoContainer nickName={nickName} />
            <MyTokenContainer />
            <RecentGetCardContainer />
            <RecentSendFriendsContainer />
          </>
        )}
        <BannerContainer />
        <SideToggleBar toggleBar={toggleBar} setToggleBar={setToggleBar} />
        <Footer />
      </Body>
    </RecoilRoot>
  );
}

const Body = styled.div`
  text-align: center;
  width: 420px;
  transition: none;
`;

export default App;
