import React, { Component } from "react";
import {
  BtnAdd,
  Container,
  Input,
  Display,
  Tarefas,
  Tarefa,
} from "../src/styles/GlobalStyles";

class App extends Component {
  state = {
    task: "",
    list: [],
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  addTask = (/* e */) => {
    if (this.state.task === "") {
      return;
    }
    this.setState({
      list: this.state.list.concat({
        task: this.state.task,
        id: Math.random(),
      }),
      task: "",
    });
  };

  delTask = (id) => {
    this.setState({
      list: this.state.list.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  render() {
    return (
      <Container>
        <h1>TODO LIST</h1>

        <Display>
          <Input
            placeholder="Digite sua tarefa..."
            value={this.state.task}
            onChange={this.handleChange}
          />
          <BtnAdd onClick={this.addTask}>Adicionar</BtnAdd>
        </Display>

        <Tarefas>
          {this.state.list.map((item) => (
            <Tarefa>
              <p>{item.task}</p>
              <button
                onClick={() => {
                  this.delTask(item.id);
                }}
              >
                <i class="bx bx-trash"></i>
              </button>
            </Tarefa>
          ))}
        </Tarefas>
      </Container>
    );
  }
}

export default App;
