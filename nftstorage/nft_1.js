import { NFTStorage, File } from 'nft.storage';
import fs from 'fs';

const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY3NjI0NTlmQzBiYmIxRThmNWI2YzAzMDQ1RTlEYmQ5OTQxNGY4NzQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NjgyMzM2OTA5NiwibmFtZSI6InByb2plY3QyMjAzIn0.KiyBPdpGsDC8Y8q9-DvDmDcGGXkMgo7D_4lv2Atu26w';
const client = new NFTStorage({ token: apiKey });

const nft_1 = await client.store({
  name: '2022',
  description: '[조구만 선물] 2022 배경화면',
  image: new File([fs.readFileSync('assets/2022.jpg')], '2022.jpg', {
    type: 'image/jpg',
  }),
});

console.log(nft_1.url);
