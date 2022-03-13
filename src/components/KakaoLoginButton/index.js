// 카카오 로그인 버튼 눌렀을 때 로컬 서버의 /auth/kakao 라우터에 요청
function KakaoLoginButton(props) {
  return (
    <div className="KakaoLoginButton">
      <a id="custom-login-btn" href="http://localhost:8080/auth/kakao">
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width={props.width || '242'}
          alt="카카오 로그인 버튼"
        />
      </a>
    </div>
  );
}

export default KakaoLoginButton;
