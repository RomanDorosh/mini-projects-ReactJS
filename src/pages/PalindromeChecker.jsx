import React from 'react'

const PalindromeChecker = () => {
    const palindrome = (str) => {
        let myRegex = /[a-z0-9]/ig;
        let arr = str.toLowerCase().match(myRegex);
        let arrRev = str.toLowerCase().match(myRegex).reverse();
        if (arr.join('') === arrRev.join('')) {
            return console.log("true");
        }
        return console.log("false");;
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Palindrome Checker</h2>
                    <div className="underline"></div>
                </div>
                <button className='btn' onClick={() => palindrome("eyea")}>Check</button>
                <button className='btn'>go back</button>
            </section>
        </main>
    )
}

export default PalindromeChecker
