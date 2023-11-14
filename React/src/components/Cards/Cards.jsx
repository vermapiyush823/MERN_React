import './Cards.css';
const Cards = ({fName,lName})=>{
    return (
        <div className="card">
            <p><span className='field'>First Name : </span><span>{fName}</span></p>
            <p><span className='field'>Last Name : </span><span>{lName}</span></p>
        </div>
    )
}

export default Cards