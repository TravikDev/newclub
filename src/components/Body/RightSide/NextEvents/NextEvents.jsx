import React from 'react'
import nextEvents from "../../../../data/main/next-events.json"

function RightBlock() {
  return (

    nextEvents.map(next => (

    <div className="w-full mb-4 ring-1 ring-slate-100 rounded-lg">

        <div className="flex justify-between rounded-lg shadow-md bg-white p-4">
          <div className="flex flex-row justify-between">
            <div className="ring-1 shadow-inner ring-slate-200 bg-gray-50 rounded-lg">
              <div className=" text-slate-800 w-20 h-20  flex flex-col justify-center items-center">
                <div className=" text-4xl">{next.eventDay}</div>
                <div className=" text-lg uppercase">{next.eventMonth}</div>
              </div>
            </div>
            <div className="flex flex-row">
            <div className="grow-0 shrink-0 basis-auto ml-4">
              <h5 className="sm:text-sm font-bold mb-1">{next.title}</h5>
              <p className="sm:text-xs text-gray-500">{next.short}</p>
              
            </div>

          </div>
          </div>
          <ul className="list-inside flex flex-col place-content-between">
              <button className="flex content-start p-1 overflow-hidden text-gray-400 ring-1 ring-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-gray-300 transition duration-300 ease-in-out uppercase leading-tight font-medium text-xs" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              
              </button>
{/* 
              <button className="flex justify-end p-1 overflow-hidden text-gray-400 ring-1 ring-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-gray-300 transition duration-300 ease-in-out uppercase leading-tight font-medium text-xs" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>



              </button> */}
              
          </ul>
          
        </div>
      </div>
      

    ))
  )
}

export default RightBlock