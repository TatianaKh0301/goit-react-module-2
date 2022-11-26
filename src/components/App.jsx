import React, { Component } from 'react';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
      /* <Counter initialValue={10}/> */
      /* <Dropdown /> */
      /* <ColorPicker options={colorPickerOptions} /> */
//       <TodoList />
//     </div>
//   );
// };
class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'Выучить основы React', completed: true},
      {id: 'id-2', text: 'Разобраться с React Router', completed: false},
      {id: 'id-3', text: 'Пережить Redux', completed: false},
  ],
  };

  deleteTodo = todoId => {
      this.setState(prevState => ({
          todos: prevState.todos.filter(todo => todo.id !== todoId),
      }));
  };

  toggleCompleted = todoId => {
      console.log(todoId);
      this.setState(prevState => ({
          todos: prevState.todos.map(todo => {
              if (todo.id === todoId) {
                  console.log("Нашли тот ТУДУ. который нужно!");
                  return {
                      ...todo,
                      completed: !todo.completed,
                  };
              }
              return todo;
      }),
    }))
  };

  render() {
    const { todos } = this.state;

    const totalTodo = todos.length;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 
      0,
    );

    return (
          <div
            style={{
              height: '100vh',
              padding: '30px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}
          >
              <div  style={{
                  padding: 0,             
                  fontSize: 25,
                  }}>
                  <p>Общее количество: <span style={{ fontWeight: 'bold',}}>{totalTodo}</span></p>
                  <p>Количество выполненных: <span style={{ fontWeight: 'bold',}}>{completedTodos}</span></p>
              </div>
              <TodoList todos={todos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
          </div>
        );
  }
}

export default App;