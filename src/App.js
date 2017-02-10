import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

var tasks = [];
tasks.push({
    id: genId(),
    description: "something I need to do",
    isComplete: true
});

function genId() {
    return new Date().getUTCMilliseconds().toString();
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { tasks : tasks };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <TodoList tasks={this.state.tasks} handleClick={(e) => this.handleClick(e)} handleSubmit={(e) => this.handleSubmit(e)}/>
                </div>
            </div>
        );
    }

    handleClick(event) {
        var task = tasks.find((task) => {return event.target.id === task.id;});
        task.isComplete = !task.isComplete;
        this.setState({ tasks });
    }

    handleSubmit(newTodo) {
        tasks.push({
            id: genId(),
            description: newTodo,
            isComplete: false
        });
        this.setState({ tasks });
    }
}

export default App;
