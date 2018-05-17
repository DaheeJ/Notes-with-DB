import React from 'react'
import gql from "graphql-tag"
import { client } from './endPoint/endpoint'

export default class extends React.Component {
    state = { xid: '', xtext: '' }

    componentDidMount() {
        console.log("showme!!!!")
        this.setState({ xtext: this.props.info.text })
    }

    render() {
    
        const data = this.props.info
        

        

        const updateNote = async () => {
            console.log("state: ", this.state.xtext)
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        updateNote(
                            where:{ id: "${data.id}" }
                            data:{ text: "${this.state.xtext}" }
                        )
                        {
                            id
                        }
                        }
                `}).then((result) => { return result.data.createUser })

            await console.log("User Deleted: ", temp1)
            await this.setState({ singerName: '', singerId: '' })
            window.location.reload()
        }




        const deleteNote = async () => {
            console.log("deleting ", data.id)
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        deleteNote(where: {
                            id:"${data.id}"
                        }){
                            text
                        }
                    }
                `}).then((result) => { return result.data.createUser })

            await console.log("User Deleted: ", temp1)
            await this.setState({ singerId: '' })
            window.location.reload()
        }


            const twoButton = {
                justifyContent: 'center',
                fontFamily: 'Helvetica Neue', 
                fontSize: '13px',
                margin: '8px 6px',


            }

            const boxStyle = {
                margin: 'auto',
                height: '120px',
                alignItem: 'center',
                display: 'flex',
                boxShadow: '2px 2px 4px #999',
                width: '300px',
                fontFamily: 'Helvetica Neue',
                fontSize: '16px',
                color: '#B5B5B5',
            }
            const flexy = {
                display: 'flex',
                justifyContent: 'center',
            }

  

    return(
        <div>
            <textarea cols="40" rows="5" style={boxStyle} value={this.state.xtext } onChange={ (e) => { this.setState({ xtext: e.target.value })} } />

            <div style={flexy}>
                
                <button div class="button is-success" onClick={updateNote} style={twoButton}> Update </button>
                <button div class="button is-danger"  onClick={deleteNote} style={twoButton} > Delete </button>
            </div>
           

        </div>
        )
    }

}