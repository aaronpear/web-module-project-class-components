import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();


    }

    render() {
        return (
            <div>
                <Todo />
            </div>
        )
    }
}

export default TodoList;