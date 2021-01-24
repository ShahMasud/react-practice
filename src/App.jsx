import React, { useState } from "react";

const App = () =>{
    // const state= useState();
    

    let newTime= new Date().toLocaleTimeString();
    let [CTime, setCTime]= useState(newTime);

    // let CurrDate= new Date(2020, 12, 15, 14);
    



const UpdateDate =() =>{
    newTime= new Date().toLocaleTimeString();
    setCTime(newTime);


}
return (
    <>

        {/* <h1>{count}</h1>, */}
        <h1> {CTime} </h1>
        <button onClick= {UpdateDate}>Click Me</button>
    </>
)
}
export default App;

