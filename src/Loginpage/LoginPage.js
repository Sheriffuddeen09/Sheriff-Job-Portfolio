import {useEffect, useRef, useState } from "react"
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './login.css'
//import axios from "./api/apiAxios"
//import useAuth from "../context/useAuth"
//import useInput from "../context/useInput"
//import Toggle from "../context/Toggle"
//const REGISTER = '/auth'

const FormLoginPage = () =>{
    const userRef = useRef()
    const navigate = useNavigate()
   // const errRef = useRef()
    //const [user, resetUser, attribUser] = useInput('user','')
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [success, setSuccess] = useState('')
    const [errMsg] = useState('')
    //const [errMsg, setErrMsg] = useState('')
   // const [check, toggleChecked] = Toggle('persist', false)
    //const {setAuth} = useAuth //, persist, setPersist

    //const location = useLocation()
    //const navigate = useNavigate()
    //const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        userRef.current.focus()

    }, [])

    /*const toggleCheck = () =>{
        setPersist(prev => !prev)
    }
    useEffect(() =>{
        localStorage.setItem('persit', (persist))
    }, [persist])
*/
   const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(user, pwd)
    setUser('')
    //resetUser()
    setPwd('')
    setSuccess(true)
    navigate('/career')
    //
    
    /*try{
        const response = await axios.post(REGISTER,
            JSON.stringify({user, pwd}),
           { headers:{ 'Content-Type':'application/json'}, 
           withCredential: true
        }
       
        )
        
        console.log(JSON.stringify(response?.data))
        const accessToken = response?.data?.accessToken
        const roles =  response?.data?.roles
        setAuth({user, pwd, roles, accessToken}) // remove the roles and pwd because we using jwt-decode 
        //setUser('')
        resetUser('')
        setPwd('')
        navigate(from, {replace: true})
    }
    catch(err){
        if(!err?.response){
            setErrMsg('No server Response')
        }
        else if(err.response?.status === 401){
            setErrMsg('Unauthorised')
        }
        else if(err.response?.status === 400){
            setErrMsg('Missing Username or Password')
        }
        else{
            setErrMsg('Login failed')
        }
        errRef.current.focus()
    }*/
   }

    return(
        <>
        {
                success ?
                <section className="">
                    <h1>
                        you are logged in !
                    </h1>
                    <br />
                    <p> 
                        <Link to="/" className="link">Go to Home</Link>
                    </p>
                </section>
                :
            <div className=''>
            <div className="flex flex-col items-center justify-center p-20">
             <p className={errMsg ? 'errMsg' : 'hide'}>
                {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Hi, Welcome Back</h1>
                    <p className="text-xl"> 
                    Kindly enter your details</p>
                <div className="usern">
                    <p style={{marginBottom:'-40px', fontSize:'16px'}}>
                        Email Address
                    </p>
                    <br />
                    <input 
                    className="border border-green-300 w-72 rounded-lg p-2 lg:w-96 mt-6 "
                    type="text"
                    required
                    id="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                   // {...attribUser}
                    ref={userRef}
                    autoComplete="off"
                    />
                </div>
                    <div className="usern">
                    <p style={{marginBottom:'-40px', fontSize:'16px'}}>
                        password:
                    </p>
                    <br />
                    <input 
                    className="lg:w-96 border mt-6 w-72 border-green-300 p-2 rounded-lg"
                    type="password"
                    required
                    id="password"
                    checked={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    />
                    </div>
                </div>
                <p className="text-sm text-center translate-x text-green-500">Forgot Password?</p>
                <button type="submit" className="text-white bg-green-400 w-72 translate-x-2 lg:w-96 lg:translate-x-0 rounded-lg text-xl h-10 my-2">
                Sign in
                </button>
            </form>

            <p className="linksign"> Don’t have an account?
                <span>
                    <Link to="/register" className="linksigns"> Sign Up for free</Link>
                </span>
            </p>
           
        </div>
    </div>
            }
        </>
        
    )
}
export default FormLoginPage