export const searchByText = payload => ({
  type: 'SEARCH/SEARCH_BY_TEXT_REQUESTED',
  payload,
});

export const onSelectDestinationPlace = payload => ({
  type: 'SEARCH/DESTINATION_PLACE_SELECTED',
  payload,
});
