import React from "react";
import logo from "./logo.png";
import "./App.css";


class App extends React.Component {
  // constructor is the 1st thing created after class is invocked
  constructor(props){
    super(props);
    this.state={
      newItem: "",
      list: []
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem: input});
  }

  render (){
    return(
      <div className="App">
          <header className="App-header">          
            <img src={logo} width="200" height="200" className="logo" />
            <h1 classname="app-title"> LCO ToDO App</h1>
          </header>
            <div className="container">
              Add an Item...
              <br/>
                <input 
                  type="text" 
                  className="input-text" 
                  placeholder="Write a ToDo item" 
                  required 
                  value={this.state.newItem}
                  onChange={e => this.updateInput(e.target.value)}
                />

                <button className="add-btn" 
                  onClick={() => this.addItem(this.state.newItem)} 
                  disabled={!this.state.newItem.length}
                  >Add ToDo
                </button>
                <div className="list">
                  <ul>
                    {this.state.list.map(item => {
                      return(
                        <li key={item.id}>
                          <input
                            type ="checkbox"
                            name ="idDone"
                            checked = {item.isDone}
                            onChange = {()=> {}}
                          />
                          {item.value}
                          <button className="btn" onClick={()=> this.deleteItem(item.id)}>Delete</button>
                        </li>
                      );
                    })}                    
                  </ul>

                </div>
            </div>            
      </div>
    );
  }
}


export default App;
