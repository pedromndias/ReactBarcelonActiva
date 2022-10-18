import React from "react";

const FunctionalComponent = (props) => {
    return (
        <>
            <h1>I am a funtional component</h1>
            <h1>Props variable: { props.propsFunctional1 }</h1>
            <h1>Props String: { props.propsFunctional2String }</h1>
            <h1>Props Integer: { props.propsFunctionalNumber }</h1>
            <h1>Props Object: { props.propsFunctionalObject.name }</h1>
        </> 
    )
}

export default FunctionalComponent;