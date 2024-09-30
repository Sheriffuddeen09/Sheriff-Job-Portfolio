import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
const Account = ({emails, phones}) =>{

    const homepage = useLocation().pathname

    const [api, setApi] = useState(JSON.parse(localStorage.getItem('checklist')) || [])
    const [selected, setSelected] = useState([])
    const [toggle, setToggle] = useState(false)
    const [type, setType] = useState(false)
    

    const handleToggle = () =>{
        setToggle(!toggle)
    }
    const handleType = () =>{

        setType(!type)
    }
    useEffect(() =>{
        fetch("https://blog-server-fi2x.onrender.com/check").then(data=>data.json()).then(val =>setApi(val))
        localStorage.setItem('checklist', JSON.stringify(api))
    }, [api])

    const handleChange = (e, index) =>{
        console.log(e.target.value)
        const activeCheck = document.getElementById(index).checked
        console.log(activeCheck, "activeCheck")
        if(activeCheck === true){
            setSelected(oldData=>[...oldData,e.target.value])
        }
        else{
            setSelected(selected.filter(values => values !== e.target.value))
        }
    }
    const inputcontent = (
        <div>
            {
                api.map((box, i) =>(
                    <div key={i}>
                        <input id={i} type="checkbox" className="w-5 h-5 rounded-lg" value={box.name} onChange={(e) =>handleChange(e, i)} /><div className="m-4 font-bold -translate-y-11 translate-x-5">{box.name}</div>
                    </div>  
                ))
            }
        </div>
    )
    const content= (
        <div>
            {
                emails.map((email) => {

                    return (
                        <div className="sm:flex sm:flex-row flex-col flex flex-wrap sm:flex-nowrap justify-around sm:justify-betweengap-32">
                            <div className="">
                             <p className="text-blue-700 font-bold">Email</p>
                            <p>{email.email}</p>
                             </div>

                            <Link to={`/emailid/${email.id}`}><button className="text-blue-600 border border-blue-600 font-bold rounded-lg py-2 w-64 sm:w-52 mt-4 sm:mt-0 sm:p-2">Change Email</button></Link>
    
                        </div>
                    )
                })
            }
        </div>
    )

    const phonecontent= (
        <div>
            {
                phones.map((phone) => {

                    return (
                        <div className="sm:flex flex-row flex-wrap sm:flex-nowrap justify-around sm:justify-between gap-14 my-10">
                            <div className="">
                             <p className="text-blue-700 font-bold">Phone Number</p>
                            <p>{phone.phone}</p>
                             </div>

                            <Link to={`/phoneid/${phone.id}`}><button className="text-blue-600 border border-blue-600 font-bold w-64 mt-4 sm:mt-0  sm:w-52 sm:px-2 rounded-lg p-2">Change Phone</button></Link>
    
                        </div>
                    )
                })
            }
        </div>
    )

    return (
        <section className="p-4 lg:mx-14 inline-flex gap-0 md:ml-10">
            <div className="sm:block hidden bg-gray-100 p-2 -mt-4 -translate-x-16">
           
            <h1 className="font-bold text-4xl my-6">My Jobs</h1>
        <ul className="flex flex-col gap-10 ">
            <Link to={'/account'}>
              <span className="inline-flex gap-24 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              <span>
               <p className="font-bold ">Account Settings</p>
               Contact information and password
               <p></p> 
               </span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

               </span>
            <div  className={`'li' ${homepage === '/account' ? 'aselected' : 'li'}`}> </div>
            </Link >
            <Link to={'/emailsetting'}>
            <span className="inline-flex gap-36 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              <span>
               <p className="font-bold ">Email Settings</p>
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
            <span className="inline-flex gap-20 items-center">
              <span className="inline-flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

              <span>
               <p className="font-bold ">Device management</p>
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
        <section className={`menu fixed top-0 h-full w-full left-0 block sm:hidden ${toggle ? "block" : "hidden"}`} >
            <div className="bg-white translate w-96 md:w-full flex z-10	flex-col p-4 mx-auto translate-x-28 h-full">
                <button onClick={handleToggle} className="w-40 -translate-x-28"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 fixed right-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
                <Link to={'/account'}>
                <span className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-between">
                 <p className="mt-14 mb-4 font-bold">Account</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/emailsetting'}>
                <span className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-between">
                 <p className="mt-4 mb-4 font-bold">Email Settings</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/device'}>
                <span className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-between">
                 <p className="mt-4 mb-4 font-bold">Device</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/privacy'}>
                <span className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-between">
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
        <div className="mb-10 mt-8 p-3">
        <button onClick={handleToggle} 
                className="text-3xl block sm:hidden relative -top-10
                 focus:outline-none">
                    &#9776;
                </button>
            <p className="font-bold text-2xl">Account settings</p>
            <hr className="bg-gray-200 my-6 w-60 sm:w-96 mx-auto" />
            <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-around sm:justify-between">
                <div>
                    <p className="font-bold">Account type:</p>
            <p> 
                {
                selected.map((a, i) =><div key={i}>
                        {a}
                    </div>
                )
            }
            </p>
            </div>
            <button onClick={handleType} className="text-blue-600 border  border-blue-600 font-bold rounded-lg py-2 mt-4 sm:mt-0 sm:w-64 w-64 sm:p-2">Change Account type</button>

            </div>
            <hr className="bg-gray-200 my-6 w-60 sm:w-96 mx-auto" />           
            <div className="">
                <div>
                    <p>{content}</p>
                </div>
            <hr className="bg-gray-200 my-6 w-60 sm:w-96 mx-auto" />
                <p>{phonecontent}</p>
             </div>

             <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80 ${type ? "block" : "hidden"}`}>
                <div onClick={handleType} className={`sm:w-96 w-72 bg-white p-10 rounded-lg ${type ? "block" : "hidden"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fixed right-96 -translate-y-8" onClick={handleType}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                    {inputcontent}
                </div>
            </div>
            <p className="font-bold ">Third-party applications</p>
            <p className="w-64 sm:w-96">No third-party applications have access to your account</p>
            <hr className="bg-gray-200 my-6 w-60 sm:w-96 mx-auto" />
            <div className="flex-col flex sm:flex sm:flex-row sm:flex-nowrap sm:items-center justify-around sm:justify-between">
                <p>odukoyasheriff@gmail.com</p>
                <Link to={'/signin'}>
                <button className="text-blue-600 border-gray-200 rounded-lg py-2 w-64 sm:52 mt-4 sm:mt-0 sm:p-1 border">
                Signout
                </button>
                </Link>
            </div>
            <hr className="bg-gray-200 my-6 w-60 sm:w-96 mx-auto" />

        </div>
</section>

    )
}

export default Account

