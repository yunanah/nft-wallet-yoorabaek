import styled from 'styled-components';

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
