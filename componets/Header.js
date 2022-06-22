import Image from 'next/image';
import React from 'react';
import HeaderIcon from './HeaderIcon';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid';
const Header = () => {
  return (
    <div className="bg-gray-700 p-6 select-none text-gray-200 flex flex-col items-center sm:flex-row justify-between">

      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
      className='cursor-pointer active:brigthness-110'
      src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"  width={100} height ={100}/>
    </div>
  )
}

export default Header;
