import React from 'react'
import PropTypes from 'prop-types'

const CurrencyRow = props => {
    const {currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount } = props;
    return (
        <div className='exchange-container'>
            <input type='number' value={amount} onChange={onChangeAmount}/>
            <select className='exchange-select' value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option[0]} value={option}>{option[0]} - {option[1]}</option>
                ))}
            </select>
        </div>
    )
}

CurrencyRow.propTypes = {
    currencyOptions: PropTypes.array,
    selectedCurrency: PropTypes.array,
    onChangeCurrency: PropTypes.func,
    onChangeAmount: PropTypes.func,
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
}

export default CurrencyRow
