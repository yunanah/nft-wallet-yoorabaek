import kakaoLogin from '../../services/kakaoLogin';

function KakaoLoginButton() {
  const loginWithKakao = () => {
    kakaoLogin();
  };
  return (
    <div className="KakaoLoginButton">
      <a id="custom-login-btn" href="/" onClick={loginWithKakao}>
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
