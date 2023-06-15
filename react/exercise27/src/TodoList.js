import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            newItem: ''
        };
    }
// I took too much help from gpt for this. I didn't even understand the request
    handleChange = (event) => {
        this.setState({
            newItem: event.target.value
        });
    };

    handleAddItem = () => {
        const { newItem, items } = this.state;
        if (newItem.trim() !== '') {
            this.setState({
                items: [...items, newItem],
                newItem: ''
            });
        }
    };

    handleRemoveItem = (index) => {
        const { items } = this.state;
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        this.setState({
            items: updatedItems
        });
    };

    render() {
        const { items, newItem } = this.state;
        const { render } = this.props;

        return (
            <div>
                {render(items, this.handleRemoveItem)}
                <input
                    type="text"
                    value={newItem}
                    onChange={this.handleChange}
                    placeholder="Add an item"
                />
                <button onClick={this.handleAddItem}>Add</button>
                <button onClick={() => this.setState({ items: [] })}>Reset</button>
            </div>
        );
    }
}

export default TodoList;
