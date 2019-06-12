function throwError(message) {
    throw new Error(message);
}

export function actionCreatorFactory({ actionsTypes, endPoint }) {
    if (!actionsTypes) {
        throwError('actionsTypes argument is required');
    }

    if (!endPoint) {
        throwError('endPoint argument is required');
    }

    return async function (dispatch, getState, api) {
        dispatch({ type: actionsTypes.loading });

        try {
            const response = await api.get(endPoint);
            const data = response.data;

            dispatch({ type: actionsTypes.success, payload: { data } });
        } catch (error) {
            dispatch({ type: actionsTypes.error, payload: { error } });
        }
    }
} 