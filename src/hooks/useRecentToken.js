import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import tokenState from '../stores/tokens/atom';

// 서버에 내가 보유한 토큰 목록을 get 요청하고 응답 받은 데이터를 전역 recoil state로 관리
function useRecentToken() {
  const [tokens, setTokens] = useRecoilState(tokenState);

  useEffect(() => {
    axios
      .get('http://localhost:8080/wallet/token')
      .then((res) => {
        if (res)
          setTokens(
            res.data.map((item) => ({
              ...item,
              imageUrl: `${item.imageUrl}?random=${Math.random()}`,
            })),
          );
      })
      .catch((err) => console.log(err));
  }, []);

  return tokens;
}

export default useRecentToken;
