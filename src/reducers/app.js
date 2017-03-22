const INITIAL_STATE = {
  message: 'Hi',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, message: action.payload };
    default: return state;
  }
};
