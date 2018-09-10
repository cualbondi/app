export const onSelectedCity = city => ({
  type: 'CITY_SELECTED',
  payload: {
    ...city,
  },
});
