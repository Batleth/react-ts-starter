import { AnyAction } from 'redux';
import { TodoActionType } from './ActionTypes';
import { Todo } from '../models';

export const addTodo = (todo: Todo): AnyAction => ({
    type: TodoActionType.ADD_TODO,
    todo
});

export const removeTodo = (todo: Todo): AnyAction => ({
    type: TodoActionType.REMOVE_TODO,
    todo,
});

export const completeTodo = (todo: Todo): AnyAction => ({
    type: TodoActionType.COMPLETE_TODO,
    todo,
});
export const updateTodo = (todo: Todo, text: string): AnyAction => ({
    type: TodoActionType.UPDATE_TODO,
    todo,
    text
});