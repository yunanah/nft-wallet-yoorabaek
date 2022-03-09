import { NFTStorage, File } from 'nft.storage';
import fs from 'fs';

const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY3NjI0NTlmQzBiYmIxRThmNWI2YzAzMDQ1RTlEYmQ5OTQxNGY4NzQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NjgyMzM2OTA5NiwibmFtZSI6InByb2plY3QyMjAzIn0.KiyBPdpGsDC8Y8q9-DvDmDcGGXkMgo7D_4lv2Atu26w';
const client = new NFTStorage({ token: apiKey });

const nft_4 = await client.store({
  name: 'light',
  description: '[조구만 선물] light 배경화면',
  image: new File([fs.readFileSync('assets/light.jpg')], 'light.jpg', {
    type: 'image/jpg',
  }),
});

console.log(nft_4.url);
