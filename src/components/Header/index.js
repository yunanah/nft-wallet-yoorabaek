import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import styled from 'styled-components';

import logo from '../../assets/klip.svg';

function Header(props) {
  const { setToggleBar } = props;

  const openSideBar = useCallback(() => {
    setToggleBar(true);
  }, []);

  return (
    <HeaderContainer>
      <FontAwesomeIcon
        style={{
          fontSize: '24px',
          fontWeight: '400',
        }}
        icon={faBars}
        onClick={openSideBar}
      />
      <img src={logo} alt="" />
      <FontAwesomeIcon style={{ fontSize: '28px' }} icon={faXmark} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
`;

export default Header;
