import React,{ useState}from 'react'
import Message from './Message'

const Message_state = () => {
    const [state, setstate] = useState({
        message:[
            {
                id: 12,
                title: "I lost my phone",
                text: "Can you look at home for the phone?",
                status: "not_read"
            },
            {
                id: 22,
                title: "Urgent Nigerian prince",
                text: "i need your help spending my millions dollar",
                status: "not_read"
            },
            {
                id: 32,
                title: "can i have chees",
                text: "Remember bring home burgers",
                status: "read"
            },
            {
                id: 42,
                title: "lipsum .com",
                text: "Lorem ipsum dolor sit amet",
                status: "read"
            }
        ]
    })
    const changeStatus=(sms)=>{
        let msg = state.message.map((items)=>{
            if(items.id===sms.id){
              items.status = sms.status
            }
            return items
        })
        setstate({message:msg});
    }
    // const changeStatus=()=>{
    //     if(state.message.status=== "read"){
    //         setstate({
    //             message:[
    //                 {
    //                 status: "not_read"
    //             }
                    
    //             ]
    //         })
    //     }else{
    //         setstate({
    //             message:[
    //                 {
    //                 status: "read"
    //             }
                    
    //             ]
    //         })
    //     }
    // }
    return (
        <div>
            {state.message.map((mssg)=>{
                return(
                    <ul>
                        <Message key={mssg.id} title={mssg.title} text={mssg.text} status={mssg.status} id={mssg.id}
                        changeStatus={changeStatus}/>
                    </ul>
                )
            }
              
            )}
        </div>
    )
}

export default Message_state
