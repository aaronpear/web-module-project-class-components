import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();


    }

    render() {
        console.log(this.props.toDoList);
        return (
            <div>
                {this.props.toDoList.map(item => (
                    <Todo key={item.id} task={item.task} />
                ))}
            </div>
        )
    }
}

export default TodoList;