import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import cardMetaState from '../stores/cardMeta/atom';
import useRecentCard from './useRecentCard';

// 최근 받은 카드의 서버에 저장된 데이터에서 card의 uri를 통해 카드의 구체적 정보가 담긴 Json 파일에 순차적으로 접근
function useRecentCardMeta() {
  const cardData = useRecentCard();
  const [cardMeta, setCardMeta] = useRecoilState(cardMetaState);

  useEffect(() => {
    // 비동기 처리해서 얻은 데이터에서 다시 비동기 처리가 필요하므로 setTimeout을 통해 인위적으로 순차 처리함
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

    // 서버에서 받은 카드 데이터의 cardUri를 통해 메타 데이터 (json)를 불러옴
    const getUriFromData = async (array) => {
      const promises = array.map((item) => async_getJSON(item.cardUri));
      setCardMeta(await Promise.all(promises));
    };

    getUriFromData(cardData);
  }, [cardData.length, setCardMeta]);

  return cardMeta || [];
}

export default useRecentCardMeta;
