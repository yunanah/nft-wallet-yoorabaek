import styled from 'styled-components';

// 컨테이너 컴포넌트의 상단 제목으로 사용되는 타이틀 컴포넌트
function BoxTitle({ children }) {
  return (
    <Title>
      <h3>{children}</h3>
    </Title>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default BoxTitle;
