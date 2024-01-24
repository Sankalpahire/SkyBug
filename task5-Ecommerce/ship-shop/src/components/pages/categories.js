import React from 'react'
import Clothing from '../../img/mens.jpg'
import books from '../../img/books.jpg'
import grocery from '../../img/grosary.jpg'
import electronics from '../../img/electronics.jpg'
const category = () => {
  return (
    <div className='shop-by-category'>
        <div className='categories'>
            <div className='category'>
                <img src={Clothing} alt="menswaer" />
                <h4>Fashion Wear</h4>
            </div>
            <div className='category'>
                <img src={electronics} alt="electronics" />
                <h4>Tech gadgets</h4>
            </div>
            <div className='category'>
                <img src={books} alt="womenswear" />
                <h4>Books</h4>
            </div>
            <div className='category'>
                <img src={grocery} alt="kidswear" />
                <h4>Daily Needs</h4>
            </div>

        </div>

    </div>
  )
}

export default category