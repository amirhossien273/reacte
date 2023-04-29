import assign from 'object-assign';
export default (state = {category: []}, action) => {
    
    switch (action.type) {
      case "GET_ALL_CATEGORY":       
        return assign({}, state, {
            category: assign([], state.category, {
                ...action.data
            })});
      default:
        return state;
    }
  };