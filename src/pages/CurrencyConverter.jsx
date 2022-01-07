import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CurrencyRow from '../components/CurrencyConverter/CurrencyRow'

const CURRENCY_CODES_URL = 'https://v6.exchangerate-api.com/v6/b1e3da990e546618bf72310c/codes';

const CurrencyConverter = () => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()

    useEffect(() => {
       fetch(CURRENCY_CODES_URL)
        .then(res => res.json())
        .then(data => {
            const firstCurrency = data.supported_codes[0]
            setCurrencyOptions([...data.supported_codes])
            setFromCurrency(firstCurrency)
            setToCurrency(firstCurrency)
        })
    }, [])

    console.log("From " + fromCurrency);
    console.log(`To ${toCurrency}`);
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
                    onChangeCurrency = {e => setFromCurrency(e.target.value.split(','))}/>
                <div>=</div>
                <CurrencyRow 
                    currencyOptions = {currencyOptions} 
                    selectedCurrency = {toCurrency}
                    onChangeCurrency = {e => setToCurrency(e.target.value.split(','))}/>
                <Link to="/"><button className='btn btn-back'>go back</button></Link>
            </section>
        </main>
    )
}

export default CurrencyConverter