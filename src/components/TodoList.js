import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.toDoList.map(item => (
                    <Todo key={item.id} item={item} checked={item.checked} handleToggle={this.props.handleToggle} />
                ))}
            </div>
        )
    }
}

export default TodoList;