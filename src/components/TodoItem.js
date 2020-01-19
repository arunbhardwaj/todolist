import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    state = {}

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

// </* uses component drilling? */>
    render() {
        // destructuring -- basically refactoring so code's easier to read and write
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id) } />
                    {this.props.todo.title}
                    <button>x</button>
                </p>
            </div>
            
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }


export default TodoItem;