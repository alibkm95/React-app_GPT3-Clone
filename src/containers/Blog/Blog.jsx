import React from 'react'
import './Blog.css'
import { Article } from '../../components'
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from '../../components/Article/imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A Lot is happening, We are bloging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article date="Sep 26, 2024" title="GPT-3 and OpenAI is the future. Let us explore how it is?" imgURL={blog01} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article date="Sep 26, 2024" title="GPT-3 and OpenAI is the future. Let us explore how it is?" imgURL={blog02} />
          <Article date="Sep 26, 2024" title="GPT-3 and OpenAI is the future. Let us explore how it is?" imgURL={blog03} />
          <Article date="Sep 26, 2024" title="GPT-3 and OpenAI is the future. Let us explore how it is?" imgURL={blog04} />
          <Article date="Sep 26, 2024" title="GPT-3 and OpenAI is the future. Let us explore how it is?" imgURL={blog05} />
        </div>
      </div>
    </div>
  )
}

export default Blog