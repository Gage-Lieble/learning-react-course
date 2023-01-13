import React from "react"
import MyP from "./MyP"
const DemoOutput = (props) => {
    console.log('DEMO RAN')
    return (
        <MyP>{props.show ? 'This is new!' : ''}</MyP>
    )
}

export default React.memo(DemoOutput)

// React.memo only re executes if props have been updated (trades preformance from re-eveluating to checking props)(only use if you know props won't change much)