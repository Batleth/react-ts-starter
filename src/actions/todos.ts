import { AnyAction } from 'redux';
import { TodoActionType } from './ActionTypes';
import { ITodo } from '../models';

export const addTodo = (todo: ITodo): AnyAction => ({
    type: TodoActionType.ADD_TODO,
    todo
});

export const removeTodo = (todo: ITodo): AnyAction => ({
    type: TodoActionType.REMOVE_TODO,
    todo,
});

export const completeTodo = (todo: ITodo): AnyAction => ({
    type: TodoActionType.COMPLETE_TODO,
    todo,
});
export const updateTodo = (todo: ITodo, text: string): AnyAction => ({
    type: TodoActionType.UPDATE_TODO,
    todo,
    text
});