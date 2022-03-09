import SideToggleBarFooter from './SideToggleBarFooter';
import SideToggleBarHeader from './SideToggleBarHeader';
import SideToggleBarMenu from './SideToggleBarMenu';

function SideToggleBar() {
  return (
    <div className="SideToggleBar">
      <div>SideToggleBar</div>
      <SideToggleBarHeader />
      <SideToggleBarMenu />
      <SideToggleBarFooter />
    </div>
  );
}

export default SideToggleBar;
