export const validateEmail = (value: string): boolean => {
    const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regEx.test(value);
};

export const validateNumber = (value: string): boolean => {
    return !isNaN(Number(value))
};

