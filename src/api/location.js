import { Location, Permissions } from 'expo';

export const getCurrent = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    return null;
  }
  return await Location.getCurrentPositionAsync();
};
