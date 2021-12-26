import React from 'react'
import { Link } from 'react-router-dom'

const TwentyfivePlusFiveClock = () => {
    return (
        <main>
            <section className="project section-center">
                <div className="title">
                    <h3>25 + 5 clock</h3>
                    <div className="underline"></div>
                </div>
                <h4>This project is currently under development...</h4>
                <Link to="/"><button className='btn btn-back'>go back</button></Link>
            </section>
        </main>
    )
}

export default TwentyfivePlusFiveClock