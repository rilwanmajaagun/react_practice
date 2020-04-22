import React,{ useState } from 'react'
import './Message.css'

const Message = (props) => {
    const [state, setstate] = useState(
            {
                id: props.id,
                title: props.title,
                text: props.text,
                status: props.status,
            },
        
    )
    let lable = (state.status === "not_read")?"Mark As Read":"Mark As Unread"

    const change=()=>{
        // if(state.status === "not_read"){
        //     setstate({
        //         status:"read"
        //     })
        // }else{
        //     setstate({
        //         status:"not_read"
        //     })
        // 
        // let sms = {...state}
         (state.status === "not_read") ? setstate({status:"read"}) : setstate({status:"not_read"})
         props.changeStatus(state)
    }
    return (
        <ul className={(state.status ==='read') ?'read':'not_read'}>
            <p>{props.title}</p>
            <p>{props.text}</p>
            <button onClick={change}>{lable}</button>
        </ul>
    )
}

export default Message
