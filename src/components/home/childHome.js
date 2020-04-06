import React from 'react';

function ChildHome(props) {
    return(
        <React.Fragment>
            <h1> Child  Component..!</h1>
            <h2>Count : {props.count}</h2>
        </React.Fragment> 
    )
}

export default ChildHome;