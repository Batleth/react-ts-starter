import { AnyAction, Reducer } from 'redux';
import { remove, concat, isEqual, find, set, map } from 'lodash';
import { TodoActionType } from '../actions';
import { TodosState } from '../models';

const initial: TodosState = {
    todos: [],
};

export const TodoReducer: Reducer<TodosState> = (
    state: TodosState = initial,
    action: AnyAction,
) => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return {...state, todos: concat(state.todos,action.todo)};
        case TodoActionType.REMOVE_TODO:
            return {...state, todos: remove(state.todos, (todo) => { return !isEqual(todo, action.todo);})};
        case TodoActionType.COMPLETE_TODO:
            const newlist = map(state.todos, (todo) => { if(isEqual(todo,action.todo)){ return {...todo, completed: true} }else{ return todo}; });
            return {...state, todos: newlist};
        case TodoActionType.UPDATE_TODO:
            let updated = find(state.todos, (todo) => { return isEqual(todo,action.todo)});
            if(updated){
                set(updated,"text", action.text);
                return {...state, todos: state.todos};
            }else{
                return state;
            }
        default:
            return state;
    }
};
