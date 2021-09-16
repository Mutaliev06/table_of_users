import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { users } from "./users";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(users, applyMiddleware(thunk, logger));
