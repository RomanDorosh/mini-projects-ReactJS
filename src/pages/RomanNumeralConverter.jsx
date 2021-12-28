import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RomanNumeralConverter = () => {
    const [result, setResult] = useState("")
    const [number, setNumber] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
            let roman = '', i;
            let num = number;

            for (i in lookup) {
                while (num >= lookup[i]) {
                    roman += i;
                    num -= lookup[i];
                }
            }
            setResult(number === "" ? "Enter some number" : roman);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    return (
        <main>
            <section className="project section-center">
                <div className="title">
                    <h3>roman numeral converter</h3>
                    <div className="underline"></div>
                </div>
                <h4>{result}</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type='number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder='Enter some number'
                        className={`${error ? 'error' : null}`}
                    />
                    <button className='btn' type='submit'>
                        submit
                    </button>
                </form>
                <p>Convert the given number into a roman numeral.</p>
                <Link to="/"><button className='btn btn-back'>go back</button></Link>
            </section>
        </main>
    )
}

export default RomanNumeralConverter
