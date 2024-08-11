import FormInput from './FormInput'
import useContent from './hook/useFormContext'
import {Link, useNavigate } from 'react-router-dom'
import Progress from './Progress'
import { useState } from 'react'
const Form = () =>{

    const navigate = useNavigate()
    const { data, setPage,page,
         canSubmit, nextHide, disableNext, prevHide, 
         disablePrev, submitHide, title, setData
        } = useContent()
const [exit, setExit] = useState(false)
    const handleSumbit = (e) =>{
        e.preventDefault()
        console.log(JSON.stringify(data))
        setData('')
        navigate('/thanks')
    }

    const handleExit = () =>{

        setExit(!exit)
    }

    const nextButton = () => setPage(prev => prev + 1)
    const prevButton = () => setPage(prev => prev - 1)

    return (
    <div>
        
        <div className=' sm:flex sm:flex-row sm:gap-20 sm:items-center sm:justify-around sm:py-4 mx-auto flex mx-14'>
        <div className='sm:px-8 sm:ml-10 py-4'>
         <form onSubmit={handleSumbit}>
        <span className='inline-flex gap-80'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={prevButton} disabled={disablePrev} className={`prevHide translate-x-6 -translate-y-2 ${prevHide}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
        <p onClick={handleExit} disabled={disablePrev} className={`cursor-pointer text-blue-800 font-bold prevHide translate-x-6 -translate-y-2 ${prevHide}`}> Exit </p>
        </span>
            <p className='translate-x-6 my-4 text-2xl font-bold w-10/12'> {title[page]} </p>
            <Progress />
           
                <FormInput />
            </form>
             <div className=''> 
    <button type='button' onClick={nextButton} disabled={disableNext} className={`button ${nextHide}`}>Continue</button>
   <button onClick={handleSumbit} disabled={!canSubmit} className={`submitbutton ${submitHide}`}>Submit</button> 
</div>
            </div>

            <div className='mad hidden md:hidden lg:block'>
            <h1>
            SheriffCareer made your job search easy and gives you update
             job vacancy notification.
            </h1>
            </div>
            
        </div>
    <div  className={`flex flex-col justify-center items-center fixed top-0 left-0 w-96 h-full w-full bg-black opacity-80 exit ${exit ? "block" : "hidden"}`} >
        <div className='w-4/12 rounded-lg bg-white z-10 isolate exit'>
            <span className='inline-flex'>
            <p className='p-4 font-bold text-black text-xl w-96'>Are you sure you want to exit?</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative top-4 right-4 cursor-pointer" onClick={handleExit}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            </span>
            <hr  className='w-full'/>
            <p className='p-4'>Your application and any documents uploaded during this application will not be saved.</p>
            <hr />
            <Link to={'/'}><button className='w-72 bg-blue-600 m-2 p-2 font-bold rounded-lg mx-auto flex justify-center text-white'>Exit</button></Link>
            <p className='p-2 text-center text-blue-700 text-center font-bold  mb-6 '>Report an issue</p>
        </div>
    </div>
</div>
)
}
export default Form