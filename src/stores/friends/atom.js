import { atom } from 'recoil';

const friendState = atom({
  key: 'friendState',
  default: [],
});

export default friendState;
