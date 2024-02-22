import React, { useReducer } from 'react';
import './style.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.count >= 5) {
        return { ...state, error: 'Maximum increment reached' };
      }
      return { count: state.count + 1, error: null };
    case 'DECREMENT':
      if (state.count <= 0) {
        return { ...state, error: 'Minimum decrement reached' };
      }
      return { count: state.count - 1, error: null };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div>
      <p>Count: {state.count}</p>
      {state.error && <h2 style={{ color: 'red' }}>{state.error}</h2>}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
