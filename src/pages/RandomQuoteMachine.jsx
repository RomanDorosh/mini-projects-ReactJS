import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaQuoteRight } from 'react-icons/fa';

const RandomQuoteMachine = () => {

    const [quotes, setQuotes] = useState()
    const [quote, setQuote] = useState()
    const [ready, setReady] = useState(false)

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(data => {
            let randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
            setQuotes(data.quotes)
            setQuote(randomQuote)
            setReady(true)})
    }, [])
    
    const setRandomQuote = () => {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(randomQuote)
    }
    return (
        <main>
            {ready && (
                <section className="project section-center">
                    <div className="title">
                        <h3>random quote machine</h3>
                        <div className="underline"></div>
                    </div>
                    <div className='quote-box'>
                        <div className="quote-text">
                            <FaQuoteRight size={20}/> {quote.quote}
                        </div>
                        <div className='quote-author'>
                            - {quote.author}
                        </div>
                    <button className='btn' onClick={setRandomQuote}>new quote</button>

                    </div>
                    <Link to="/"><button className='btn btn-back'>go back</button></Link>
                </section>
            )}

        </main>
    )
}

export default RandomQuoteMachine