import React from 'react'
// import { ApolloProvider } from 'react-apollo'
import { HashRouter, Route, Link } from 'react-router-dom'
// import './Style/style.css'
// import { client } from './PrismaEndPoint/EndPoint'

import Home from './01-Home'
import Note from './02-Note'


// // const homeButton = {
// //     border: '7px solid white',
// //     padding: '15px 50px',
// //     boxShadow: '5px 5px 5px #888888',
// //     // borderRadius: '10px',
// //     fontFamily: 'Helvetica Neue',
// //     fontSize: '23px',
// //     color:'#8C9EFF',
// //     display: 'inline',
    
// }

// const noteButton = {
//     border: '7px solid white',
//     padding: '15px 50px',
//     boxShadow: '5px 5px 5px #888888',
//     // borderRadius: '10px',
//     fontFamily: 'Helvetica Neue',
//     fontSize: '23px'
// }

const myName = {
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    fontColor: '#8C9EFF'

}

export default class extends React.Component {
    render() {

        return (
                <HashRouter>
                    <div className="MainContainer">

                        <div className="menu1">
                        <Link to="/">Home</Link>
                        <Link to="/2" >Notes</Link>
                        </div>

                        <hr />

                        <Route exact path="/" component={Home} />
                        <Route path="/2" component={Note} />

                        <br />
                        <hr />
                        <div style={myName}>Dahee.J</div>

                    </div>
                </HashRouter>
        )
    }
}