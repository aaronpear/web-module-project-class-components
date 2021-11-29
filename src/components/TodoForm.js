import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();   
    }

    onChange = (event) => {
        this.props.handleInput(event);
    }

    render() {
        return (
            <form>
                <input type='text' name='todo-input' onChange={this.onChange} />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;