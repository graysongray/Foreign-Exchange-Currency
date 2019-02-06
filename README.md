# Foreign Exchange Currency App
This is a simple app that calculates a converted foreign exchange currency using the Foreign Exchange Rates API
https://exchangeratesapi.io/

This project was built within react, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started
First you need clone this git repository, and build the project either using `npm` or `docker`<br>
```
git clone https://github.com/graysongray/Foreign-Exchange-Currency.git
cd ForeignExchangeCurrency
```

### Installing & Run the project
Using NPM <br>
```
npm install
npm start
```
Using Docker <br>
```
docker build -t fe-docker .
docker run -it --rm -p 5000:5000 --name fe-app fe-docker.
```
