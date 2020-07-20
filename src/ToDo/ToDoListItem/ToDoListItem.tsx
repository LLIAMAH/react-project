import React from "react";
import {Task} from "../../Classes";

export default function ToDoListItem(props: {todo: Task, index: number}) {
    return (
        <li data-id={props.todo.Id}>{props.todo.Title}</li>
    );
}
