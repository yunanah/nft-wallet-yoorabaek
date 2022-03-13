## react app (클라이언트) 실행

- 루트 폴더에서 npm install 실행 후 다음 명령어 실행

```
npm install
```

```
npm start
```

## json-server (서버) 실행

- 루트 폴더 하위 폴더인 backend/ 폴더로 이동 후 다음 명령어 실행

```
cd backend/
```

```
nodemon server.js
```

## 디렉터리 구조

```bash
├── src (client, port:5500)
│   ├── components
│   ├── hooks
│   ├── stores (Recoil)
│   ├── styles
│   └── assets
├── backend
│   └── server.js (Node.js + mongoDB, port:8080)
└── nftstorage (card metadata json 생성)
```

### 추가 요구 사항 - 카카오 소셜 로그인 구현
