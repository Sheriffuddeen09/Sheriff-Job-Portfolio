import useFormContext from "./hook/useFormContext"

const Ship = () =>{

    const {data, handleChange} = useFormContext()

    return (
        <section>
             
            <span className="span1">
            <p className="label1">New Password </p>
            <input className="input3 mt-10"
            type='password' placeholder="Password"
             value={data.passWord}
             name="passWord"
            onChange={handleChange}
             />
            </span>
        </section>
    )
}
export default Ship