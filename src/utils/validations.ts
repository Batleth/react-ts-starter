export const validateEmail = (value: string): boolean => {
    // Escapes are not useless, they are part of the regex
    // eslint-disable-next-line
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return regEx.test(value);
};

export const validateNumber = (value: string): boolean => {
    return !isNaN(Number(value))
};

