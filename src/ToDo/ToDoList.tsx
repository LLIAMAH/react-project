import React from "react";
import './ToDoList.css';
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import {Task} from "../Classes";

export default function ToDoList(props: Array<Task>) {

    return (
        <ul className="ul">
            {props.map((todo, index) => {
                return <ToDoListItem Id={todo.Id} Title={todo.Title} Completed={todo.Completed} key={todo.Id} />
            })}
        </ul>
    );
}
