import styled from 'styled-components';

import useRecentCardMeta from '../../hooks/useRecentCardMeta';

function RecentGetCardList() {
  const cardData = useRecentCardMeta();

  if (!cardData) {
    return null;
  }

  return (
    <CardList>
      {cardData.map((item, index) => {
        return (
          <CardItem key={index}>
            <CardImage
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
