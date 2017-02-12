import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import incrementActions from 'actions/app-actions'
import counterStore from 'stores/counter-store'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: counterStore.getCounter()
        }

        this.increaseCounter = this.increaseCounter.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    increaseCounter(){
        incrementActions.incrementCount();
    }

    componentDidMount(){
        counterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(){
        counterStore.removeChangeListener(this.onChange);
    }

    onChange(){
        console.log(counterStore.getCounter());
        this.setState({
            counter: counterStore.getCounter()
        });
    }

    render(){
        return (
            <div>
                <h1>Counter {this.state.counter}</h1>
                <button onClick={this.increaseCounter}>Increase Count</button>
            </div>
        );
    }

}


ReactDOM.render(<App/>, document.querySelector('#app'));