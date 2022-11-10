import React from 'react'
import NextEvents from "./NextEvents/NextEvents"

function RightSide() {
  return (
    <div className="flex flex-col sm:order-3 w-full items-center rounded-sm">
        {/* { rightDates.map(card => { */}
        <NextEvents />
        {/* })} */}
        <a className="flex items-center my-2 py-2 px-6 overflow-hidden text-gray-100 bg-slate-500 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out uppercase leading-tight font-medium text-xs" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Мои события</a>
    </div>
  )
}

export default RightSide