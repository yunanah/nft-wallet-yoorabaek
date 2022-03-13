import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import loginState from '../stores/login/atom';
import profileState from '../stores/profile/atom';

function useProfileData() {
  const [profile, setProfile] = useRecoilState(profileState);
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  console.log(profile, profile.nickname ? profile.nickname.length : 0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getAccessToken = async (authorizationCode) => {
      await axios
        .post('http://localhost:8080/auth/kakao/token', {
          authorizationCode,
        })
        .then((res) => {
          if (res.data) {
            let accessToken = res.data.access_token;
            let refreshToken = res.data.refresh_token;
            localStorage.setItem('CC_Token', accessToken);
            localStorage.setItem('RF_Token', refreshToken);
            // console.log(res);
            setLoggedIn(true);
          }
        });
    };
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      await getAccessToken(authorizationCode);
    }
  }, [setLoggedIn, loggedIn]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getUserData = async (accessToken) => {
      await axios
        .post('http://localhost:8080/auth/kakao/info', {
          accessToken,
        })
        .then((res) => {
          if (res.data) {
            setProfile({
              ...profile,
              nickname: res.data.properties.nickname,
              profile_image_url: res.data.properties.profile_image,
            });
            setLoggedIn(false);
          }
        });
    };
    console.log(
      Boolean(localStorage.getItem('CC_Token')),
      localStorage.getItem('CC_Token'),
    );
    if (Boolean(localStorage.getItem('CC_Token'))) {
      await getUserData(localStorage.getItem('CC_Token'));
    }
  }, [loggedIn, setProfile]);

  return profile;
}

export default useProfileData;
