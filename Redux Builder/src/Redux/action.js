import { ADD, DARK, LIGHT, REDUCE } from "./actionType";

export function handleIncrement(dispatch) {
  return dispatch({ type: ADD, payload: 1 });
}

export function handleDecrement(dispatch) {
  return dispatch({ type: REDUCE, payload: 1 });
}

export function ToggleLight(dispatch) {
  return dispatch({ type: LIGHT, payload: "light" });
}
export function ToggleDark(dispatch) {
  return dispatch({ type: DARK, payload: "dark" });
}
