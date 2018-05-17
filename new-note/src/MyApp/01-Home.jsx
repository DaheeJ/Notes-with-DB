import React from 'react'
import 'bulma/css/bulma.css'


const buttonStyle ={
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Helvetica Neue',    

}


export default class extends React.Component{
    render(){
        return (
            <div class="notification is-primary" style={buttonStyle}>
                
                    Click the Notes Button! <br /> 
                    You can see all the notes and save the new notes!
            </div>
        )
    }
}

<div class="notification is-primary">
    <button class="delete"></button>

</div>