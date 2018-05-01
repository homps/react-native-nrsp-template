import { takeEvery, call, put } from 'redux-saga/effects';

//the actions this saga can deal with
import {
  FETCH_URL,
  FETCH_URL_RESULT,
  FETCH_URL_ERROR
} from '../actions/remote';

//a simple JS fetch
const fetchRaw = url => fetch(`https://${url}`);

//a generator function that asynchronously fetches the URL and puts the result in the store
function* fetchUrl(action) {
  try {
    const response = yield call(fetchRaw, action.url);

    if (response.error) {
      yield put({ type: FETCH_URL_ERROR, error: response.error });
    } else {
      const jsonText = yield response.json();
      yield put({ type: FETCH_URL_RESULT, text: jsonText[0] });
    }
  } catch (error) {
    yield put({ type: FETCH_URL_ERROR, error: error.message });
  }
}

//the entry point for the saga
export default function* rootSaga() {
  yield takeEvery(FETCH_URL, fetchUrl);
}
