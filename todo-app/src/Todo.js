import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react';
import './Todo.css';
import db from './firebase';

function Todo(props) {
    return (
        <div className="todo__list">
            {/* <li>{props.text}</li> */}
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary=""></ListItemText>
                </ListItem>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
                {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button> */}
            </List>
        </div>
    )
}

export default Todo
