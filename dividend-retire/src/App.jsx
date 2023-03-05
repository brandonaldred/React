import { useState } from 'react'
import logo from './assets/logo.svg'
import Results from './Results'
import About from './About'
import './App.css'

function App() {
  const [ticker, setTicker] = useState('');
  const [expenses, setExepenses] = useState('2500');
  const [shares, setShares] = useState('');
  const [cost, setCost] = useState('')
  const [divi, setDivi] = useState('');
  const [totalExpenses, setTotalExpenses] = useState('');
  const [investment, setInvestment] = useState('');
  const [apiKey, setAPIKey] = useState('Place API Key Here');

  function calculateRetirement(expenses, price, dividend, response) {
    if (!dividend) { alert('no dividend available') }
    dividend = dividend * 4;
    expenses = expenses * 12;
    let shares = expenses / dividend;
    setShares(Math.round(shares).toLocaleString());
    setTotalExpenses(expenses.toLocaleString());
    let stockCost = Math.round(shares * price);
    setCost(cost)
    setInvestment(stockCost.toLocaleString())
    setDivi(dividend);
    console.log(response)
  }

  function getDividend() {
    let key = apiKey;
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
    fetch(`https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${ticker}&region=US`, options)
	  .then(response => response.json())
	  .then(response => calculateRetirement(expenses, response.price.regularMarketOpen.raw, response.defaultKeyStatistics.lastDividendValue.raw, response))
	  .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <header><img src={logo} alt="Retire with Dividends"/></header>
      {divi ? <Results
        shares={shares}
        dividend={divi}
        expenses={totalExpenses}
        investment={investment}
        cost={cost}
        /> : <About />}
      <label className="light-blue capitalize">Your total monthly expenses</label>
      <input type="number" name="expenses" id="expenses" onChange={event => setExepenses(event.target.value)} value={expenses.toLocaleString()}></input><br /><br />
      {/* <div className="checkboxes">
        <input type="checkbox" name="stocks" id="stocks" ></input>
        <label className="light-blue capitalize">Stock to invest in <span>(insert ticker)</span></label>
        <input type="checkbox" name="popular" id="popular"></input>
        <label className="capitalize" >View popular dividend stocks</label>
      </div> */}
      <label className="light-blue capitlize">Insert Ticker</label>
      <input className="" type="text" name="ticker" id="ticker" onChange={event => setTicker(event.target.value)} value={ticker}></input>
      <button onClick={getDividend}>Calculate</button>
      <p className="light-blue capitalize note">All information is provided via the Yahoo Finance API</p>
      <input type="text" name="apiKey" id="apiKey" placeholder={apiKey} onChange={event => setAPIKey(event.target.value)}></input>
    </div>
  )
}

export default App
