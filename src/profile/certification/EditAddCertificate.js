
const EditAddCertificate = ({certificateSubmit, setTitleCertificate, setYearsCertificate, yearsCertificate, titleCertificate}) =>{
    return(
        <>
        <div>
             <>
             <form onSubmit={certificateSubmit} className="flex flex-col bg-white opacity-150 p-12 rounded-xl isolate z-10">
            <input className=" w-60 sm:w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="titleCertificate"
            type="text"
            value={titleCertificate}
            onChange={(e) => setTitleCertificate(e.target.value)}
            />
             <input className=" w-60 sm:w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 mt-6" 
            name="yearsCertificate"
            type="text"
            value={yearsCertificate}
            onChange={(e) => setYearsCertificate(e.target.value)}
            />
            <button className="bg-blue-700 text-white mt-6 h-10 rounded-lg text-xl font-bold" type="submit" >
                Save
            </button>
            </form>
                </>
        </div>
        
        </>
    )
}
export default EditAddCertificate