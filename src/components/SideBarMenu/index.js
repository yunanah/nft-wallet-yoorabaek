import { faBell, faGem } from '@fortawesome/free-regular-svg-icons';
import {
  faAngleRight,
  faCog,
  faExternalLinkAlt,
  faGift,
  faHouse,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function SideBarMenu() {
  return (
    <Menu>
      <MenuItem href="/">
        <div>
          <FontAwesomeIcon icon={faHouse} />
          <MenuTitle>홈</MenuTitle>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </MenuItem>
      <MenuItem href="/">
        <div>
          <FontAwesomeIcon icon={faGem} />
          <MenuTitle>Klip Drops</MenuTitle>
        </div>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </MenuItem>
      <MenuItem href="/">
        <div>
          <FontAwesomeIcon icon={faThLarge} />
          <MenuTitle>서비스</MenuTitle>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </MenuItem>
      <MenuItem href="/">
        <div>
          <FontAwesomeIcon icon={faBell} />
          <MenuTitle>공지사항</MenuTitle>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </MenuItem>
      <MenuItem href="/">
        <div>
          <FontAwesomeIcon icon={faGift} />
          <MenuTitle>이벤트</MenuTitle>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </MenuItem>
      <MenuItem href="/">
        <div>
          <FontAwesomeIcon icon={faCog} />
          <MenuTitle>설정</MenuTitle>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </MenuItem>
    </Menu>
  );
}

const Menu = styled.div`
  margin: 16px auto;
`;

const MenuItem = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  text-decoration: none;
  color: rgb(192, 202, 212);
`;

const MenuTitle = styled.strong`
  margin-left: 8px;
  color: #282c34;
  font-weight: 500;
  font-size: 14px;
`;

export default SideBarMenu;
