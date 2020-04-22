import React from 'react'

const Kids = (props) => {
    const kid = (props.match.params.kid) ? props.match.params.kid : null;
// creating a new path
const routeKid=(e)=>{
    let KID= e.target.textContent.toLowerCase();
    props.history.push(`/kids/${KID}`);
}
    return (
        
        <div>
            <main className='kids'>
                {/* if there is a value for kid, and if the value is not equal to JOHN return <button></button> */}
                {/* {kid && kid!== 'JOHN'&&
                <button>JOHN</button>} */}
            <h2>WElcome to our kids page</h2>
            {(kid!=="john") ?
                <button onClick={routeKid}>JOHN</button>:""
            }
             {(kid!=="david") ?
                <button onClick={routeKid}>DAVID</button>:""
            }
             {(kid!=="sam") ?
                <button onClick={routeKid}>SAM</button>:""
            }
{/* if kid = props.match.params.kid(which is kid) return <h2></h2> */}
            { kid ? <h2 className={kid}>
                hello {kid}
                </h2>: ''}  
            {/* {kid && <h2>Hello{kid}</h2>} */}
    
            </main>
            
        </div>
    )
}

export default Kids
