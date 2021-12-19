import React, { useState } from 'react'
import PropTypes from 'prop-types'
import projectsData from '../assets/data/projects'
import Categories from './Categories';
import Project from './Project';

const allCategories = ['all', ...new Set(projectsData.map((project) => project.category))];


const ProjectList = () => {
    const [projects, setProjects] = useState(projectsData);
    const [categories, setCategories] = useState(allCategories)
    console.log(projects);

    const filterItems = (category) => {
        if (category === 'all') {
            setProjects(projectsData);
            return;
        }

        const newProjects = projectsData.filter((project) => project.category === category);
        setProjects(newProjects);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>my projects</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <div className='section-center'>
                    {projects.map((project) => {
                        return (
                            <Project key={project.id} {...project} />
                        );
                    })}
                </div>
            </section>
        </main>
    )
}

export default ProjectList
