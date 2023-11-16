import './Contact.css';
import { useState } from 'react';
const Contact = ()=>{
    const [state,setState] = useState(1);
    return (
    <div>
    <p>{state}</p>
    <button onClick={()=>{
        setState(
            state+1)    
    }}>Click</button>
    </div>
    );
}

export default Contact