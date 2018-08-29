export const onSelectedCity = (city) => ({
  type: 'CITIES_SELECTED',
  payload: {
    ...city
  }
})