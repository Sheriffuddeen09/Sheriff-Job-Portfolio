import useContent from './hook/useFormContext'
import { Link, useNavigate } from 'react-router-dom'
import port from './images/ports.png'
import Progress from './Progress'
import FormInputLogin from './FormInput'
const FormLogin = () =>{

    const navigate = useNavigate()
    const { data, setPage,page,
         canSubmit, nextHide, disableNext, prevHide, 
         disablePrev, submitHide, title, setData
        } = useContent()

    const handleSumbit = (e) =>{
        e.preventDefault()
        console.log(JSON.stringify(data))
        setData('')
        navigate('/thank')
    }

    const nextButton = () => setPage(prev => prev + 1)
    const prevButton = () => setPage(prev => prev - 1)

    return (
        <div className='flex flex-row gap-20'>
        <div className='px-8 ml-10 py-4 scrolllogin scrolllogin scroll-p-0 scroll-smooth overflow-y  scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-white'>
            <div className='flex flex-row items-center gap-60 ml-8 mb-10 py-4'>
                <span>
                    <img alt='logologin' src={port} height={70} width={70}/>
                </span>
            <Link className='text-green-300 underline' to={'/login'}>I have an Account</Link>
            </div>
         <form onSubmit={handleSumbit}>
            <p className='translate-x-8 text-2xl'> {title[page]} </p>
            <p className='mt-2 translate-x-8 text1x '>Enter your credentials below</p>
            <Progress />
            <div className='translate-x-80'> 
                <button type='button' onClick={prevButton} disabled={disablePrev} className={`prevbutton ${prevHide}`}>PrevButton</button>
                <button type='button' onClick={nextButton} disabled={disableNext} className={`button ${nextHide}`}>NextButton</button>
               <button type='submit' disabled={!canSubmit} className={`submitbutton ${submitHide}`}>Submit</button> 
            </div>
                <FormInputLogin />
            </form>
            </div>

            <div className='made'>
            <h1>
            SheriffShipment made my shipment process effortless and stress-free. Their team was professional, reliable and always kept me informed throughout the entire process.”
            </h1>
            <div className='madehr'></div>
            <p className='text-sm mt-10 text-black font-bold text-center p-2 w-52 bg-blue-300 rounded'>Amaeze Ifechukwu
            <br/>
            Experienced Agro Exporter</p>
            </div>
        </div>
    )
}
export default FormLogin