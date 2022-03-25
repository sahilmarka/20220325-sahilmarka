import React from 'react'
import './searchCity.scss'

const SearchCity = () => {
  return (
    <div className='container'>
      <div className='item p-6'>
        <div className='primary-text'>CITY</div>
        <div className='secondary-text'>Select your city</div>
      </div>
      <div className='item p-6'>
        <p className='primary-text'>DATES</p>
        <p className='secondary-text'>Select your dates</p>
      </div>
      <div className='item p-6'>
        <p className='primary-text'>GUESTS</p>
        <p className='secondary-text'>Add guests</p>
      </div>
      <div className='search-button'> Search</div>
    </div>
  )
}

export default SearchCity