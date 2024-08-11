import { useState } from "react"
import useFormContext from "./hook/useFormContext"
import pdf from './images/pdf logo.jpg'

const Ship = () =>{


    const {data, handleFile} = useFormContext()
    const [hide, setHide] = useState(false)
    const [second, setSecond] = useState(false)
    const [apply, setApply] = useState(false)

    const handleHide = () =>{
        setHide(!hide)
    }

    const handleSecond = () =>{
        setSecond(!second)
    }
    const handleApply = () =>{
        setApply(!apply)
    }
    return (
        <section>
             
            <span onClick={handleHide} className={`flex flex-row cursor-pointer justify-between translate-x-10 my-6 ${hide ? "pdfhide" : "pdf"}`}>
                <span >
                    <span className="inline-flex items-center">
                    <img src={pdf} alt="pdf" width={50} height={50}/>
                    <span>
                    <p className="translate-x-3 text-xl text-blue-900 font-bold">Sheriff_Pdf_Cv.pdf</p><p className="translate-x-3 text-sm">uploaded 4 days agos</p>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 bg-blue-700 h-4 rounded-xl text-white translate-x-8 ${hide ? "block" : "hidden"}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> 
                    </span>
                    <div className={`mt-5 text-center 
                    ${hide ? "block" : "hidden"}`}>
                        {data.pdfFile && <>No file selected yet </>}
                    </div>
                    <div className={`mt-5 text-center 
                    ${hide ? "block" : "hidden"}`}>
                        {!data.pdfFile && <>No file to display</>}
                    </div>
                    <div >
                    <input className={`border border-gray-300 bg-white b w-60 text-center text-blue-900 font-bold mx-10 ${hide ? "block" : "hidden"}`}
                            type='file'
                            value={data.pdfFile}
                            name="pdfFile"
                            onChange={handleFile}
                            />
             </div>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 bg-blue-700 h-4 rounded-xl text-white ${hide ? "block" : "hidden"}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 


            </span>
            <hr  className="translate-x-10"/>
        <span onClick={handleSecond} className={` flex flex-row cursor-pointer justify-between translate-x-10 my-6 ${second ? "pdfhide" : "pdf"}`}>
            <span className="inline-flex items-center">
                    <img src={pdf} alt="pdf" width={50} height={50}/>
                    <span>
                    <p className="translate-x-3 text-sm w-28 bg-gray-200 rounded p-1 text-center text-black ">Recommended</p><p className="translate-x-3 text-xl text-blue-700 font-bold">Build a Resume</p>
                    <p className="translate-x-3 through">we'll guide you through it, there are only a few steps</p>
                    </span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 bg-blue-700 h-4 rounded-xl text-white ${second ? "block" : "hidden"}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 

</span>
<span onClick={handleApply} className={` flex flex-row cursor-pointer justify-between translate-x-10 mb-12 -mt-4 ${apply ? "pdfhide" : "pdf"}`}>
            <span className="inline-flex items-center">
                    <span>
                    <p className="translate-x-3 text-xl text-blue-700 font-bold">Apply without a Resume</p>
                    <p className="translate-x-3 through">A resume is optional for this job</p>
                    </span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 bg-blue-700 h-4 rounded-xl text-white ${apply ? "block" : "hidden"}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 

</span>
        </section>
    )
}
export default Ship

/*
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

 <p className="label1">New Password </p>
            <input className="input3 mt-10"
            type='password' placeholder="Password"
             value={data.passWord}
             name="passWord"
            onChange={handleChange}
             />

             */