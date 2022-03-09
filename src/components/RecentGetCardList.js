import { useEffect } from 'react';
import axios from 'axios';

function RecentGetCardList() {
  useEffect(() => {
    axios.get('/card').then((res) => {
      if (res) console.log(res.data);
    });
  });

  return (
    <div className="RecentGetCardList">
      <div>RecentGetCardList</div>
    </div>
  );
}

export default RecentGetCardList;
