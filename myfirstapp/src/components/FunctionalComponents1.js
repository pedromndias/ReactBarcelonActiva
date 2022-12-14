import React from "react";

const FunctionalComponents1 =  ({ childToParentTest }) => {
    const data = "Info from child to parent"

    return (
        <>
            <h1>I am a child component</h1>
            <button onClick={ () => childToParentTest(data)}>Click to transmit data to parent</button>
        </>
    )
}

export default FunctionalComponents1;