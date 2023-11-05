import React from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'

import img from '../../Assets/img.jpg'
import img1 from '../../Assets/img1.jpg'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the word. This place is known for its luxurious stays and adventurous activities.'
  },

  {
   id:2,
   imgSrc: img1,
   destTitle: 'Mach Picchu',
   location: 'Penu',
   grade: 'CULTURAL RELAX',
   fees: '$600',
   description: 'The epitome of romance, Machu Picchu is one of the best travel destinations in the word. This place is known for its luxurious stays and adventurous activities.'
  },
]
const Main = () => {

  return (

    <section className='main container section'>

      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
      {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className="destTitle"> {destTitle} </h4>
                  <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name"> {location} </span>
                  </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <BsClipboardCheck className='icon' />
                </button>
              </div>
            </div>
            )
        })
      }

      </div>

    </section>
  )
}

export default Main