import React from 'react'
import { Card, Image } from 'semantic-ui-react'


class PupInfo extends React.Component{

    

        render(){

            return(
                <div>
                     <span onClick={() => this.props.handleClick(this.props.pup)}>{this.props.pup.name}</span>
                </div>
               
            )
        }

}

export default PupInfo