# Marvel-app-project

React based Marvel API project

API referance: https://developer.marvel.com/documentation/getting_started

Env variable 
Create a .env file in then root and add the following
```
REACT_APP_TS = timestamp 

REACT_APP_API_KEY = your public API key

REACT_APP_HASH =  a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey) 
```
Set up for development environment
```
npm install
cd marvel-app
npm start
```
project URL: https://marvel-app-avishka.netlify.app/

![Image of Yaktocat](https://raw.githubusercontent.com/avishka964/marvel-app-project/master/marvel-app.png)
