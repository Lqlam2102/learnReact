import { useEffect }  from 'react';

function Content(){

    useEffect(()=>{
        console.log("Mounted")
       })

    return (
        <div>
            <h1>Hello anh em F8</h1>
        </div>
    )
}

export default Content;