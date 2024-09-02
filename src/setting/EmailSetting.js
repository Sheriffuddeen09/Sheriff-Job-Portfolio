import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import useLocalStorage from "use-local-storage"

const EmailSetting = () =>{

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [istoggle, setIsToggle] = useLocalStorage("istoggle",preference)
    const [istogg, setIsTogg] = useLocalStorage("istogg",preference)
    const [istog, setIsTog] = useLocalStorage("istog",preference)
    const [isto, setIsTo] = useLocalStorage("isto",preference)
    const homepage = useLocation().pathname
    const [toggle, setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(!toggle)
    }
    const handleChecked = () =>{

        setIsToggle(!istoggle)
    }
    const handleChec = () =>{

        setIsTogg(!istogg)
    } 
    const handleCheck = () =>{

        setIsTog(!istog)
    } 
    const handleChecke = () =>{

        setIsTo(!isto)
    }

    return (
        
        <section className="p-4 mx-14 inline-flex gap-0">
            <div className="lg:block hidden bg-gray-100 p-2 -mt-4 sm:-translate-x-16">
                 <button onClick={handleToggle} 
                className="text-3xl md:block lg:hidden relative -top-2 -right-40
                 focus:outline-none">
                    &#9776;
                </button>
            <h1 className="font-bold text-4xl my-6">My Jobs</h1>
        <ul className="flex flex-col gap-10 ">
            <Link to={'/account'}>
              <span className="inline-flex gap-28 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              <span>
               <p className="font-bold ">Account Settings</p>
               
               <p className="text-sm">Contact information and password</p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 translate-x-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

               </span>
            </Link >
            <Link to={'/emailsetting'}>
            <span className="inline-flex gap-24 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              <span>
               <p className="font-bold  w-60">Email Settings</p>
               <p className="text-sm">Preferences for email messages</p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                
               </span>
            <div  className={`'li' ${homepage === '/emailsetting' ? 'selectede' : 'li'}`}> </div>

            </Link >
            <Link to={'/device'}>
            <span className="inline-flex gap-40 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              <span>
               <p className="font-bold ">Device management</p>
               <p className="text-sm">manage your active devices and sessions</p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
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
               <p className="font-bold ">Privacy</p>
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
        <section className={`menu fixed top-0 h-full w-full left-0 block lg:hidden ${toggle ? "block" : "hidden"}`} >
            <div className="bg-white translate w-96 md:w-full flex z-10	flex-col p-4 mx-auto translate-x-28 h-full">
                <button onClick={handleToggle} className="w-40 -translate-x-28"><svg xmlns="http://www.w3.org/2000/svg" onClick={handleToggle} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 fixed right-6">
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
        <div className="sm:ml-20 -ml-14 ">
        <button onClick={handleToggle} 
                className="text-3xl block lg:hidden relative -top-3
                 focus:outline-none">
                    &#9776;
                </button>
            <h1 className="font-bold text-2xl">Subscriptions</h1>
            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
          <Link to={'/reviews'}>
           <span className="flex flex-row items-center flex-wrap gap-10 sm:gap-20">
                <span>
                    <p className="font-bold ">Job and company alert</p>
                    <p className="sm:w-96 w-52">Emails about new jobs matching your job searches and companies you follow
                    </p>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </span>
            </Link> 
            <hr className="bg-gray-200 my-6 sm:w-96 w-64" />
            <h1 className="font-bold text-xl">Employer and recruiter emails</h1>
            <hr className="bg-gray-200 my-6 w-60 sm:w-96" />

            <Link to={'/user'}>
           <span className="flex gap-10 flex-row sm:gap-20">
                <span>
                    <p className="font-bold ">Resume contacts</p>
                    <p className="w-52 sm:w-96">Emails about new jobs matching your job searches and companies you follow
                    </p>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </span>
            </Link> 
            <p className="sm:flex sm:flex-row inline-flex w-60  flex-wrap gap-1 text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            To stop receiving these messages, adjust your<Link to={'/user'}><span className="mt-3 sm:mt-0 text-blue-500"> Resume Privacy Settings </span></Link></p>
            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
            <h1 className="text-2xl font-bold">Additional emails</h1>
            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
            <div className="flex flex-row w-64 sm:w-96 gap-2 items-center my-6">
                <label htmlFor="check" dark-theme={istoggle ? "dark" : "light"} className="label">
                    <p className="font-bold">Application and account status</p>
                    <p>Updates on your active job applications and Indeed <br/> account</p>
                </label>
            <input className="togglebutton" id='check'
            type="checkbox" onChange={handleChecked}/>
            <label  htmlFor="check" dark-theme={istoggle ? "dark" : "light"} className="label"></label>
            </div>

            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
            <div className="flex flex-row w-64 sm:w-96 gap-0 items-center my-6">
                <label htmlFor="check"  className="label">
                    <p className="font-bold">Recommended jobs</p>
                    <p>Targeted job recommendations based on your resume<br/> and activity</p>
                </label>
            <input className="togglebutton" id='checked' type="checkbox" onChange={handleChecke}/>
            <label  htmlFor="checked" dark-theme={isto ? "dark" : "light"} className="label"></label>
            </div>

            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
            <div className="flex flex-row gap-0 sm:w-96 items-center w-64 my-6">
                <label htmlFor="check"  className="label">
                    <p className="font-bold">Career guidance</p>
                    <p>Messages with career advice, company information, <br/> resume suggestions, and more</p>
                </label>
            <input className="togglebutton" id='checks'
            type="checkbox" onChange={handleCheck}/>
            <label  htmlFor="checks"  dark-theme={istog ? "dark" : "light"} className="label"></label>
            </div>

            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
            <div className="flex flex-row sm:w-96 w-60 gap-0 items-center my-6">
                <label htmlFor="check"  className="label">
                    <p className="font-bold ">Indeed feedback</p>
                    <p className="w-52">Requests from Indeed to provide feedback or <br/>participate in user studies and surveys</p>
                </label>
            <input className="togglebutton" id='checkeds'
            type="checkbox" onChange={handleChec}/>
            <label  htmlFor="checkeds"  dark-theme={istogg ? "dark" : "light"} className="label"></label>
            </div>

            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
            <div className="border rounded-lg p-5 my-6 sm:w-8/12 w-64">
               <h1>Want to get fewer emails from us?</h1>
               <h1 className="text-blue-600 my-4 ">Unsubscribe from all commerce emails</h1>
               <p className="sm:w-11/12 text-sm">Indeed may still send you emails for confirmations and other messages relevant to how you interact with Indeed. You can unsubscribe from job alert, company alert, and daily job feed subscriptions by updating your individual preferences on the Job and company alerts page.</p>
            </div>
            <hr className="bg-gray-200 my-6 sm:w-96 w-60" />
        </div>
        
        </section>
    )
}

export default EmailSetting

/*

          
            */