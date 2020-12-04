import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todolist: null
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <input></input>
                <button onClick= {() => this.addTodo()}>Add Todo </button>
                <div>
                    {this.state.todolist}
        </div>
        <TaskList title = {'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo()}/>
        <TaskList title={'Completed'} buttonText={"Delete"} tasks={'done'} buttonFunction={this.removeTodo()} />
    </div>
        );
    }
    addTodo(){
        console.log('called');
        this.setState({todoList:'item1'});

    }
    removeTodo(){
        if(this.state.todoList != null)
        {
        this.setState({ todoList: null})
        }
    }
}

export default App;
