import axios from 'axios';
import lodash from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function RecentGetCardList() {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);
  let tempData = [];

  useEffect(() => {
    axios
      .get('http://localhost:3000/wallet/card')
      .then((res) => {
        if (res) {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));

    data.forEach(async (item) => {
      await axios
        .get(item.cardUri)
        .then((res) => {
          if (res) {
            tempData.push(lodash.cloneDeep(res.data));
          }
        })
        .catch((err) => console.log(err));
    });

    setCardData(tempData);
  }, []);

  return (
    <CardList>
      {!!cardData.length &&
        cardData.map((item, index) => {
          return (
            <CardItem>
              <CardImage
                key={item.cardId}
                style={{ width: '104px', height: '104px' }}
                src={'https://ipfs.io/ipfs' + item.image.substring(6)}
                alt=""
              />
              <CardName>{item.name}</CardName>
            </CardItem>
          );
        })}
    </CardList>
  );
}

const CardList = styled.div`
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardItem = styled.div`
  margin: 2px;
  position: relative;
  width: 104px;
  height: 104px;
`;

const CardImage = styled.img`
  border-radius: 4px;
`;

const CardName = styled.div`
  position: absolute;
  bottom: 0;
  padding: 8px 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export default RecentGetCardList;
