import React from "react";
import './ToDoList.css';
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import {Task} from "../Classes";

export default function ToDoList(props: { todos: Array<Task> }) {

    return (
        <ul className="ul">
            {props.todos.map((todo, index) => {
                return <ToDoListItem todo={todo} index={index}/>
            })}
        </ul>
    );
}
