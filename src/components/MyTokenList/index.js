import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function MyTokenList() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/wallet/token')
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

  return (
    <TokenList>
      {tokens.length &&
        tokens.map((item, index) => {
          return (
            <TokenBox key={index}>
              <TokenImage src={item.imageUrl} alt="토큰 이미지" />
              <div className="tokenValue">
                {item.balance} {item.unit}
              </div>
            </TokenBox>
          );
        })}
    </TokenList>
  );
}

const TokenList = styled.div`
  height: 300px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TokenBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(247, 250, 253);
  margin: 4px auto;
  padding: 24px 16px;
  border-radius: 4px;
  font-weight: 500;
`;

const TokenImage = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  overflow: hidden;
`;

export default MyTokenList;
