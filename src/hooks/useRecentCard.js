import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import cardsState from '../stores/cards/atom';

// 서버에 최근 받은 카드 목록을 get 요청하고 응답 받은 데이터를 전역 recoil state로 관리
function useRecentCard() {
  const [cardData, setCardData] = useRecoilState(cardsState);

  useEffect(() => {
    axios.get('http://localhost:8080/wallet/card').then((res) => {
      setCardData(res.data);
    });
  }, [setCardData]);

  return cardData || [];
}

export default useRecentCard;
