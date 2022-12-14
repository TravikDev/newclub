import React from 'react'

function NavUser() {
  return (
    <div className="dropdown relative">
    <a className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full"
        style={{height: '2rem', width: '2rem', alt:'someprop', loading:'lazy'}} />
    </a>
    <ul className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  " aria-labelledby="dropdownMenuButton2">
      <li>
        <a className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Action</a>
      </li>
      <li>
        <a className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Another action</a>
      </li>
      <li>
        <a className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Something else here</a>
      </li>
    </ul>
  </div>
  )
}

export default NavUser