import React from 'react'
import {
    UserCircleIcon,
    PlusCircleIcon,
  } from "@heroicons/react/20/solid";


export default function ProfileSection() {
  return (
    <div className='px-8 py-8 flex items-center justify-between'>
        <div className="flex items-center gap-x-3  text-indigo-500">
            <UserCircleIcon className='h-7 w-7 ' />
            <p className='text-base font-semibold '>Steve Jobs</p>
        </div>
        <PlusCircleIcon className='h-7 w-7 text-indigo-500' />
    </div>
  )
}
