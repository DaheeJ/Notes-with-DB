import React from 'react'

export default class extends React.Component {
    state = { xid: '', xtext: '' }

    render() {
        
        const data = this.props.info

    return(
        <div>
                <textarea cols="40" rows="5" value={ data.dbtext } />

            <div>
                <button> Update Note</button>
                <button> Delete Note</button>
            </div>

        </div>
        )
    }

}