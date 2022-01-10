import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CurrencyRow from '../components/CurrencyConverter/CurrencyRow'

const API_KEY = process.env.REACT_APP_API_KEY_EXCHANGE_CURRENCY;
const CURRENCY_CODES_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;

const CurrencyConverter = () => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState(1)
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    const [ready, setReady] = useState(false)

    // using simple logic to convert currencies instead of make API calls for every exchange
    let fromAmount, toAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    //get all currencies codes
    useEffect(() => {
       fetch(CURRENCY_CODES_URL)
        .then(res => res.json())
        .then(data => {
            const firstCurrency = data.supported_codes[0]
            setCurrencyOptions([...data.supported_codes])
            setFromCurrency(firstCurrency)
            setToCurrency(firstCurrency)
            setReady(true)
        })
    }, [])

    // get conversion rate for selected currencies
    useEffect(() => {
        if (ready) {
            
            // the API data is an array with two elements, the first one the ISO code and the second one the currency name, that why we get rate with first element
            fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency[0]}/${toCurrency[0]}`)
            .then(res => res.json())
            .then(data => {
                setExchangeRate(data.conversion_rate);
            })   
        }
     }, [fromCurrency, toCurrency, ready])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }
    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }
    return (
        <main>
            <section className="project section-center">
                <div className="title">
                    <h3>currency converter</h3>
                    <div className="underline"></div>
                </div>
                <CurrencyRow 
                    currencyOptions = {currencyOptions} 
                    selectedCurrency = {fromCurrency}
                    onChangeCurrency = {e => setFromCurrency(e.target.value.split(','))}
                    onChangeAmount={handleFromAmountChange}
                    amount = {fromAmount}/>
                <div className='exchange-equality-sign'>=</div>
                <CurrencyRow 
                    currencyOptions = {currencyOptions} 
                    selectedCurrency = {toCurrency}
                    onChangeCurrency = {e => setToCurrency(e.target.value.split(','))}
                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}/>
                <Link to="/"><button className='btn btn-back'>go back</button></Link>
            </section>
        </main>
    )
}

export default CurrencyConverter