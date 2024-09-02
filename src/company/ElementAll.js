import Access from "./Access"
import Airtel from "./Airtel"
import Bat from "./Bat"
import Bats from "./Bats"
import Coca from "./Coca"
import Cocas from "./Cocas"
import Lapo from "./Lapo"
import PalmPay from "./PalmPay"
import Polaris from "./Polaris"
import Wema from "./Wema"
import Yale from "./Yale"

const ElementAll = ({setCompanySearchResults, companys, companySearchResults}) =>{


    const handleChange = (e) =>{
        if(!e.target.value) return setCompanySearchResults(companys)

            const search = companys.filter(job => job.title.includes(e.target.value)
        || job.reviews.includes(e.target.value))
    
        return setCompanySearchResults(search)
    }

    return (
        <section>
            <span className="flex justify-center mx-4 md:mx-32 lg:mx-40 flex-col">
            <h1 className="mt-14 font-bold text-4xl">Find great places to work</h1>
            <h1 className="text-2xl mt-6">Get access to millions of company reviews</h1>
            <p className="font-bold mt-6">Company name or job title</p>
            <span className="flex flex-wrap mx-auto lg:inline-flex md:flex-wrap sm:-translate-y-8 lg:flex-nowrap flex-row mb-10 mt-1 gap-2">
                <input type="text" onChange={handleChange} className="border w-72 border-black border-1 md:w-96 lg:w-11/12 rounded-lg p-1"/>
                <button className="w-72 rounded-lg bg-blue-800 text-white p-1">Find Companies</button>
            </span>
            </span>
        <div className="flex flex-row flex-wrap gap-16 justify-center">
            <Yale companySearchResults={companySearchResults} />
            <Airtel companySearchResults={companySearchResults}/>
            <PalmPay companySearchResults={companySearchResults}/>
            <Wema companySearchResults={companySearchResults}/>
            <Lapo companySearchResults={companySearchResults}/> 
            <Coca companySearchResults={companySearchResults}/>
            <Bat companySearchResults={companySearchResults}/>
            <Polaris companySearchResults={companySearchResults}/>
            <Access companySearchResults={companySearchResults}/>

        </div>
        
        <div >
        <h1 className="mt-20 mb-6 text-3xl font-bold md:mx-36 lg:mx-36 text-center sm:text-start">Compare working at</h1>
        <div className="flex flex-row items-center gap-6 flex-wrap justify-center">
        <Bats companySearchResults={companySearchResults}/>
        <Cocas companySearchResults={companySearchResults}/>
        </div>
        </div>
        </section>
    )
}

export default ElementAll