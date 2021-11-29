import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <input type='text'></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;