import React from 'react'
import PropTypes from 'prop-types'

const CurrencyRow = props => {
    const {currencyOptions, selectedCurrency, onChangeCurrency} = props;
    return (
        <div>
            <input type="number" />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
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
    onChangeCurrency: PropTypes.func
}

export default CurrencyRow
