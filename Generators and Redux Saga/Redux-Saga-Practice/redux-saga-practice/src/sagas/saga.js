import {takeEvery, delay, put} from 'redux-saga/effects'

export function* watchAgeUp() {
    yield takeEvery('ON_AGE_UP', ageUpAsync)
}

function* ageUpAsync() {
    yield delay(4000)
    yield put({type: 'AGE_UP_ASYNC', value: 1});
}