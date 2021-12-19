import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ id, title, desc, img, category }) => {
    return (
        <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>{category}</h4>
                </header>
                <p className='item-text'>{desc}</p>
            </div>
        </article>
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
