import React,{useState}from'react';
import './Conditional.css'

const Conditional = () => {
    const [state, setstate] = useState({
        message: "welcome",
        age: 42,
        perfix: "Mr",
        name:'Ayobami'
    })

    const changePerfix =()=>{
        (state.perfix === "Mr") ? setstate({... state, perfix:"Mrs", name:"iyabo"}) 
        : setstate({... state, perfix:"Mr", name:'Ayobami',});
    }

    const btn = (state.perfix==="Mr") ? "Mr" : "Mrs";
    const {message, age, perfix, name} = state;
    return (
        <div className={(age ===! 42) ? "old":"young"}> 

            {(state.perfix === "Mr") ?
            <p>{`${message} ${perfix} ${name}`}</p> :
            <p>{message} {perfix} Iyabo</p>}
            <button onClick={changePerfix}>{btn}</button>

            {perfix === "Mr" && 
            <div>oldman</div>}
            
            {(perfix === "Mr" && age === 42 && <p>Old man</p>)
            || 
            (<p>young Woman</p>)}

        </div>
    )
}

export default Conditional
