import { MenuList } from '@mui/material'
import React from 'react'

const MenuItem = ({pic,name,price}) => {
  return (
    <div className='Mmenu'>
        <img src={pic} />
        <h2>{name}</h2>
        <p>{price}</p>
    </div>
  )
}

export default MenuItem
