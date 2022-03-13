import styled from 'styled-components';

// 광고 배너 컴포넌트 - 이미지 파일 src를 props로 전달
function Banner(props) {
  const { image } = props;

  return (
    <a href="/">
      <BannerItem src={image} alt="광고 배너" />
    </a>
  );
}

const BannerItem = styled.img`
  width: 90%;
  border-radius: 8px;
  margin: 4px auto;
`;

export default Banner;
