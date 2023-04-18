import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="text-3xl flex justify-between items-center font-bold p-3 border-b-2 border-gray-500 ">

    <span>Metaverse<span className="text-red-500">Film Area</span></span>

    <Link to={'/add'} ><h1 className='text-lg cursor-pointer flex'>
    <Button className='text-white '><AddIcon className='mr-2 'color='secondary'/> <span className='text-white'>Add New </span></Button>
    </h1></Link> 
    </div>
  )
}

export default Header
