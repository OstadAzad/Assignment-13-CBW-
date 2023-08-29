'use client'
import { useRouter } from "next/navigation";

const page = () => {
  const path=useRouter();

  const SetCookie=()=>{
    path.push("/api/Set-Cookie")
  }

  const DisCookie=()=>{
    path.push("/api/Disp-Cookie")
  }

  const jres=()=>{
    path.push("/api/JSON-Response")
  }

  const headers=()=>{
    path.push("/api/headers")
  }

  return (
    <div>
      <h1>This is home page</h1><br/>
      
       <ul>
        <li><button onClick={SetCookie}>Click-Cookie Store</button></li><br/>
        <li><button onClick={DisCookie}>Click-Display Cookie</button></li><br/>
        <li><button onClick={jres}>Click-JSON Response</button></li><br/>
        <li><button onClick={headers}>Click-Authorization Headers</button></li><br/>
      </ul>
    
    </div>
  );
};

export default page;
