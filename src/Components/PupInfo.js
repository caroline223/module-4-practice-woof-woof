import React from 'react'
import { Card, Image } from 'semantic-ui-react'


class PupInfo extends React.Component{

        render(){

            const { name, isGoodDog, image } = this.props.pups

            return(
                <Card >
                    <Image src={ image } id="dog-image"/>
                    <Card.Description>
                        { name }
                        { isGoodDog }
                    </Card.Description>
                </Card>
            )
        }

}

export default PupInfo