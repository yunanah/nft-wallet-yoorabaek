import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import tokenState from '../stores/tokens/atom';

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
