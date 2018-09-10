const initial = {
  results: [],
  total: 0,
  currentPage: 0,
  nextPageUri: null,
  pageSize: 0,
  pageCount: 0,
  error: {},
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'travel-results/FETCH_TRAVEL_TO_DESTINATION_SUCCESS': {
      return {
        ...state,
        error: {},
        results: action.payload.results,
        total: action.payload.count,
        currentPage: action.payload.page,
        nextPageUri: action.payload.next,
        pageSize: action.payload.page_size,
        pageCount: action.payload.page_count,
      };
    }
    case 'travel-results/FETCH_TRAVEL_TO_DESTINATION_ERROR': {
      return {
        ...initial,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};
