import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import cardsState from '../stores/cards/atom';

function useRecentCard() {
  const [cardData, setCardData] = useRecoilState(cardsState);

  useEffect(() => {
    axios.get('http://localhost:3000/wallet/card').then((res) => {
      // console.log(res);
      setCardData(res.data);
    });
  }, [setCardData]);

  return cardData || [];
}

export default useRecentCard;
