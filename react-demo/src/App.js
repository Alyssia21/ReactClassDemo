import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
class App extends Component {
    constructor(){
        super()
        this.state = {
            completed: [],
            todoList: [],
            task: '',
            
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <form onSubmit={(e) =>this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Task'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <button type='submit'>Add Task</button>
                </form>
                <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo} />
                <TaskList title={'Completed'} buttonText={"Delete"} tasks={this.state.completed} buttonFunction={this.deleteTodo} />
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        this.setState({task: '', todoList: [ ...this.state.todoList, this.state.task] });
    }
    removeTodo = key =>{
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        if(index > -1){
            todoList.splice(index, 1);
            this.setState({todoList: todoList})
            this.setState({completed:[...this.state.completed, key]});
        }
    }

    deleteTodo = key =>{
        let completed = this.state.completed;
        let index = completed.indexOf(key);
        if(index > -1){
            completed.splice(index,1);
            this.setState({completed: completed});
        }
        console.log(key)
    }
}

export default App;