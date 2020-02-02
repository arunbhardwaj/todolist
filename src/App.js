import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';

class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'take out the trash',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'take out the',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'take out trash',
                completed: false
            }
        ]
    }

    // This toggles
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
        //Filters out a todo based on a 
        this.setState(
            { 
                todos: this.state.todos.filter( todo => todo.id !== id )
            }
        );
    }

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
    }


    render() {
        return (
            // You have to wrap everything in the Render method with Router
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
            </Router>
        );
    }
}

export default App;
