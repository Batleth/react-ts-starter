export enum UIActionType {
    LOADING_START = "START_LOADING",
    LOADING_FINISHED = "FINISHED_LOADING",
}

export enum TodoActionType {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    COMPLETE_TODO = "COMPLETE_TODO",
    UPDATE_TODO = "UPDATE_TODO",
}

export const ActionTypes = {
    UI: UIActionType,
    TODO: TodoActionType,
};
