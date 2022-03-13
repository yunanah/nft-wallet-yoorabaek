import './styles/App.css';

import { useState } from 'react';
import {} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import BannerContainer from './components/BannerContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginBox from './components/LoginBox';
import MyInfoContainer from './components/MyInfoContainer';
import MyTokenContainer from './components/MyTokenContainer';
import RecentGetCardContainer from './components/RecentGetCardContainer';
import RecentSendFriendsContainer from './components/RecentSendFriendsContainer';
import SideToggleBar from './components/SideToggleBar';
import useProfileData from './hooks/useProfileData';

function App() {
  const [toggleBar, setToggleBar] = useState(false);

  const profile = useProfileData();

  return (
    <RecoilRoot>
      <div className="App">
        <Header setToggleBar={setToggleBar} />
        {profile.nickname === '' ? (
          <LoginBox />
        ) : (
          <>
            <MyInfoContainer />
            <MyTokenContainer />
            <RecentGetCardContainer />
            <RecentSendFriendsContainer />
          </>
        )}
        <BannerContainer />
        <SideToggleBar toggleBar={toggleBar} setToggleBar={setToggleBar} />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
