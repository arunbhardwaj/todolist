import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(response => response.json())
            .then(json => this.setState({ todos: json}))
    }

    // This toggles complete status and (un)crosses out todo. 
    toggleComplete = (id) => {
        this.setState(
            { 
                todos: this.state.todos.map(todo => {
                    if(todo.id === id) {
                        todo.completed = !todo.completed
                    } 
                    return todo;
                } )
            }
        );
    }

    // Deletes a Todo in todos
    deleteTodo = (id) => {
        // Using JSONPlaceHolder to simulate retrieving and editing from a server. 
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        }).then(res => this.setState({
                todos: [...this.state.todos.filter( todo => todo.id !== id)]
            }));

        // Filters out a todo based on id
        // this.setState(
        //     { 
        //         todos: this.state.todos.filter( todo => todo.id !== id )
        //     }
        // );
    }

    // Adds a todo with a unique ID to the state
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }

        this.setState(
            {
                todos: [...this.state.todos, newTodo]
            }
        );
        
        // TODO: implement posting feature using jsonplaceholder
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(newTodo),
        //     header: {
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     }
        // }

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(json => this.setState(
        //         {
        //             todos: [...this.state.todos, json]
        //         }
        //     )).catch(err => {
        //          console.error('Error: ', err);
        //     });

        
    }


    render() {
        return (
            // Must wrap everything in the Render method with Router
            <Router>
                <div className="App">
                    {/* we take the state in app and assign it as a property to the Todos component where we can work with it further */}
                
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                    
                </div>
                <div className="terms">
                    <text>Arun</text>
                </div>
            </Router>
        );
    }
}

export default App;
