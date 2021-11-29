import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();   
    }

    onChange = (event) => {
        this.props.handleInput(event);
    }

    addTask = (event) => {
        this.props.handleAddTask(event);
    }

    render() {
        return (
            <form>
                <input type='text' name='todo-input' onChange={this.onChange} />
                <button onClick={this.addTask}>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;