import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from "./Layout/Header"
import Home from './Component/Home'
import { getBasepay, getEducations, getEmail, getJobApply, getJobFours, getJobs, getJobSeconds, getJobThirds, getNewEducation, getNewLicence, getNews, getPhone, getQualifys, getRelocation, getSkills } from "./api/apifetch"
import MainForm from './Form/Main-Form'
import Thanks from './Form/Thanks'
import ElementAll from './company/ElementAll'
import { getCertificate, getCertification, getCompany, getInbox, getInfos, getJobtitle, getLanguage, getLicences, getNewLanguage } from './api/axios'
import MessageHome from './message/MessageHome'
import MessageId from './message/MessageId'
import moment from 'moment/moment'
import { replys } from './message/Replymap'
import LoginPage from './Loginpage/LoginPage'
import Register from './Loginpage/Register'
import Notification from './notification/Notification'
import About from './profile/About'
import ProfileForm from './profile/ProfileForm'
import EmailEdit from './profile/EmailEdit'
import { InfosProvider } from './profile/context/FormContext'
import Qualifications from './profile/Qualification'
import EditQualification from './profile/EditQualification'
import EditEducation from './profile/EditQualify'
import EducationId from './profile/EducationId'
import EditDegree from './profile/EditDegree'
import EditLevel from './profile/EditLevel'
import EditAdd from './profile/EditAdd'
import SkillId from './profile/skill/SkillId'
import EditSkillOne from './profile/skill/EditSkillOne'
import EditSkillSecond from './profile/skill/EditSkillSecond'
import EditSkillThird from './profile/skill/EditSkillThird'
import EditSkillFour from './profile/skill/EditSkillFour'
import EditAddSkill from './profile/skill/EditAdd'
import NewEditSkill from './profile/skill/NewEditSkill'
import AddEducation from './profile/skill/AddEducation'
import NewEdit from './profile/skill/NewEditEducation'
import CertificationId from './profile/certification/CertifcationId'
import EditCertificate from './profile/certification/EditCertificate'
import EditAddCertificate from './profile/certification/EditAddCertificate'
import EditNewCertificate from './profile/certification/EditNewCertificate'
import LanguageId from './profile/language/LanguageId'
import EditLanguage from './profile/language/EditLanguage'
import EditNewLanguage from './profile/language/EditNewLanguage'
import EditAddLanguage from './profile/language/EditAddLanguage'
import EditLicence from './profile/licences/EditLicence'
import AddLicences from './profile/licences/AddLicence'
import EditNewLicence from './profile/licences/EditNewLicence'
import Job from './profile/job/Job'
import EditJob from './profile/job/EditJob'
import EditBasePay from './profile/base/EditBasePay'
import EditLocation from './profile/base/EditLocation'
import HideJob from './profile/HideJob'
import Ready from './profile/Ready'
import ViewApply from './Component/jobs/ViewApply'
import ViewApplySecond from './Component/jobssecond/ViewApplySecond'
import ElementJob from './job/ElementJob'
import EmailEdits from './setting/EmailEdit'
import EmailEditPhone from './setting/EmailEditPhone'
import EmailSetting from './setting/EmailSetting'
import Privacy from './setting/Privacy'
import Device from './setting/Device'
import Account from './setting/Account'
import Help from './Layout/Help'
import Footer from './Layout/Footer'
const App = () =>{
    const [messages, setMessages] = useState([])
    const [replyLists, setReplyLists] = useState(replys)
    const [reply, setReply] = useState('')
    const [searchResults, setSearchResults] =  useState([])
    const [jobs, setJobs] =  useState(JSON.parse(localStorage.getItem('recentsearch')) || [])
    const [edits, setEdits] = useState([])
    const [companySearchResults, setCompanySearchResults] =  useState([])
    const [companys, setCompanys] =  useState([])
    const [posts, setPosts] = useState([])
    const [educations, setEducations] = useState([])
    const [skills, setSkills] = useState([])
    const [title, setTitle ] = useState('')
    const [year, setYear ] = useState('')
    const [newskills, setNewskills ] = useState(JSON.parse(localStorage.getItem('skilllist')) || [])
    
    const [text, setText ] = useState('')
    const [years, setYears ] = useState('')
    const [neweducations, setNeweducations ] = useState(JSON.parse(localStorage.getItem('educationlist')) || [])
    const [titleCertificate, setTitleCertificate ] = useState('')
    const [yearsCertificate, setYearsCertificate ] = useState('')
    const [newcertificates, setNewcertificates ] = useState(JSON.parse(localStorage.getItem('educationlist')) || [])
    const [certifications, setCertifications] = useState([])
    const [jobseconds, setJobSeconds] = useState([])
    const [jobthirds, setJobThirds] = useState([])
    const [jobfours, setJobFours] = useState([])

    const [titleLanguage, setTitleLanguage ] = useState('')
    const [yearsLanguage, setYearsLanguage ] = useState('')
    const [newlanguages, setNewLanuages ] = useState(JSON.parse(localStorage.getItem('languagelist')) || [])
    const [languages, setLanguages] = useState([])
    
    const [titleLicences, setTitleLicences ] = useState('')
    const [yearsLicence, setYearsLicence ] = useState('')
    const [toyearsLicence, setToyearsLicence ] = useState('')
    const [licences, setLicences ] = useState([])
    const [jobtitles, setJobtitles ] = useState(JSON.parse(localStorage.getItem('jobtitles')) || [])
    const [newlicences, setNewLicences ] = useState(JSON.parse(localStorage.getItem('licencelist')) || [])

    const [basepays, setBasePays ] = useState([])
    const [applys, setApplys ] = useState([])
    const [emails, setEmails ] = useState([])
    const [phones, setPhones ] = useState([])
    const [relocations, setRelocations ] = useState([])
    //const [anywhere, setAnywhere ] = useState(false)
    //const [onlynear, setOnlynear ] = useState(false)

    const navigate = useNavigate()
   
    const saveList = (newposts) =>{
        setNewcertificates(newposts)
        localStorage.setItem('certificatelist', JSON.stringify(newposts))
    }
    const certificateSubmit = (e) =>{
        e.preventDefault()

        if(!titleCertificate) return 
        addCerticate(titleCertificate)
        setTitleCertificate('')
        setYearsCertificate('')
        navigate('/qualify')
    }
    const addCerticate = () =>{
        const id = newcertificates.length ? newcertificates[newcertificates.length - 1].id + 1 : 1
        const posts = {id, title:titleCertificate, name:yearsCertificate}
        const results = [...newcertificates, posts]
        saveList(results)
    }


    /*const saveListRelocation = (newposts) =>{
        setRelocations(newposts)
        localStorage.setItem('relocationlist', JSON.stringify(newposts))
    }
    const relocationSubmit = (e) =>{
        e.preventDefault()

        if(!titleCertificate) return 
        addRelocation(titleCertificate)
        setAnywhere(true)
        setOnlynear(true)
        navigate('/jobtitle')
    }
    const addRelocation = () =>{
        const id = relocations.length ? relocations[relocations.length - 1].id + 1 : 1
        const posts = {id, true:anywhere, false:onlynear}
        const results = [...relocations, posts]
        saveListRelocation(results)
    }

*/
    const saveListLicence = (newposts) =>{
        setNewLicences(newposts)
        localStorage.setItem('certificatelist', JSON.stringify(newposts))
    }
    const LicenceSubmit = (e) =>{
        e.preventDefault()

        if(!titleLicences) return 
        addLicence(titleLicences)
        setTitleLicences('')
        setYearsLicence('')
        setToyearsLicence('')
        navigate('/qualify')
    }
    const addLicence = () =>{
        const id = newlicences.length ? newlicences[newlicences.length - 1].id + 1 : 1
        const posts = {id, title:titleLicences, from:yearsLicence, to:toyearsLicence}
        const results = [...newlicences, posts]
        saveListLicence(results)
    }

    const saveListlanguage = (newposts) =>{
        setNewLanuages(newposts)
        localStorage.setItem('languagelist', JSON.stringify(newposts))
    }
    const languageSubmit = (e) =>{
        e.preventDefault()

        if(!titleLanguage) return 
        addLanguage(titleLanguage)
        setTitleLanguage('')
        setYearsLanguage('')
        navigate('/qualify')
    }
    const addLanguage = () =>{
        const id = newlanguages.length ? newlanguages[newlanguages.length - 1].id + 1 : 1
        const posts = {id, title:titleLanguage, name:yearsLanguage}
        const results = [...newlanguages, posts]
        saveListlanguage(results)
    }

    const saveListItem = (newposts) =>{
        setNewskills(newposts)
        localStorage.setItem('skilllist', JSON.stringify(newposts))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!title) return 
        addItem(title)
        setTitle('')
        setYear('')
        navigate('/qualify')
    }
    const addItem = () =>{
        const id = newskills.length ? newskills[newskills.length - 1].id + 1 : 1
        const posts = {id, title:title, year:year}
        const results = [...newskills, posts]
        saveListItem(results)
    }

    const saveListItems = (newpost) =>{
        setNeweducations(newpost)
        localStorage.setItem('educationlist', JSON.stringify(newpost))
    }
    const handleSubmits = (e) =>{
        e.preventDefault()

        if(!text) return 
        addItems(text)
        setText('')
        setYears('')
        navigate('/qualify')
    }
    const addItems = () =>{
        const id = neweducations.length ? neweducations[neweducations.length - 1].id + 1 : 1
        const posts = {id, title:text, year:years}
        const results = [...neweducations, posts]
        saveListItems(results)
    }

useEffect(() =>{
   
    getJobs().then(json=>{
        setJobs(json)
        return json
    }).then(json =>{
        setSearchResults(json)
    })
},[])

useEffect(() =>{

    getQualifys().then(json =>{
        setPosts(json)
        return json
    })

},[])

useEffect(() =>{

    getJobSeconds().then(json =>{
        setJobSeconds(json)
        return json
    })

},[])

useEffect(() =>{

    getJobThirds().then(json =>{
        setJobThirds(json)
        return json
    })

},[])

useEffect(() =>{

    getJobFours().then(json =>{
        setJobFours(json)
        return json
    })

},[])

useEffect(() =>{

    getEmail().then(json =>{
        setEmails(json)
        return json
    })

},[])

useEffect(() =>{

    getPhone().then(json =>{
        setPhones(json)
        return json
    })

},[])

useEffect(() =>{

    getJobtitle().then(json =>{
        setJobtitles(json)
        return json
    })

},[])

useEffect(() =>{

    getJobApply().then(json =>{
        setApplys(json)
        return json
    })

},[])


useEffect(() =>{

    getEducations().then(json =>{
        setEducations(json)
        return json
    })

},[])
useEffect(() =>{

    getSkills().then(json =>{
        setSkills(json)
        return json
    })

},[])

useEffect(() =>{

    getNews().then(json =>{
        setNewskills(json)
        return json
    })

},[])

useEffect(() =>{

    getNewEducation().then(json =>{
        setNeweducations(json)
        return json
    })

},[])

useEffect(() =>{

    getCertificate().then(json =>{
        setNewcertificates(json)
        return json
    })

},[])

useEffect(() =>{

    getNewLicence().then(json =>{
        setNewLicences(json)
        return json
    })

},[])

useEffect(() =>{

    getLicences().then(json =>{
        setLicences(json)
        return json
    })

},[])

useEffect(() =>{

    getCertification().then(json =>{
        setCertifications(json)
        return json
    })

},[])


useEffect(() =>{

    getLanguage().then(json =>{
        setLanguages(json)
        return json
    })

},[])

useEffect(() =>{

    getNewLanguage().then(json =>{
        setNewLanuages(json)
        return json
    })

},[])

useEffect(() =>{
   
    getInbox().then(json=>{
        setMessages(json)
        return json
    })
},[])


useEffect(() =>{
   
    getInfos().then(json=>{
        setEdits(json)
        return json
    })
},[])

useEffect(() =>{
   
    getBasepay().then(json=>{
        setBasePays(json)
        return json
    })
},[])
useEffect(() =>{
   
    getRelocation().then(json=>{
        setRelocations(json)
        return json
    })
},[])



useEffect(() =>{
   
    getCompany().then(json=>{
        setCompanys(json)
        return json
    }).then(json =>{
        setCompanySearchResults(json)
    })
},[])


const handleDelete = (id) =>{
    const recent = jobs.filter((job) => job.id !== id)
    setJobs(recent)
    localStorage.setItem('recentsearch', JSON.stringify(recent))

}
const ApplyDelete = (id) =>{
    const recent = applys.filter((apply) => apply.id !== id)
    setApplys(recent)
    localStorage.setItem('applylist', JSON.stringify(recent))

}
const ApplyDeleteSecond = (id) =>{
    const recent = jobseconds.filter((second) => second.id !== id)
    setApplys(recent)
    localStorage.setItem('secondlist', JSON.stringify(recent))

}
const handleDeleted = (id) =>{
    const recent = basepays.filter((basepay) => basepay.id !== id)
    setJobs(recent)
    localStorage.setItem('recentsearch', JSON.stringify(recent))

}
const jobtitleDelete = (id) =>{
    const recent = jobtitles.filter((jobtitle) => jobtitle.id !== id)
    setJobtitles(recent)
    localStorage.setItem('jobtitles', JSON.stringify(recent))

}

const saveReplyMe = (newReply) =>{
    setReplyLists(newReply)
    localStorage.setItem('replylist', JSON.stringify(newReply))
}
const ReplySubmit = (e) =>{
    e.preventDefault()

    if(!reply) return 
    ReplyAdd(reply)
    setReply('')
}
const ReplyAdd = (title) =>{
    const time= moment().format('h:mm a')
    const id = replyLists.length ? replyLists[replyLists.length - 1].id + 1 : 1
    const replyme = {id, title, time}
    const results = [...replyLists, replyme]
    saveReplyMe(results)
}
      



    const [isloading, setIsLoading] = useState(false)
    useEffect(()=>{
    
        setIsLoading(true)
        setTimeout(() =>{
        
        setIsLoading(false)
        }, 8000)
    }, [])

    
    return(
        <div>
        <Header/>
        {isloading ? <div className='flex flex-col items-center justify-center my-56'>
                    <h1 className='text-blue-600 text-2xl font-bold mb-2'>SheriffPortfolio</h1>
                    <div className='bg-gray-300 w-40 h-1 rounded-3xl'><p className='load'></p></div>
                    </div> :
    <Routes>
    <Route path='/'
       element={<Home searchResults={searchResults} 
       jobseconds={jobseconds} jobthirds={jobthirds} jobfours={jobfours} ApplyDeleteSecond={ApplyDeleteSecond}
       setJobs={setJobs} handleDelete={handleDelete} setSearchResults={setSearchResults} jobs={jobs}/>}
       />
    <Route path='/login' element={<MainForm />} />
    <Route path='/reviews' element={<ElementAll companys={companys} setCompanySearchResults={setCompanySearchResults} companySearchResults={companySearchResults} />}/>
    <Route path='/thanks' element={<Thanks />} />
    <Route path='/mes' element={<MessageHome/>} />
    <Route path='/mes/:id' element={<MessageId reply={reply} ReplySubmit={ReplySubmit} setReply={setReply} replyLists={replyLists} messages={messages}/>} />
    <Route path='/user' element={<About />}/>
    <Route path="/update/:id" element={ 
            edits.map((edit) =>(
                <EmailEdit key={edit.id} edit={edit} edits={edits} setEdits={setEdits}/>
            ))
        } />
        <Route path="/emailid/:id" element={ 
            emails.map((email) =>(
                <EmailEdits key={email.id} email={email} emails={emails} setEmails={setEmails}/>
            ))
        } />
         <Route path="/phoneid/:id" element={ 
            phones.map((phone) =>(
                <EmailEditPhone key={phone.id} phone={phone} phones={phones} setPhones={setPhones}/>
            ))
        } />
    <Route path="/licence/:id" element={ 
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>
        {    licences.map((licence) =>(
                <EditLicence key={licence.id} licence={licence} licences={licences} setLicences={setLicences}/>
            ))    
        }
       </div> } />
    <Route path='/signin' element={<LoginPage />} />
    <Route path='/register' element={<Register />} />
    <Route path='/notify' element={<Notification />} />
    <Route path='/profile' element={
        <InfosProvider>
        <ProfileForm edits={edits} />
        </InfosProvider>
        } 
        
        />
    
    <Route path='/qualify' element={
        newskills.map((newskill) =>(
        <Qualifications posts={posts} newskills={newskills} newskill={newskill} educations={educations} skills={skills} neweducations={neweducations} languages={languages} 
        newlicences={newlicences} certifications={certifications} newcertifications={newcertificates} licences={licences} />  ))} />
    <Route path='/education/:id' element={<EducationId educations={educations}  neweducations={neweducations}/>} />
    <Route path='/language/:id' element={<LanguageId languages={languages}  newlanguages={newlanguages}/>} />
    <Route path='/certificate/:id' element={<CertificationId certifications={certifications} newcertificates={newcertificates}/>} />
    <Route path='/updateid/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>
        {
        posts.map((post) =>(
        <EditQualification posts={posts} post={post} setPosts={setPosts} />
    ))}</div>}/>

        <Route path='/licadd/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        newlicences.map((newlicence) =>(
        <EditNewLicence newlicences={newlicences} newlicence={newlicence} setNewLicences={setNewLicences} />))}
        </div>}/>

        <Route path='/licen/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        
        <AddLicences yearsLicence={yearsLicence} titleLicences={titleLicences} setTitleLicences={setTitleLicences} setYearsLicence={setYearsLicence} LicenceSubmit={LicenceSubmit} toyearsLicence={toyearsLicence} setToyearsLicence={setToyearsLicence} />}
        </div>}/>

        <Route path='/edu/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        educations.map((education) =>(
        <EditEducation educations={educations} education={education} setEducations={setEducations} />))}
        </div>}/>
        <Route path='/educ/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        educations.map((education) =>(
        <EditDegree educations={educations} education={education} setEducations={setEducations} />))}
        </div>}/>
        <Route path='/educa/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        educations.map((education) =>(
        <EditLevel educations={educations} education={education} setEducations={setEducations} />))}
        </div>}/>
        <Route path='/educat/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        educations.map((education) =>(
        <EditAdd educations={educations} education={education} setEducations={setEducations} />))}
        </div>}/>

        <Route path='/lan/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        languages.map((language) =>(
        <EditLanguage languages={languages} language={language} setLanguages={setLanguages} />))}
        </div>}/>
        <Route path='/lanadd/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        newlanguages.map((newlanguage) =>(
        <EditNewLanguage newlanguages={newlanguages} newlanguage={newlanguage} setNewLanuages={setNewLanuages} />))}
        </div>}/>
        <Route path='/cer/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        certifications.map((certification) =>(
        <EditCertificate certifications={certifications} certification={certification} setCertifications={setCertifications} />))}
        </div>}/>
        <Route path='/ceradd/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        newcertificates.map((newcertificate) =>(
        <EditNewCertificate newcertificates={newcertificates} newcertificate={newcertificate} setNewcertificates={setNewcertificates} />))}
        </div>}/>
    <Route path='/skill/:id' element={<SkillId skills={skills} newskills={newskills}/>} />
        <Route path='/ski/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        skills.map((skill) =>(
        <EditSkillOne skills={skills} skill={skill} setSkills={setSkills} />))}
        </div>}/>
        <Route path='/skil/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        skills.map((skill) =>(
        <EditSkillSecond skills={skills} skill={skill} setSkills={setSkills} />))}
        </div>}/>
        <Route path='/skills/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        skills.map((skill) =>(
        <EditSkillThird skills={skills} skill={skill} setSkills={setSkills} />))}
        </div>}/>
        <Route path='/skillss/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        skills.map((skill) =>(
        <EditSkillFour skills={skills} skill={skill} setSkills={setSkills} />))}
        </div>}/>
        <Route path='/skillsss/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        
        <EditAddSkill year={year} title={title} setTitle={setTitle} setYear={setYear} handleSubmit={handleSubmit} />}
        </div>}/>
        <Route path='/newedu/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        
        <AddEducation years={years} text={text} setText={setText} setYears={setYears} handleSubmits={handleSubmits} />}
        </div>}/>
        <Route path='/langs/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        
        <EditAddLanguage yearsLanguage={yearsLanguage} titleLanguage={titleLanguage} setTitleLanguage={setTitleLanguage} setYearsLanguage={setYearsLanguage} languageSubmit={languageSubmit} />}
        </div>}/>
        <Route path='/certs/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        
        <EditAddCertificate yearsCertificate={yearsCertificate} titleCertificate={titleCertificate} setTitleCertificate={setTitleCertificate} setYearsCertificate={setYearsCertificate} certificateSubmit={certificateSubmit} />}
        </div>}/>

        <Route path='/news/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        newskills.map((newskill) =>(
        <NewEditSkill newskills={newskills} newskill={newskill} setNewskills={setNewskills} />))}
        </div>}/>

        <Route path='/newsedu/:id' element={
        <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>{
        neweducations.map((neweducation) =>(
        <NewEdit neweducations={neweducations} neweducation={neweducation} setNeweducations={setNeweducations} />))}
        </div>}/>

        <Route path='/jobtitle' element={<Job jobtitles={jobtitles} basepays={basepays} relocations={relocations} />} />
        <Route path='/job' element={<ElementJob jobseconds={jobseconds} applys={applys} ApplyDelete={ApplyDelete} ApplyDeleteSecond={ApplyDeleteSecond} />} />
        
        <Route path='/jobid/:id' element={
            <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>
                {
                    jobtitles.map((jobtitle) =>(
            <EditJob jobtitles={jobtitles} jobtitle={jobtitle} setJobtitles={setJobtitles} jobtitleDelete={jobtitleDelete}/>
        ))}
            </div>
            } />

        <Route path='/payid/:id' element={
            <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>
                {
                    basepays.map((basepay) =>(
            <EditBasePay basepays={basepays} basepay={basepay} setBasePays={setBasePays} handleDeleted={handleDeleted}/>
        ))}
            </div>
            } />

        <Route path='/locat/:id' element={
            <div className={`isolate z-10 fixed bg-black w-full h-full top-0 left-0 flex items-center justify-center opacity-80`}>
                {
                    relocations.map((relocation) =>(
            <EditLocation relocations={relocations} relocation={relocation} setRelocations={setRelocations}/>
        ))}
            </div>
            } />
        <Route path='/hide' element={<HideJob />} />
        <Route path='/viewjob' element={<ViewApply jobs={jobs} />} />
        <Route path='/viewjobs' element={<ViewApplySecond jobseconds={jobseconds} />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/device' element={
            <div className='overflow-hidden'>
            <Device /> 
            </div>} 
            />
            
        <Route path='/emailsetting' element={<EmailSetting />} />
        <Route path='/account' element={<Account emails={emails} phones={phones} />} />
        <Route path='/ready' element={<Ready />} />
        <Route path='/help' element={<Help />} />
        </Routes>
        }
        <Footer />
        </div>
    )
}
export default App
