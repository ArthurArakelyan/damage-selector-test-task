import { apiUrl } from '../../constants';
import { RequestMethodType } from './types';

const request = async <T = any, D = any>(method: RequestMethodType, url: string, data?: D): Promise<T> => {
  return fetch(`${apiUrl}/${url}`, {
    method: method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(`${method} ${url} ${error?.message}`);

      return error;
    });
};

export default request;
