import React from "react";
import { useState } from 'react';

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState("")

	const handleAddTodo = () => {
		setTodos([...todos, { text: newTodo, checked: false }])
		setNewTodo("")
	}

	const handleDeleteTodo = (index) => {

	}

	const handleToggleTodo = (index) => {

	}


	return (
		<>
			<h1>To-Do List</h1>
		</>
	)
}

export default TodoList