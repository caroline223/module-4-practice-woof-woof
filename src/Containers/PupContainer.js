import React from 'react' 
import PupCollection from '../Components/PupCollection'

class PupContainer extends React.Component {

    state = {
        pups: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/pups')
        .then(response => response.json())
        .then(this.setInitialPups)
    }

    setInitialPups = (pupCollection) => {
        this.setState({
            pups:[...pupCollection]
        })
    }

    render(){
        return (
            <div>
                <PupCollection pups={this.state.pups} />
            </div>
        )
    }

}

export default PupContainer;