import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus suscipit fugit quas ipsa cum, repudiandae minus veniam reiciendis, eaque itaque accusantium eum in. Culpa, aliquam repudiandae! Eius quisquam voluptate distinctio?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="email-input" id="email-input" placeholder='Your Email Address ...' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>
            1,600 people requested to access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header