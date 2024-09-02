import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
const Privacy = () =>{

    const homepage = useLocation().pathname
    const [toggle, setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(!toggle)
    }

    return (
        
        <section className="p-4 sm:mx-14 inline-flex gap-0">
            <div className="sm:block hidden bg-gray-100 p-2 -mt-4 -translate-x-16">
            <button onClick={handleToggle} 
                className="text-3xl sm:hidden relative -top-2 -right-40
                 focus:outline-none">
                    &#9776;
                </button>
            <h1 className="font-bold text-4xl my-6">My Jobs</h1>
        <ul className="flex flex-col gap-10 ">
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
            <div  className={`'li' ${homepage === '/privacy' ? 'selectede' : 'li'}`}> </div>

            </Link>
        </ul>
        </div>
        <section className={`menu fixed top-0 h-full w-full left-0 block sm:hidden ${toggle ? "block" : "hidden"}`} >
            <div className="bg-white translate w-72 md:w-full flex z-10	flex-col p-4 mx-auto translate-x-28 h-full">
                <button onClick={handleToggle} className="w-40 md:translate-y-6 md:fixed md:top-0 md:right-32"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 fixed right-6">
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
                className="text-3xl block sm:hidden relative -top-3
                 focus:outline-none">
                    &#9776;
                </button>
            <h1 className="text-xl font-bold">Privacy settings</h1>
            <hr className="bg-gray-200 my-6 lg:w-96" />
            <h1 className="font-bold text-xl mb-6 ">Types of data collected</h1>
            <p className="">We collect different types of data depending on how you interact with us. This includes, for example, when you're on our site, responding to our promotional materials, and using our services to help you find a job. For example, we may collect your email address and resume information when you create your account. As another example, we may collect information about your activity on our site, such as the searches you conduct and jobs you apply to. For more information on the types of data we collect, check out Section 2 of our Privacy Policy.</p>
            <hr className="bg-gray-200 my-6 lg:w-96" />
            <h1 className="text-xl font-bold">How my data is used and disclosed</h1>
            <p className="my-4">Indeed uses data to help people get jobs. How we use and disclose your data also depends on how you use our site. We go into much greater detail in Sections 4, 5 and 9 of our Privacy Policy explaining our use and disclosure of your data, but this can include to provide our services to you, to protect you when you use our site, and to measure, improve, and promote our services.</p>
            <hr className="bg-gray-200 my-6 lg:w-96" />

            <h1 className="text-xl font-bold">Cookies</h1>
            <p className="my-4">Our Cookie Policy explains how we use cookies, web beacons and similar technologies, including some offered by third-parties, to collect data about you. For more information about our use of these technologies and your ability to opt-out of them, please check out our Cookie Policy.</p>

            <hr className="bg-gray-200 my-6 lg:w-96" />
            <h1 className="text-xl font-bold">Accessing and Deleting My Data</h1>
            <p className="my-4">Indeed offers all of its users rights to access and delete their data, as detailed in Section 8 of our Privacy Policy. To access or delete your data held by Indeed, just fill out this form.</p>

            <hr className="bg-gray-200 my-6 lg:w-96" />
            <h1 className="text-xl font-bold">Make My Resume Hidden</h1>
            <p className="my-4">You can also set your Indeed Resume to "hidden" by visiting your Resume Privacy Settings. For more information on what it means to have a "searchable" or "hidden" Indeed Resume, please visit Section 4 our Privacy Policy</p>

            <hr className="bg-gray-200 my-6 lg:w-96" />
            <h1 className="text-xl font-bold">Calls from Employers on Indeed</h1>
            <p className="my-4">You are currently unsubscribed from receiving calls from Indeed and employers who use Indeed, including using automated call technology, forwarded, or recorded calls. Calls from employers on Indeed about your applications will not be forwarded to you. You will be subscribed again the next time you apply to a job through Indeed.</p>
            <hr className="bg-gray-200 my-6 lg:w-96" />
        </div>
        </section>
    )
}
export default Privacy