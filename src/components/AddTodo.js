import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        todoField: ''
    }

    // 
    updateText = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    // Adds the current todo to the list. 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todoField);
        this.setState({
            todoField: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
                <input 
                    type='text' 
                    name='todoField' 
                    placeholder="Add to-do..."
                    style={{flex: '10', padding: '1px', height: '30px' }}
                    value={this.state.todoField}
                    onChange={this.updateText}
                />
                <input 
                    className='btn'
                    type='submit' 
                    value='Submit'
                    style= {{flex: '1' }}
                    
                />
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
