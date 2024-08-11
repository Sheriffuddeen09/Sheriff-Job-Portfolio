import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%-]).{8,24}$/

const Register = () => {

     const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(true)

    const [email, setEmail] = useState('')

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [matchFocus, setMatchFocus] = useState(false)
    const [validMatch, setValidMatch ] = useState(false)

    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    
    useEffect(() => {
       
    })

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName (result)
    }, [user])

    useEffect(() => {
        const result = USER_REGEX.test(email)
        console.log(result)
        console.log(email)
        setValidName (result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg ('')
    }, [user, pwd, matchPwd, email])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = USER_REGEX.test
        const v2 = PWD_REGEX.test
        if(!v1 || !v2){
            setErrMsg('Invalid Entry')
            setUser('')
            setEmail('')
            setPwd('')
            setMatchPwd('')
            return
        }
        console.log(user,email, pwd, matchPwd)
        setSuccess(true)

        /*try{
            const response = await axios.post(REGISTER,
                JSON.stringify({user, pwd}),
               { headers:{ 'Content-Type':'application/json'}, 
               withCredential: true
            }
           
            )
            console.log(response.data)
            console.log(JSON.stringify(response))
            console.log(response.accessToken)
        }
        catch(err){
            if(!err?.response){
                setErrMsg('No server Response')
            }
            else if(err?.response.status === 409){
                setErrMsg('Username Taken')
            }
            else{
                setErrMsg('Registration failed')
            }
        }

*/
    }
    return (
        <>
        {
                success ?
                <section className="div">
                    <h1>
                        you are logged in !
                    </h1>
                    <br />
                    <p> 
                        <Link to="/home" className="link">Go to Home</Link>
                    </p>
                </section>
                :
        <div className="flex flex-col items-center mt-6">
            <p className={errMsg ? 'errMsg' : 'hide'}>
                {errMsg}
            </p>
            <form onSubmit={handleSubmit}>

            <div className="">
                <p className="text-xl">
                    Username: 
                    <br />
                </p>
                <br />
                <input 
                className="w-72 lg-96 p-2 border-green-200 border rounded-lg "
                type="text"
                id="username"
                required
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validName ? "block" : "hidden"} 
                autoComplete="off"
                onFocus={() => setUserFocus (true)}
                onBlur={() => setUserFocus (false)}
                aria-describedby="uidnote"
                />

            < p id="uidnote" className={userFocus && user && !validName ? "block" : "hidden"} style={{marginTop:'10px', fontSize:'11px'}}>
             ⛔ 3 to 24<br />
                Must begin with a letter<br />
                Letters, numbers, underscores, hypens allowed 
            </p>
        </div>
            
        <div className="">
                <p className="text-xl mt-3">
                    Email: 
                    <br />
                </p>
                <br />
                <input 
                className="w-72 lg-96 p-2 border-green-200 border rounded-lg "
                type="text"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                aria-describedby="uidnote"
                />
        </div>
            
            <div className="userpwd">
                
                <p className="mt-3 text-xl">
                    Password: 
                </p>

                <br />
                <input className="w-72 lg-96 p-2 border-green-200 border rounded-lg "
                id="password"
                type="password"
                required
                onChange={(e) => setPwd(e.target.value)}
                aria-invalid={validPwd ? "block" : "hidden"} 
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                aria-describedby="pwdnote"
                />
            < p className={!validPwd && pwd && pwdFocus ? 'block' : 'hidden'} style={{marginBottom:'0px',marginTop:'10px', fontSize:'11px'}}>
             ⛔ 8 to 24<br />
                Must begin with a letter<br />
                Letters, numbers, underscores, hypens allowed 
            </p>
            </div>
            <div className="text-xl mt-3">
                
                <p>
                    Confirm Password: 
                </p>
                <br />
                <input className="w-72 lg-96 p-2 border-green-200 border rounded-lg "
                id="password"
                type="password"
                required
                onChange={(e) => setMatchPwd(e.target.value)}
                aria-invalid={validMatch ? 'block' : 'hidden'} 
                onFocus={() => setMatchFocus (true)}
                onBlur={() => setMatchFocus (false)}
                aria-describedby="confirmnote"
                />
            < p className={!validMatch && matchPwd && matchFocus ? 'block' : 'hidden'} style={{marginBottom:'0px', marginTop:'10px', fontSize:'11px'}}>
             ⛔  Must match the password            
             </p>
            </div>
            <div className="flex flex-col mt-10 cursor-pointer">
            <Link to={'/signin'}><button className="text-green-400 " disabled={!validName || !validMatch || !validPwd ? true : false}>Don't have an Account? <span className="underline"> Sign-up</span></button></Link>
            <button className="w-72 bg-black text-white rounded-lg mt-4 py-2" onClick={goBack}>Go Back</button>
            </div>
            </form>

            
        </div>
        }
    </>
    )
}
export default Register