import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            //Creates TodoItem
            <TodoItem key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} toggleComplete={this.props.toggleComplete}/>
        ));

    }
}

//Prop Types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default Todos;
