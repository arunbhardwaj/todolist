import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    state = {}

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

// {/* uses component drilling? */}
    render() {
        // destructuring
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.toggleComplete.bind(this, id)} 
                    />
                    {title}
                    <button 
                        onClick={this.props.deleteTodo.bind(this, id)} 
                        style={btnStyle}>
                            x
                    </button>
                </p>
            </div>
            
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '3px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    textAlign: 'center',
    fontSize: '13px'
}

export default TodoItem;
