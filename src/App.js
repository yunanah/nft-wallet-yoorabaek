import './App.css';

import { useState } from 'react';

import BannerContainer from './components/BannerContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import MyInfoContainer from './components/MyInfoContainer';
import MyTokenContainer from './components/MyTokenContainer';
import RecentGetCardContainer from './components/RecentGetCardContainer';
import RecentSendFriendsContainer from './components/RecentSendFriendsContainer';
import SideToggleBar from './components/SideToggleBar';

function App() {
  const [toggleBar, setToggleBar] = useState(false);

  return (
    <div className="App">
      <SideToggleBar toggleBar={toggleBar} setToggleBar={setToggleBar} />
      <Header setToggleBar={setToggleBar} />
      <MyInfoContainer />
      <MyTokenContainer />
      <RecentGetCardContainer />
      <RecentSendFriendsContainer />
      <BannerContainer />
      <Footer />
    </div>
  );
}

export default App;
