import React from "react";
import { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const handleAddTodo = () => {
		setTodos([...todos, { text: newTodo, checked: false }]);
		setNewTodo("");
	};

	const handleDeleteTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos)
	};

	const handleToggleTodo = (index) => {
		const newTodos = [...todos]
		newTodos[index].checked = !newTodos[index].checked
		setTodos(newTodos)
	};

	return (
		<>
			<h1>To-Do List</h1>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						<input
							type="checkbox"
							checked={todo.checked}
							onChange={() => handleToggleTodo(index)}
						/>
						<span
							style={{
								marginRight: "10px",
								textDecoration: todo.checked ? "line-through" : "none"
							}}>
							{todo.text}
						</span>
						<button onClick={() => handleDeleteTodo(index)}>Delete</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default TodoList;
