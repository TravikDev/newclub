import { useState } from "react";
import './App.css';
import 'tw-elements';
import NavHeader from "./components/NavHeader/NavHeader";
import UserBlock from "./components/Body/LeftSide/UserBlock";
import MiddleSide from "./components/Body/MiddleSide/MiddleSide";
import RightSide from "./components/Body/RightSide/RightSide";
import CurrentEvent from "./components/Body/MiddleSide/CurrentEvent/CurrentEvent";
import NewsList from "./components/Body/MiddleSide/NewsPlace/NewsList";

const newArray = (length) => [...Array(length)]

function App({totalsCards = 5}) {

  const [rightDates, setRightDates] = useState([
    {
      name: "michel",
      age: 14
    },
    
    {
      name: "lisa",
      age: 14
    },
    
    {
      name: "kate",
      age: 14
    }
  ])

  return (
    <div className="App">
      
      <NavHeader />
{/* main */}

<div class="
    grid grid-cols-1
    sm:grid sm:grid-rows-12 sm:grid-cols-8 sm:grid-flow-col sm:gap-4 
    w-11/12 mx-auto mt-4">
  <div class="
    hidden 
    lg:block lg:col-span-2 lg:row-span-4">
      <UserBlock />
  </div>
  <div class="
    order-1 col-span-5 row-span-1 mb-4
    sm:order-2 sm:mb-0
    lg:col-span-4">
      <CurrentEvent />
  </div>
  <div class="order-3 col-span-5 sm:order-3 lg:col-span-4"><NewsList /></div>
  <div class="sm:row-span-4 order-2 sm:order-4 col-span-3"><RightSide /></div>
</div>
{/* 
<div className="flex flex-col sm:flex-row gap-4 w-11/12 mx-auto mt-4">
   
  <UserBlock />



    <div className="block sm:hidden">
       <CurrentEvent />
    </div>
    
    <div className="w-full">

    <div className="hidden sm:block">
      <CurrentEvent />
    </div>

    <NewsList />

    </div>
  


  <RightSide />


</div>

right overlay
 */}


<div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header flex items-center justify-between p-4">
    <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
    ...
  </div>
</div>

{/* right overlay */}

  </div>
  );
}

export default App;
