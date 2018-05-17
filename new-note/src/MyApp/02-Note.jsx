import React from 'react'
import Template from './Template'
import gql from "graphql-tag"
import { client } from './endPoint/endpoint'
import 'bulma/css/bulma.css'

export default class extends React.Component {
    
    state = { myText: ' ', dbnotes: [ ] }
        
        async componentWillMount() {
            let temp1 = await client.query({
                query: gql`
                    query {
                        notes{
                            id
                            text
                            
                        }
                    }
                `}).then((result) => { return result.data.notes })
                
     
            await console.log("La Data: ", temp1)
            await this.setState({ dbnotes: temp1 })
    }
        

    render() {
        
        const add2DB = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation {
                        createNote(data: { text: "${ this.state.myText }" }){
                            id
                            text
                        }
                    }
                `}).then((result) => { return result.data.createUser })

            await console.log("La Data: ", temp1)
            await this.setState({ myText: '' })
            
        }

        const noteStyle = {
            margin: 'auto',
            height: '300px',
            alignItem: 'center',
            display: 'flex',
            boxShadow: '2px 2px 4px #999',
            width: '300px',
            fontFamily: 'Helvetica Neue',
            fontSize: '20px',
            color: '#479BE8',
            padding: '16px',
        }

        const saveB = {
            display: 'flex',
            alignItem: 'center',
            backgroundColor: '#479BE8',
            border: 'none',
            color: 'white',
            padding: '10px 26px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline  block',
            fontSize: '16px',
            margin: '8px 2px',
            cursor: 'pointer',
            alignItem: 'center',
            position: 'absolute',
            borderRadius: '3px'
        }
        
       const styleB = {
           display: 'flex',
           justifyContent: 'center',
       }

        return (
            <div>
                
                <textarea cols="40" rows="10" value= { this.state.myText }  onChange= { (e) => { this.setState({ myText: e.target.value }) } } 
                style={noteStyle} />
                
                <div style={styleB}>
                <button onClick={add2DB} style={saveB} >Save</button>
                </div>
                <br />
                <br />
                <br />
                <hr />

                
                { this.state.dbnotes[0] ? this.state.dbnotes.map((x) => { return <Template key={x.id}  info={x} /> }) : <div> no Notes in db </div> }
                
            </div>
        )
    }
}