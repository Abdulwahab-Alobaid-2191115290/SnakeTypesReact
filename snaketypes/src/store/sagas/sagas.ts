import { CallEffect, delay, put, PutEffect, takeLatest } from "redux-saga/effects";
import { DOWN, LEFT, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP, RIGHT, setDisAllowedDirection, UP } from "../actions/actions.ts";
import { ISnakeCoord } from "../reducers/reducers.ts";

// a worker saga that dispatches the actions to the Redux store
  export function* moveSaga(params: { type: string; payload: ISnakeCoord;})
  : Generator<
    | PutEffect<{ type: string; payload: ISnakeCoord }>
    | PutEffect<{ type: string; payload: string }>
    | CallEffect<true>
  >{

    // keep executing the last direction i.e keep moving right if player decides to go right
    while (true) {

      // dispatch the required action
      yield put({
        type: params.type.split("_")[1],
        payload: params.payload,
      });

      // set DisAllowedDirection 
      switch (params.type.split("_")[1]) {
        case RIGHT:
          yield put(setDisAllowedDirection(LEFT));
          break;
  
        case LEFT:
          yield put(setDisAllowedDirection(RIGHT));
          break;
  
        case UP:
          yield put(setDisAllowedDirection(DOWN));
          break;
  
        case DOWN:
          yield put(setDisAllowedDirection(UP));
          break;
      }
      yield delay(100);   // game speed: delay between each action
    }
  }
  
  // a watcher saga that watches for any action that is being dispatched
  function* watcherSagas() {
    yield takeLatest(
      [MOVE_RIGHT, MOVE_LEFT, MOVE_UP, MOVE_DOWN],
      moveSaga
    );
  }
  
  export default watcherSagas;