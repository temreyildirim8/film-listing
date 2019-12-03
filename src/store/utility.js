
export const updateObject = (oldObject, initialState, updatedValues) => {
    return Object.assign({}, oldObject, initialState, updatedValues);
  }