import React from 'react'
import newsData from "../../../../data/main/news-data.json"

function NewsList() {
  return (
newsData.map(news => (
  <div className="flex mb-4 justify-center ring-1 rounded-lg ring-slate-100">
    <div className="flex flex-col md:flex-row md:max-w-full rounded-lg bg-white shadow-lg">
      <img className=" relative w-full h-48 md:h-60 object-cover md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg" src={news.srcImg} alt="" />
      <button className="absolute m-2 flex content-start overflow-hidden text-gray-400 ring-1 ring-gray-300 bg-white text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-gray-300 transition duration-300 ease-in-out uppercase leading-tight font-medium text-xs" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>


      </button>

      <div className="flex flex-col content-between">
      <div className="p-6 py-4 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{news.title}</h5>
        <p className="text-gray-700 text-base mb-4">
          {news.short}
        </p>
      </div>
        <div className="flex justify-end mx-4">
        <p className="text-gray-600 text-xs">{news.postDate}</p>
        <button className="flex content-start p-1 overflow-hidden text-gray-400 ring-1 ring-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-gray-300 transition duration-300 ease-in-out uppercase leading-tight font-medium text-xs" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>

        </button>

        </div>
      </div>
    </div>
  </div>
))
// <div class=" bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//   <div class="md:flex">
//     <div class="md:shrink-0">
//       <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="Modern building architecture" />
//     </div>
//     <div class="p-4">
//       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
//       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accomodation for your team</a>
//       <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
//     </div>
//   </div>
// </div>

  )
}

export default NewsList