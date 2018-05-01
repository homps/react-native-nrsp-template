/**
 * stores all the remote actions
 */

export const FETCH_URL = 'FETCH_URL';

export const FETCH_URL_RESULT = 'FETCH_URL_RESULT';
export const FETCH_URL_ERROR = 'FETCH_URL_ERROR';

export const fetchUrl = url => ({
  type: FETCH_URL,
  url
});
