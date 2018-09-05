export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state-reminder-pro');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state-reminder-pro', serializedState);
    } catch (err) {
        console.error(err);
    }
};
