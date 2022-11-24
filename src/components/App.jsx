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
      {id: 'id-1', text: 'Выучить основы React', completed: false},
      {id: 'id-2', text: 'Разобраться с React Router', completed: false},
      {id: 'id-3', text: 'Пережить Redux', completed: false},
  ],
  };

  render() {
    const { todos } = this.state;
    return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}
          >
              <TodoList todos={todos}/>
          </div>
        );
  }
}

export default App;