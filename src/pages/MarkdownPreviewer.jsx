import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState('# write something')

    return (
        <main>
            <section className="project section-center">
                <div className="title">
                    <h3>markdown previewer</h3>
                    <div className="underline"></div>
                </div>
                <section className="markdown">
                <textarea
                    className='markdown-input'
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                ></textarea>
                <article className='markdown-result'>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </article>
                </section>
                <Link to="/"><button className='btn btn-back'>go back</button></Link>
            </section>
        </main>
  )
}

export default MarkdownPreviewer