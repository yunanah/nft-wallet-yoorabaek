function KakaoLoginButton() {
  function loginWithKakao() {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email, gender',
      success: function (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
          },
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  }
  return (
    <div className="KakaoLoginButton">
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="242"
          alt="카카오 로그인 버튼"
        />
      </a>
    </div>
  );
}

export default KakaoLoginButton;
