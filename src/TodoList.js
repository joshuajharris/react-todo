import React, {Component} from 'react';
import './TodoList.css';

class TodoItem extends Component {
    render() {
        return (
            <li>
                <input id={this.props.task.id} type='checkbox' onChange={this.props.handleClick} checked={this.props.task.isComplete} /> {this.props.task.description}
            </li>
        );
    }
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({newTodo: event.target.value});
    }

    handleSubmit(event) {
        this.props.handleSubmit(this.state.newTodo);
        event.preventDefault();
    }

    render() {
        return (
            <div className="TodoList">
                <h1>
                    This is a TodoList
                </h1>
                <form onSubmit={this.handleSubmit}>
                    New Todo <input type='text' onChange={this.handleChange} value={this.state.newTodo}/>
                    <input type='submit' value='Submit'/>
                </form>
                <ul>
                    {this.props.tasks.map((task) => <TodoItem task={task} handleClick={this.props.handleClick} key={task.id}/>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;
