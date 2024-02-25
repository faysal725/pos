import React from 'react'
import Link from 'next/link';

export default function FilterBtn({url, title}) {
  return (
    <Link
    href={url}
    className="rounded-md capitalize bg-white px-3.5 py-2.5 text-base font-semibold text-gray-700 shadow-sm ring-2 ring-inset ring-gray-400 hover:bg-gray-50"
  >
    {title}
  </Link> 
  )
}
