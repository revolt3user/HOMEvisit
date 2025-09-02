import startedFile from "./index.js"
import { useEffect } from "react"
export default function Tour(){
    useEffect(() => {
        startedFile();
    }, []);
    return(<>
         <div id="viewer" style={{ width: '100%', height: '500px' }}></div>
    </>)
}