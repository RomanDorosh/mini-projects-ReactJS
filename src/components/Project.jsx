import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Project = ({ id, title, desc, img, category }) => {
    return (
        //Get route name from title
        <Link to={title.replace(/ /g, '')}>
            <article key={id} className='projects-list-item'>
                <img src={img} alt={title} className='photo' />
                <div className='item-info'>
                    <header>
                        <h4>{title}</h4>
                        <h4 className='category'>{category}</h4>
                    </header>
                    <p className='item-text'>{desc}</p>
                </div>
            </article>
        </Link>
    )
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default Project
