import React from 'react'
import Template from './Template'
import gql from "graphql-tag"
import { client } from './endPoint/endpoint'

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
            margin: '10px',
            height: '300px',
            overflow: 'center',
            boxShadow: '2px 2px 4px #999',
            position: 'center',
            flexDirection: 'column',
            width: '300px',
            fontFamily: 'Helvetica Neue',
            fontSize: '20px',
            color: '#8C9EFF',
            padding: '16px',
            display: 'inline',
            textAlign: 'center',

        }

        
       

        return (
            <div>
                <textarea cols="40" rows="10" value= { this.state.myText }  onChange= { (e) => { this.setState({ myText: e.target.value }) } } 
                style={noteStyle} />
                
                <button onClick={add2DB}  >Save</button>
                <hr />

                { this.state.dbnotes[0] ? this.state.dbnotes.map((x) => { return <Template key={x.id}  info={x} /> }) : <div> no Notes in db </div> }

            </div>
        )
    }
}