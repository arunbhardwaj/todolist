import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'take out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'take out the',
                completed: false
            },
            {
                id: 3,
                title: 'take out trash',
                completed: false
            }
        ]
    }

    markComplete = (e) => {
        
    }

    render() {
        return (
            <div className="App">
                {/* we take the state in app and assign it as a property to the Todos component where we can work with it further */}
                <Todos todos={this.state.todos} markComplete={this.markComplete} />
            </div>
        );
    }
}

export default App;
