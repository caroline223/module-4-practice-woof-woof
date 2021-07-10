import React from 'react'
import PupInfo from '../Components/PupInfo'
import { Card } from 'semantic-ui-react'

class PupCollection extends React.Component {

    render(){

        return(
            <Card.Group itemsPerRow={3}>
                {this.props.pups.map((pupObj, id) => {
                    return <PupInfo key={id} pups={pupObj} />
                })}
            </Card.Group>
           
        )
    }

}

export default PupCollection