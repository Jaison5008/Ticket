import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 import Base from "./components/Base"; 
 import './App.css'
 const View=({view})=>{  
    //console.log(props)  
    const history=useNavigate()
return(  

   <Base thead=' VIEW CONTECTS' tstyle='headstyle' footer='foot'children={ 
      <div>
   <div className="bh" style={{gap:'20px'}}> 
    <Button onClick={()=>history('/Save')}>save</Button> 
    <Button onClick={()=>history('/Add')}>add</Button> 
    </div>
    <div className="viewcard">
  <h1>EMAIL   :{view.email}</h1>
  <h1>Ticket  :{view.password }</h1>
   </div> </div>}> 
   </Base>
   ) 




} 
export default View;