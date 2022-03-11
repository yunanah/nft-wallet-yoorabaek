import '../../styles/togglebar.css';

import styled from 'styled-components';

import SideBarFooter from '../SideBarFooter';
import SideBarHeader from '../SideBarHeader';
import SideBarMenu from '../SideBarMenu';

function SideToggleBar(props) {
  const { toggleBar, setToggleBar } = props;
  console.log(toggleBar);
  return (
    <>
      <ToggleBar toggleBar={toggleBar}>
        <SideBarHeader />
        <SideBarMenu />
        <SideBarFooter />
      </ToggleBar>
      <Overlay
        toggleBar={toggleBar}
        onClick={() => setToggleBar(false)}
      ></Overlay>
    </>
  );
}

const ToggleBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 260px;
  background-color: #fff;
  transform: ${(props) =>
    props.toggleBar ? 'translateX(0)' : 'translateX(-260px)'};
  transition: transform 0.3s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  visibility: ${(props) => (props.toggleBar ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.toggleBar ? '1' : '0')};
  z-index: 1;
  transition: opacity 0.3s;
`;

export default SideToggleBar;
