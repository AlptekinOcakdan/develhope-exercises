import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            newItem: ''
        };
    }

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

    render() {
        const { items, newItem } = this.state;

        return (
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newItem}
                    onChange={this.handleChange}
                    placeholder="Add an item"
                />
                <button onClick={this.handleAddItem}>Add</button>
            </div>
        );
    }
}

export default TodoList;
