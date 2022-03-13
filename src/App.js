import axios from 'axios';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getAccessToken = async (authorizationCode) => {
      let tokenData = await axios
        .post('http://localhost:8080/auth/kakao/token', {
          authorizationCode,
        })
        .then((res) => {
          let accessToken = res.data.access_token;
          console.log('hi');
          let refreshToken = res.data.refresh_token;
          localStorage.setItem('CC_Token', accessToken);
          localStorage.setItem('RF_Token', refreshToken);
          // console.log(res);
        });
    };
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    console.log(authorizationCode);
    if (authorizationCode) {
      await getAccessToken(authorizationCode);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getUserData = async (accessToken) => {
      let userData = await axios
        .post('http://localhost:8080/auth/kakao/info', {
          accessToken,
        })
        .then((res) => {
          console.log(res.data);
          setNickName(res.data.properties.nickname);
        });
    };
    console.log('hello');
    if (!!localStorage.getItem('CC_Token')) {
      await getUserData(localStorage.getItem('CC_Token'));
    }
  }, [setNickName]);
  return (
    <RecoilRoot>
      <Body>
        <Header setToggleBar={setToggleBar} />
        {nickName === '' ? (
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
        <SideToggleBar
          nickName={nickName}
          toggleBar={toggleBar}
          setToggleBar={setToggleBar}
        />
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
