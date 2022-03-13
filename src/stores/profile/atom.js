import { atom } from 'recoil';

const profileState = atom({
  key: 'profileState',
  default: {
    nickname: '',
    profile_image_url: '',
  },
});

export default profileState;
