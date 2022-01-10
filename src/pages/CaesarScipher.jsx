import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaesarScipher = () => {

    const [string, setString] = useState("");
    const [error, setError] = useState(false);
    const [result, setResult] = useState('Try to decode ROT13 message');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (string !== "") {
            try {

                // using global object to create array from string
                const newStr = Array.from(string).map((e) => {

                    //using regular expression to check  if character is a letter
                    if (e.match(/[A-Z]/i)) {

                        //shift character by 13 places
                        let code = e.charCodeAt(0) + 13;
                        if (code > 90) {
                            code = code - 90 + 64;
                        }
                        return code;
                    } else {
                        return e.charCodeAt(0);
                    }
                }
                );

                //using global object String to convert array to a string
                setResult(newStr.map((x) => String.fromCharCode(x)).join("").split("-").join(" "));

            } catch (error) {
                setError(true);
                console.log(error);
            }
        } else {
            setResult("Enter some encoded sentence")
        }
    }

    return (
        <main>
            <section className="project section-center">
                <div className="title">
                    <h3>caesar scipher</h3>
                    <div className="underline"></div>
                </div>
                <h4>{result}</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={string}
                        onChange={(e) => setString(e.target.value.toUpperCase())}
                        placeholder='Encoded uppercase sentence'
                        className={`${error ? 'error' : null}`}
                    />
                    <button className='btn' type='submit'>
                        decode
                    </button>
                </form>
                <p>One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
                    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.</p>
                <Link to="/"><button className='btn btn-back'>go back</button></Link>
            </section>
        </main>
    )
}

export default CaesarScipher