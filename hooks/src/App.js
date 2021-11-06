import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const initialState = [
  {
    id: uuidv4(),
    name: "Terminar de leer el capítulo de useReducer",
    isCompleted: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { name } = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          name,
          isCompleted: false,
        },
      ];
    case "TOGGLE_IS_COMPLETED":
      const { id } = action.payload;
      const newState = state.map((singleTodo) => {
        if (singleTodo.id === id) {
          return { ...singleTodo, isCompleted: !singleTodo.isCompleted };
        }
        return singleTodo;
      });
      return newState;
    default:
      return state;
  }
};

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { name: todoText },
    });
    setTodoText("");
  };

  return (
    <div>
      <p>
        Nuevo TODO:{" "}
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleClick}>Agregar</button>
      </p>

      <h2>Listado</h2>

      <ul>
        {state.map(({ name, isCompleted, id }) => {
          return (
            <li
              key={id}
              style={{
                textDecoration: isCompleted ? "line-through" : "inherit",
              }}
              onClick={() =>
                dispatch({
                  type: "TOGGLE_IS_COMPLETED",
                  payload: { id },
                })
              }
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <hr />
      <Todo />
    </div>
  );
}
