import React from "react";
import {Task} from "../../Classes";

export default function ToDoListItem(todo: Task) {
    return (
        <li data-id={todo.Id}>{todo.Title}</li>
    );
}
