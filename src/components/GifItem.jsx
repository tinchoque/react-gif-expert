import React from 'react'

export const GifItem = ({title, url}) => {
    // console.log(url)
  return (
    <div className='card'> 
        {title}
        <img src={url} alt={title} />
        <p>title</p>
    </div>
  )
}
