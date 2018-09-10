import qs from 'querystring';

const ENDPOINT_URL = 'https://api.cualbondi.com.ar/v3';
// https://api.cualbondi.com.ar/v3/recorridos/?l=-57.94365439999999,-34.9290496,300|-57.969188690185554,-34.92239328726035,300&c=la-plata&page=1&t=false

const makeRequest = async ({ path = '', params = {} }) => {
  const response = await fetch(
    `${ENDPOINT_URL}/${path}/?${decodeURIComponent(qs.stringify(params))}`,
    {
      method: 'GET',
    }
  );

  return await response.json();
};

export default {
  getPlaceByNameAndCity({ name = '', citySlug = '' }) {
    if (!(name.length > 1) || !(citySlug.length > 1)) {
      return [];
    }
    return makeRequest({
      path: 'geocoder',
      params: {
        q: name,
        c: citySlug,
      },
    });
  },

  getTravel({ from = '', to = '', citySlug = '', page = 1 }) {
    return makeRequest({
      path: 'recorridos',
      params: {
        l: `${to},1000|${from},1000`,
        c: citySlug,
        page,
      },
    });
  },
};
