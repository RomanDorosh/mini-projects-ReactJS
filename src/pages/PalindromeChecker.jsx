import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const PalindromeChecker = () => {
    const [string, setString] = useState("");
    const [palindrome, setPalindrome] = useState(null);
    const [error, setError] = useState(false);
    const [result, setResult] = useState('Try to check');
    const firstUpdate = useRef(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let myRegex = /[a-z0-9]/ig;
            let arr = string.toLowerCase().match(myRegex);
            let arrRev = string.toLowerCase().match(myRegex).reverse();
            setPalindrome(arr.join('') === arrRev.join(''))
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        palindrome ? setResult('It is a palindrome') : setResult('It is not a palindrome')
    }, [palindrome])

    return (
        <main>
            <section className="project section-center">
                <div className="title">
                    <h3>Palindrome Checker</h3>
                    <div className="underline"></div>
                </div>
                <h4>{result}</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={string}
                        onChange={(e) => setString(e.target.value)}
                        placeholder='Enter some word'
                        className={`${error ? 'error' : null}`}
                    />
                    <button className='btn' type='submit'>
                        submit
                    </button>
                </form>
                <p>A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.</p>
                <Link to="/"><button className='btn btn-back'>go back</button></Link>
            </section>
        </main>
    )
}

export default PalindromeChecker
