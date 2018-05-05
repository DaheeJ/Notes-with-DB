import React from 'react'
// import { ApolloProvider } from 'react-apollo'
import { HashRouter, Route, Link } from 'react-router-dom'
// import './Style/style.css'
// import { client } from './PrismaEndPoint/EndPoint'

import Home from './01-Home'
import Note from './02-Note'



export default class extends React.Component {
    render() {

        return (
                <HashRouter>
                    <div className="MainContainer">

                        <div className="menu1">
                            <Link  to="/">Home</Link>
                            <Link  to="/2">Notes</Link>
                        </div>

                        <hr />

                        <Route exact path="/" component={Home} />
                        <Route path="/2" component={Note} />

                        <br />
                        <hr />
                        <div>Dahee.J</div>

                    </div>
                </HashRouter>
        )
    }
}