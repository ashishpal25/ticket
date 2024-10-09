import {  useState } from "react"
const vip =[
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5]
]

const buss =[
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5]
]


function App() {
  const [tiket,setTiket]=useState([])
  

  const hendleData=(vip,key,index)=>{
    const newvalue={section:vip, row:key, seat:index}
    if(tiket.length >=5){
      alert("you can select up to 5 ticket")
      setTiket('')
      return;
    }
    setTiket(prev=>{
      return [...prev, newvalue];
  })
 
  };
  

 

  const handleConfirm=()=>{
    alert(JSON.stringify(tiket))
    setTiket('')
  }

  return (
    <>
    <div>
      {vip.map((item,key)=>(
        <div className="new" key={key}>
          {item.map((index,kee)=>(
            <span className="just"  onClick={()=>hendleData("vip",key,index)} key={kee}>{index}</span>
      ))}
        </div>
      ))}

      
    </div>
<h2>buss</h2>
    <div>
      {buss.map((item,key)=>(
        <div className="new" key={key}>
          {item.map((index,kee)=>(
            <span className="just"  onClick={()=>hendleData("buss",key,index)} key={kee}>{index}</span>
      ))}
        </div>
      ))}

      <button className="" onClick={handleConfirm}>confirm</button>
    </div>
    </>
  )
}

export default App
