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
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg ('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = USER_REGEX.test
        const v2 = PWD_REGEX.test
        if(!v1 || !v2){
            setErrMsg('Invalid Entry')
            setUser('')
            setPwd('')
            setMatchPwd('')
            return
        }
        console.log(user, pwd, matchPwd)
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
        <div className="div">
            <p className={errMsg ? 'errMsg' : 'hide'}>
                {errMsg}
            </p>
            <form onSubmit={handleSubmit}>

            <div className="user">
                <p>
                    username: 
                    <br />
                    <span className={validName ? "valid" : "hide"}>✔️</span>
                    <span className={validName || !user ? "hide" : "invalid"}>❌</span>
                </p>
                <br />
                <input 
                className="logininput"
                type="text"
                id="username"
                required
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validName ? "false" : "true"} 
                autoComplete="off"
                onFocus={() => setUserFocus (true)}
                onBlur={() => setUserFocus (false)}
                aria-describedby="uidnote"
                />

            < p id="uidnote" className={userFocus && user && !validName ? "instruction" : "offscreen"}>
             ⛔ 3 to 24<br />
                Must begin with a letter<br />
                Letters, numbers, underscores, hypens allowed 
            </p>
        </div>
            <div className="userpwd">
                
                <p>
                    Password: 
                    <br />
                    <span className={validPwd | !pwd ? 'hide' : 'invalide'}>❌</span>
                </p>

                <br />
                <input className="logininput"
                id="password"
                type="password"
                required
                onChange={(e) => setPwd(e.target.value)}
                aria-invalid={validPwd ? "false" : "true"} 
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                aria-describedby="pwdnote"
                />
            < p className={!validPwd && pwd && pwdFocus ? 'instructions' : 'hide'} style={{marginBottom:'0px'}}>
             ⛔ 8 to 24<br />
                Must begin with a letter<br />
                Letters, numbers, underscores, hypens allowed 
            </p>
            </div>
            <div className="userp">
                
                <p>
                    Confirm Password: 
                    <br />
                    <span className={validMatch && matchPwd ? 'validName' : 'offscreen'}>✔️</span>
                <span className={validMatch | !matchPwd ? 'hide' : 'invalide'}>❌</span>
                </p>
                <br />
                <input className="logininput"
                id="password"
                type="password"
                required
                onChange={(e) => setMatchPwd(e.target.value)}
                aria-invalid={validMatch ? 'false' : 'true'} 
                onFocus={() => setMatchFocus (true)}
                onBlur={() => setMatchFocus (false)}
                aria-describedby="confirmnote"
                />
            < p className={!validMatch && matchPwd && matchFocus ? 'instructions' : 'hide'} style={{marginBottom:'0px'}}>
             ⛔  Must match the password            
             </p>
            </div>
            <span className="signin">
            <button className="butt" disabled={!validName || !validMatch || !validPwd ? true : false}>SignUp</button>
            <button className="gobutton" onClick={goBack}>Go Back</button>
            </span>
            </form>

            
        </div>
        }
    </>
    )
}
export default Register