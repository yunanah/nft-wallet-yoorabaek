const kakaoLogin = () => {
  console.log('kakao login here');
  window.Kakao.Auth.login({
    scope: 'profile_nickname, profile_image, account_email, gender',
    success: function (authObj) {
      console.log('hi');
      console.log(authObj);
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakao_account = res.kakao_account;
          console.log(kakao_account);
          window.sessionStorage.setItem(
            'user_nickname',
            kakao_account.profile.nickname,
          );
          window.sessionStorage.setItem(
            'user_profile_image',
            kakao_account.profile.profile_image_url,
          );
        },
      });
    },
    fail: function (err) {
      alert(JSON.stringify(err));
    },
  });
};
export default kakaoLogin;
