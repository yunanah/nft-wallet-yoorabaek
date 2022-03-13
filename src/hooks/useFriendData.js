import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import friendState from '../stores/friends/atom';

// 서버에 최근 전송한 친구 목록을 get 요청하고 응답 받은 데이터를 전역 recoil state로 관리
function useFriendData() {
  const [friendList, setFriendList] = useRecoilState(friendState);
  useEffect(() => {
    axios
      .get('http://localhost:8080/friend')
      .then((res) => {
        if (res)
          setFriendList(
            res.data.map((item) => ({
              ...item,
              imageUrl: `${item.imageUrl}?random=${Math.random()}`,
            })),
          );
      })
      .catch((err) => console.log(err));
  }, []);

  return friendList;
}

export default useFriendData;
