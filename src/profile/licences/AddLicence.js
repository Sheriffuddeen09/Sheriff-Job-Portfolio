
const AddLicences = ({LicenceSubmit, setTitleLicences,toyearsLicence, setToyearsLicence, setYearsLicence, yearsLicence, titleLicences}) =>{
    return(
        <>
        <div>
             <>
             <form onSubmit={LicenceSubmit} className="flex flex-col bg-white opacity-150 p-12 rounded-xl isolate z-10">
            <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="titleLicences"
            type="text"
            value={titleLicences}
            onChange={(e) => setTitleLicences(e.target.value)}
            />
             <span>
            <select name="from" value={yearsLicence} className="border-black p-1 w-24 rounded-lg my-4 border-2 " onChange={(e) => setYearsLicence(e.target.value)}>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
            </select>
            <select name="to" value={toyearsLicence} onChange={(e) => setToyearsLicence(e.target.value)} className="border-black p-1 w-24 rounded-lg my-4 border-2 mx-2">
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
            </select>

            </span>
            <button className="bg-blue-700 text-white mt-6 h-10 rounded-lg text-xl font-bold" type="submit" >
                Save
            </button>
            </form>
                </>
        </div>
        
        </>
    )
}
export default AddLicences