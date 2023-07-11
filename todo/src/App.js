import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </div>
  );
}

export default App;
