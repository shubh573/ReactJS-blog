import React, { Component } from 'react';
import './style.css';
import List from './List';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class Comment extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key:Date.now()
            }
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        
        if(newItem.text!==""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item => item.key!==key);
        this.setState({
            items:filteredItems
        })
    }

    render(){
        return (
            <div className="comment">
                <header>
                    <span>Comments</span>
                    <form id="addComment" onSubmit={this.addItem}>
                    <input type="text" placeholder="Add comment"
                    value={this.state.currentItem.text} onChange={this.handleInput}/>
                    <button type = "submit">Add</button>
                    </form>
                </header>
                <List items = {this.state.items}
                deleteItem = {this.deleteItem}/>
            </div>
        )
    }
}

export default Comment;