import React from 'react'
import './Card.css'


function Card({ title, imageurl, body, imageurl2 }) {
  return (
    <>
    <div className='quizcard-container' >
        <div className='image-container'>
            <img src={imageurl} alt='' />
        </div>

        <div className='quizcard-content'>
            <div className='quizcard-title'>
                <h3>{title}</h3>
            </div>

            <div className='quizcard-body'>
                <p>{body}</p>
            </div>
        </div>

        

        <div className='btn'>
            <button>
                <a href='https//'>
                    Take Questions
                </a>
            </button>
        </div>

    </div>
    

    <div className='codecard-container' >
        <div className='image-container'>
            <img src={imageurl2} alt='' />
        </div>

        <div className='codecard-content'>
            <div className='codecard-title'>
                <h3>{title}</h3>
            </div>

            <div className='codecard-body'>
                <p>{body}</p>
            </div>
        </div>

        

        <div className='btn'>
            <button>
                <a href='https//'>
                    Take Questions
                </a>
            </button>
        </div>

    </div>
    </>
  )
}

export default Card