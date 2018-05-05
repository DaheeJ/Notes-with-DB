import React from 'react'
import Template from './Template'

export default class extends React.Component {
    state = {
        myText: ' ', dbnotes: [{ id: 'lkdjfkasjf', dbtext: 'this is one note' },
            { id: 'lkdjfkasjf', dbtext: 'this is 2nd!' } ] }
    render() {
        const add2DB = () => {
            console.log("adding")
            console.log(this.state.myText)
        }

        return (
            <div>
                <textarea cols="40" rows="10" value= { this.state.myText }  onChange= { (e) => { this.setState({ myText: e.target.value }) } } />
                
                <button onClick={ add2DB } >Save</button>
                <hr />

                { this.state.dbnotes[0] ? this.state.dbnotes.map((x) => { return <Template  info={x} /> }) : <div> no Notes in db </div> }




            </div>
        )
    }
}