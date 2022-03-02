import Draggable from 'react-draggable';
import './Aps.css';
import { useEffect,useState} from 'react';
function App() {

////////
  const[api,setapi] = useState({})
  const[apis,setapis]= useState({})
  const[set, settrue] = useState(false);
  const[sets, settrues] = useState(false);

  useEffect(() =>{
   
    async function getData() {
      const response = await fetch(
        "https://geolocation-db.com/json/"
      );
      const data = await response.json();
      setapi(data);
      console.log(api.IPv4)
      const responses = await fetch(
        `http://ip-api.com/json/${api.IPv4}`
      );
      const datas = await responses.json();
      setapis(datas)
      settrue(true)
      
    }

    getData();
    
    
  },[api.IPv4])
  console.log(apis)
  console.log(api)
console.log(api.postal)
  
  return (
    
    <div className='main'>
      <Draggable>

<div className='innermain'>


  <div className='heading'>
 <b> Heading </b>
  <hr/>
  </div>
  <div>
  <div className='secondmain'>
    <div className='sider'>Ipv4 :</div>
    <div className='border'>{set ?api.IPv4 :"24.48.0.1"}</div>
</div>
<div className='secondmain'>
    <div className='sider'>City :</div>
    <div className='border'>{set ?api.city :apis.city}</div>
</div>
<div className='secondmain'>
    <div className='sider'>State :</div>
    <div className='border'>{set ?api.state :api.state}</div>
</div>
<div className='secondmain'>
    <div className='sider'>Country :</div>
    <div className='border'>{set ?"India" : apis.country}</div>
</div>
<div className='secondmain'>
    <div className='sider'>Zip :</div>
    <div className='border'>{set ?api.postal :apis.zip}</div>
</div>
<div className='buttons'><button onClick= { () =>{
  settrues(!sets)
}}>WEB INFO</button>



</div>
<div className='relate'>
  {sets ?navigator.appCodeName : " "}<br/>
  {sets ?navigator.platform : " "}
</div>
<div className='water'>
  Aniket
</div>
  </div>
    </div>
    </Draggable>
    </div>
  );
}

export default App;
