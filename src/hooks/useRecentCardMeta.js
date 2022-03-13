import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import cardMetaState from '../stores/cardMeta/atom';
import useRecentCard from './useRecentCard';

function useRecentCardMeta() {
  const cardData = useRecentCard();
  const [cardMeta, setCardMeta] = useRecoilState(cardMetaState);

  useEffect(() => {
    const async_getJSON = (uri) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          axios.get(uri).then((res) => {
            if (res) {
              resolve(res.data);
            }
          });
        }, 1000);
      });
    };

    const getUriFromData = async (array) => {
      const promises = array.map((item) => async_getJSON(item.cardUri));
      setCardMeta(await Promise.all(promises));
    };

    getUriFromData(cardData);
  }, [cardData.length, setCardMeta]);

  return cardMeta || [];
}

export default useRecentCardMeta;
