import styled from 'styled-components';

import banner_3 from '../../assets/main_ad_snap_1440x411.jpg';
import banner_1 from '../../assets/main_bottom_list_hyundaicard07_1440x810.png';
import banner_2 from '../../assets/main_carousel_klip_userguide_1440x810_revised.jpg';
import Banner from '../Banner';

// 광고 배너 묶음 컨테이너 컴포넌트
function BannerContainer() {
  return (
    <BannerBox>
      <Banner image={banner_1} />
      <Banner image={banner_2} />
      <Banner image={banner_3} />
    </BannerBox>
  );
}

const BannerBox = styled.div`
  background-color: rgb(240, 248, 250);
  padding: 32px 0;
`;

export default BannerContainer;
