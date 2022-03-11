import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function ContainerTitle({ children }) {
  return (
    <Title>
      <h3>{children}</h3>
      <SeeAllButton href="/">
        전체보기 <FontAwesomeIcon icon={faAngleRight} />
      </SeeAllButton>
    </Title>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeeAllButton = styled.a`
  color: dimgray;
  text-decoration: none;
`;

export default ContainerTitle;
