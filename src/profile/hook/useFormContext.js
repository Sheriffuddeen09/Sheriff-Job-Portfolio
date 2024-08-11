import { useContext } from "react";
import InfosContext from "../context/FormContext";
const useInfosContext = () => {

return useContext(InfosContext)
}
export default useInfosContext