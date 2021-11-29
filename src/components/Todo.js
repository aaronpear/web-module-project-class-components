import React from "react";

class Todo extends React.Component {
    constructor() {
        super();
    }
    
    handleClick = () => {
        this.props.handleToggle(this.props.item);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.props.item.task}</p>
            </div>
        )
    }
}

export default Todo;