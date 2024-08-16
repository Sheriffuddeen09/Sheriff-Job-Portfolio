import { Link } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"
const Header = () =>{

    const [toggle, setToggle] = useState(false)
    const [prof, setProf] = useState(false)
    const homepage = useLocation().pathname
    const handleToggle = () =>{
        setToggle(!toggle)
    }

    const handleProfile = () =>{
      setProf(!prof)
  }
    return (
        <>
        <header className="bg-white">
            <section className=" header pb-1 px-6 pt-6 flex justify-between items-center ">
            <div className="flex justify-around">
                <h1 className="text-3xl font-bold text-blue-700 h1">SheriffPortfolio</h1>
                <button onClick={handleToggle} 
                className="text-3xl md:block md:translate-x-72 lg:hidden relative -top-2 -right-6
                 focus:outline-none">
                    &#9776;
                </button>
                <nav className="hidden lg:block">
                <div className="inline-flex gap-8">
                <Link to={'/'} className='home'><p>Home</p>
                <div className={`'background' ${homepage === '/' ? 'prim' : 'background'}`}></div>
                </Link>
                <Link to={'/reviews'} className='combine'><p>Company reviews</p>
                <div className={`'background' ${homepage === '/views' ? 'primar' : 'background'}`}></div>
                </Link>
                </div>
                </nav>
            </div>
            
            <nav className="hidden lg:block">
            <div className="inline-flex gap-8">
                <Link className='primarymes' to={'/mes'}><p ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg> </p>
<div className={`'background' ${homepage === '/mes' ? 'pri' : 'background'}`}></div></Link>
                <Link to={'/notify'} className='primary'><p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
</p>
<div className={`'background' ${homepage === '/notify' ? 'pri' : 'background'}`}></div>
</Link>
  <p onClick={handleProfile} to={'/user'}className='primary'><p ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 " onClick={handleProfile}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</p> 
<div className={`'background' ${homepage === '/user' ? 'pri' : 'background'}`}></div>
</p>
                <div className="h-8 w-0.5 bg-black"></div>
                <Link to={'/job'} className='combine'><p>Employers/Post Job</p>
                <div className={`'background' ${homepage === '/job' ? 'prima' : 'background'}`}></div>
                </Link>
        </div>
            </nav>
            </section>

        </header>
        <section className={`menu fixed top-0 h-full w-full left-0 block lg:hidden ${toggle ? "block" : "hidden"}`} >
            <div className="bg-white md:translate-x-40 w-96 md:w-full flex z-10	flex-col p-4 mx-auto translate-x-28 h-full">
                <button onClick={handleToggle} className="w-40 md:translate-y-6 md:fixed md:top-0 md:right-32"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 fixed left-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
                <Link to={'/'}>
                <span className="flex flex-row items-center gap-40">
                 <p className="mt-14 mb-4 font-bold">Home</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/reviews'}>
                <span className="flex flex-row items-center  gap-20">
                 <p className="mt-4 mb-4 font-bold">Company reviews</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/user'}>
                <span className="flex flex-row items-center gap-40">
                 <p className="mt-4 mb-4 font-bold">Profile</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/job'}>
                <span className="flex flex-row items-center gap-36">
                 <p className="mt-4 mb-4 font-bold">My jobs</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/mes'}>
                <span className="flex flex-row items-center gap-36">
                 <p className="mt-4 mb-4 font-bold">Message</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/account'}>
                <span className="flex flex-row items-center gap-36">
                 <p className="mt-4 mb-4 font-bold">Settings</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/notify'}>
                <span className="flex flex-row items-center gap-28">
                 <p className="mt-4 mb-4 font-bold">Notification</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/help'}>
                <span className="flex flex-row items-center gap-28">
                 <p className="mt-4 mb-4 font-bold">Help Center</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/signin'}>
                <span className="flex flex-row items-center gap-36">
                 <p className="mt-4 mb-4 font-bold">Sign Out</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
            </div>
        </section>
        <div className={`z-10 fixed top-16 right-20 flex flex-col ${prof ? "block" : "hidden"}`}>
              <div className={`flex flex-col bg-white border rounded-lg w-72 p-4 shadow-lg ${prof ? "block" : "hidden"}`}>
                <p className="font-bold my-4">odukoyasheriff@gmail.com</p>
                <Link to={'/user'}>
                  <p className="inline-flex gap-4 m-2 items-center m-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
 Profile</p>
                </Link>
                <Link to={'/job'}>
                   <p className="inline-flex gap-4 m-2 items-center m-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
</svg>

 My Job</p>
                </Link>
                <Link to={'/reviews'} >
                  <p className="inline-flex gap-4 items-center m-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

 Reviews</p>
                </Link>
                <Link to={'/account'}>
                  <p className="inline-flex gap-4 m-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

Settings</p>
                </Link>
                <Link to={'/help'}>
                <p className="inline-flex gap-4 m-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
Help</p>
                </Link>
                <hr  className="w-full my-3"/>
                <Link to={'/signin'}>
                <p className="font-bold text-center text-blue-900">Signout</p>
                </Link>
              </div>
            </div>
        </>
    )
}

export default Header