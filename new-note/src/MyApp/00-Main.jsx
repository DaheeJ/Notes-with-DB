import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from './01-Home'
import Note from './02-Note'



const buttonCont ={
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}

const homeB = {
    display: 'flex',
    alignItem: 'center',
    backgroundColor: '#5DCEB3',
    border: 'none',
    borderRadius: '3px',
    color: 'white',
    fontFamily: 'Helvetica Neue',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline  block',
    fontSize: '16px',
    margin: '25px 10px',
    cursor: 'pointer',
    alignItem: 'center',
    left: '50%'
    

}

const nameMy = {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    
    
}

export default class extends React.Component {
    render() {

        return (
           
                <HashRouter>
                    
                     <div className="MainContainer">
                        
                    <div className="menu1" style={buttonCont} >
                            <Link to="/" div style={homeB}>Home</Link>
                            <Link to="/2" style={homeB} >Notes</Link>
                         </div>
                         < br />
                        
                        <hr />

                        <Route exact path="/" component={Home} />
                        <Route path="/2" component={Note} />

                        <br />
                        <hr />
                    
                    <div class="tag is-dark" style={nameMy}>Dahee.J</div>
            
                     </div>
                    
                </HashRouter>
               
        )
    }
}