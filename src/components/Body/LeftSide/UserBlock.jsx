import React from 'react'

function UserBlock() {
  return (
    <div className="hidden lg:block h-fit w-full  rounded-lg shadow-lg bg-white ring-slate-200 ring-2">
    <div className="overflow-hidden rounded-t-lg h-28" style={{backgroundColor: '#7a81a8'}}></div>
    <div className="w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
    </div>
    <div className="p-6">
      <h4 className="text-2xl font-semibold mb-4">Lisa Cudrow</h4>
      <hr />
      <p className="mt-4">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
        </svg>
        Neque cupiditate assumenda in maiores
        repudi mollitia architecto.
      </p>
    </div>
    <div className="flex flex-col justify-center">
    <button className="inline-block mx-1 my-1 px-2 py-2.5 bg-slate-200 text-slate-500 font-medium text-xs  leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:text-white texthover:shadow-lg focus:bg-slate-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

    <button className="inline-block mx-1 my-1 px-2 py-2.5 bg-slate-200 text-white font-medium text-xs  leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

    <button className="inline-block mx-1 my-1 px-2 py-2.5 bg-slate-200 text-white font-medium text-xs  leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

    </div>
  </div>
  )
}

export default UserBlock