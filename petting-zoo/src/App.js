import React from 'react';
import Animal from './components/Animals';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }
    // custom method for handling callback
    handleMessage(name) {
        const newMessage = `You just pet the ${name}!`;
        this.setState({message: newMessage});
    }
    render() {
        return (
            <div>
                <h1>Petting Zoo!</h1>
                <h3>{this.state.message}</h3>
                <Animal name="Horse" onPetAnimal={(name) => this.setState({message: `You just pet the ${name}!`})} />
                <Animal name="Goat" onPetAnimal={(name) => this.setState({message: `You just pet the ${name}!`})} />
                <Animal name="Sheep" onPetAnimal={(name) => this.setState({message: `You just pet the ${name}!`})} />
            </div>
        )
    }
}
export default App;