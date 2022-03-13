import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import loginState from '../stores/login/atom';
import profileState from '../stores/profile/atom';

// 카카오 로그인을 위한 '인가코드 -> 토큰 발급 -> 사용자 정보 불러오기'를 통해 사용자 프로필 데이터를 반환하는 훅
function useProfileData() {
  const [profile, setProfile] = useRecoilState(profileState);
  const [isLoggingIn, setIsLoggingIn] = useRecoilState(loginState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getAccessToken = async (authorizationCode) => {
      await axios
        .post('http://localhost:8080/auth/kakao/token', {
          authorizationCode,
        })
        .then((res) => {
          // 로컬스토리지에 액세스토큰과 리프레시 토큰을 저장
          if (res.data) {
            let accessToken = res.data.access_token;
            let refreshToken = res.data.refresh_token;
            localStorage.setItem('CC_Token', accessToken);
            localStorage.setItem('RF_Token', refreshToken);
            setIsLoggingIn(true);
          }
        });
    };
    // 현재 주소창에서 code params를 찾아서 토큰을 발급받기 위한 인가 코드를 알아냄
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      await getAccessToken(authorizationCode);
    }
  }, [setIsLoggingIn, isLoggingIn]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getUserData = async (accessToken) => {
      await axios
        .post('http://localhost:8080/auth/kakao/info', {
          accessToken,
        })
        .then((res) => {
          if (res.data) {
            // 카카오 로그인 사용자 정보 불러오기 api 에서 동의한 항목을 불러옴
            setProfile({
              ...profile,
              nickname: res.data.properties.nickname,
              profile_image_url: res.data.properties.profile_image,
            });
            setIsLoggingIn(false);
          }
        });
    };
    // 로컬스토리지에 액세스 토큰이 저장되면 정보 불러오기 함수를 실행함
    if (Boolean(localStorage.getItem('CC_Token'))) {
      await getUserData(localStorage.getItem('CC_Token'));
    }
  }, [isLoggingIn, setProfile]);

  return profile;
}

export default useProfileData;
