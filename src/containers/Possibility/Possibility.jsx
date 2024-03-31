import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam tenetur explicabo quasi illo necessitatibus natus expedita aspernatur provident quae tempore eos similique ea, eveniet rerum, nemo quidem culpa, velit modi non incidunt. Unde in excepturi id eum, officiis odio.
        </p>
        <h4>Request for Early Access</h4>
      </div>
    </div>
  )
}

export default Possibility