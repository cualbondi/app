const initial = {
  results: [],
  searching: false,
  error: {},
  hasError: false,
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'SEARCH/SEARCH_TEXT_REQUESTED': {
      return {
        ...state,
        searching: true,
        hasError: false,
      };
    }

    case 'SEARCH/SEARCH_BY_TEXT_SUCCESS': {
      return {
        ...state,
        results: action.payload,
        searching: false,
      };
    }

    case 'SEARCH/SEARCH_BY_TEXT_ERROR': {
      return {
        ...state,
        results: [],
        searching: false,
        error: action.payload,
        hasError: true,
      };
    }

    default:
      return state;
  }
};
