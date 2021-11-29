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

    clearCompleted = () => {
        this.props.handleClear();
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' name='todo-input' onChange={this.onChange} />
                    <button onClick={this.addTask}>Add Todo</button>
                </form>
                <button onClick={this.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;