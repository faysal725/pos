import React from 'react'
import {
  UserCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/20/solid";

export default function ProfileContainer() {
  return (
    <div className='px-8 '>
        <div className="flex items-center gap-x-3 justify-center text-indigo-500">
            <UserCircleIcon className='h-7 w-7 pr-3' />
            <p className='text-base font-semibold '>Steve Jobs</p>
        </div>
    </div>
  )
}
