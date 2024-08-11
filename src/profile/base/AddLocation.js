
const AddLocation = ({setLocation, anywhere}) =>{
    return(
        <>
        <div>
             <>
             <form onSubmit={LocationSubmit} className="flex flex-col bg-white opacity-150 p-12 rounded-xl isolate z-10">
            <label>Add relocation</label>
            <hr className="my-4"/>
            <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            type="text"
            value={anywhere}
            onChange={(e) => setLocation(e.target.value)}
            />
            <label>Yes I'm willing to locate</label>
            <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="anywhere"
            type="radio"
            value={anywhere}
            onChange={(e) => setLocation(e.target.value)}
            />
             <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="anywhere"
            type="radio"
            value={onlynear}
            onChange={(e) => setLocation(e.target.value)}
            />
            <div>
            <Link to={'/jobtitle'} className="bg-white border border-black p-2 mt-6 h-16 text-blue-700 rounded-lg font-bold mx-2" >
                Cancel
            </Link>
            <button className="bg-blue-700 text-white mt-6 h-10 rounded-lg text-xl font-bold" type="submit" >
                Save
            </button>
            </div>
            </form>
                </>
        </div>
        
        </>
    )
}
export default AddLocation