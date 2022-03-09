import { useEffect } from 'react';
import './App.css';
import BannerContainer from './components/BannerContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import MyInfoContainer from './components/MyInfoContainer';
import MyTokenContainer from './components/MyTokenContainer';
import RecentGetCardContainer from './components/RecentGetCardContainer';
import RecentSendFriendsContainer from './components/RecentSendFriendsContainer';
import ServiceContentsContainer from './components/ServiceContentsContainer';
import SideToggleBar from './components/SideToggleBar';

function App() {
  return (
    <div className="App">
      <SideToggleBar />
      <Header />
      <MyInfoContainer />
      <BannerContainer />
      <MyTokenContainer />
      <RecentGetCardContainer />
      <RecentSendFriendsContainer />
      <ServiceContentsContainer />
      <Footer />
    </div>
  );
}

export default App;
