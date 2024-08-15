import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


const Device = () => {

    const homepage = useLocation().pathname
    const [toggle, setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(!toggle)
    }

    return (
        
        <section className="p-4 mx-14 inline-flex gap-0">
            <div className="sm:block hidden bg-gray-100 p-2 -mt-4 -translate-x-16">
            <h1 className="font-bold text-4xl my-6">My Jobs</h1>
        <ul className="flex flex-col gap-10 w-72">
            <Link to={'/account'}>
              <span className="inline-flex gap-24 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              <span>
               <p className="font-bold">Account Settings</p>
               Contact information and password
               <p></p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

               </span>
            </Link >
            <Link to={'/emailsetting'}>
            <span className="inline-flex gap-36 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              <span>
               <p className="font-bold">Email Settings</p>
               <p className="text-sm">Preferences for email messages</p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                
               </span>

            </Link >
            <Link to={'/device'}>
            <span className="inline-flex gap-20 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              <span>
               <p className="font-bold">Device management</p>
               <p className="text-sm">manage your active devices and sessions</p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

               </span>
            <div  className={`'li' ${homepage === '/device' ? 'selectede' : 'li'}`}> </div>

            </Link >
            <Link to={'/privacy'}>
            <span className="inline-flex gap-5 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              <span>
               <p className="font-bold">Privacy</p>
               <p className="text-sm">Information about SheriffPortfolio privacy settings</p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

               </span>

            </Link>
        </ul>
        </div>
        <section className={`menu fixed top-0 h-full w-full left-0 sm:hidden ${toggle ? "block" : "hidden"}`} >
            <div className="bg-white translate w-72 md:w-full flex z-10	flex-col p-4 mx-auto translate-x-28 h-full">
                <button onClick={handleToggle} className="w-40 md:translate-y-6 md:fixed md:top-0 md:right-32"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 fixed left-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
                <Link to={'/account'}>
                <span className="flex flex-row items-center justify-between">
                 <p className="mt-14 mb-4 font-bold">Account</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/emailsetting'}>
                <span className="flex flex-row items-center justify-between">
                 <p className="mt-4 mb-4 font-bold">Email Settings</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/device'}>
                <span className="flex flex-row items-center justify-between">
                 <p className="mt-4 mb-4 font-bold">Device</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/privacy'}>
                <span className="flex flex-row items-center justify-between">
                 <p className="mt-4 mb-4 font-bold">Privacy</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
</div>
</section>
        <div>
        <button onClick={handleToggle} 
                className="text-3xl block sm:hidden -left-10 relative -top-3
                 focus:outline-none">
                    &#9776;
                </button>
        </div>

        <div className="-ml-16 sm:-ml-0">
          <h1 className="font-bold text-xl mt-10">Device management</h1>
          <hr className="bg-gray-200 my-6 w-60 mx-auto sm:mx-0 lg:w-96" />
        <p>You are currently signed into your Indeed account on these devices.</p>
        <div className="inline-flex mt-6 rounded-lg border">
          <div className="bg-gray-400 rounded-tl-lg rounded-bl-lg">
            <h1 className="font-bold mb-6 mt-2 p-1 px-2">Device</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Date Logged In</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">IP Address</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Action</h1>
          </div>
          <div>
            <h1 className="mb-2 mt- p-1 px-2">Chrome <br/> Windows</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">June 29,2024</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">197.211.58213 <br/> Lagos</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">This device</h1>
          </div>
        </div>

        <div className="inline-flex mt-6 sm:translate-x-5 rounded-lg border">
          <div className="bg-gray-400 rounded-tl-lg rounded-bl-lg">
            <h1 className="font-bold mb-6 mt-3 p-1 px-2">Device</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Date Logged In</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">IP Address</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Action</h1>
          </div>
          <div>
            <h1 className="mb-2 mt- p-1 px-2">Chrome <br/> Andriod</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">April 18,2024</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">129.205.124.165 <br/> Lagos</h1>
            <hr />
            <Link to={'/signin'}><h1 className="mb-2 border rounded-lg mt-1 p-1 text-center font-bold text-blue-700 w-20 mx-auto">Sign out</h1></Link>
          </div>
        </div>

        <div className="inline-flex mt-6 rounded-lg border">
          <div className="bg-gray-400 rounded-tl-lg rounded-bl-lg">
            <h1 className="font-bold mb-6 mt-2 p-1 px-2">Device</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Date Logged In</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">IP Address</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Action</h1>
          </div>
          <div>
            <h1 className="mb-2 mt- p-1 px-2">Chrome <br/> Andriod</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">January 29,2024</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">197.211.58.219 <br/> Lagos</h1>
            <hr />
            <Link to={'/signin'}><h1 className="mb-2 border rounded-lg mt-1 p-1 text-center font-bold text-blue-700 w-20 mx-auto">Sign out</h1></Link>
          </div>
        </div>

        <div className="inline-flex mt-6 sm:translate-x-5 rounded-lg border">
          <div className="bg-gray-400 rounded-tl-lg rounded-bl-lg">
            <h1 className="font-bold mb-6 mt-2 p-1 px-2">Device</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Date Logged In</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">IP Address</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Action</h1>
          </div>
          <div>
            <h1 className="mb-2 mt- p-1 px-2">Chrome <br/> Windows</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">November 19,2023</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">197.211.59.154 <br/> Lagos</h1>
            <hr />
            <Link to={'/signin'}><h1 className="mb-2 border rounded-lg mt-1 p-1 text-center font-bold text-blue-700 w-20 mx-auto">Sign out</h1></Link>
          </div>
        </div>

        <div className="inline-flex mt-6 rounded-lg border">
          <div className="bg-gray-400 rounded-tl-lg rounded-bl-lg">
            <h1 className="font-bold mb-36 mt-2 p-1 sm:px-14 px-5">Device</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Date Logged In</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">IP Address</h1>
            <hr />
            <h1 className="font-bold mb-2 mt-2 p-1 px-2">Action</h1>
          </div>
          <div>
            <h1 className="mb-2 mt- py-1 px-1 sm:px-2">Mozilla/5.0 (Linux; U; Android 11; en-ng; TECNO BE6 Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36 PHX/12.5Android</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">June 29,2024</h1>
            <hr />
            <h1 className="mb-2 mt- p-1 px-2">197.211.58213 <br/> Lagos</h1>
            <hr />
            <Link to={'/signin'}><h1 className="mb-2 border rounded-lg mt-1 p-1 text-center font-bold text-blue-700 w-20 mx-auto">Sign out</h1></Link>
          </div>
        </div>
        </div>
        </section>
    )
}

export default Device