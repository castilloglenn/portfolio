import { CommonState } from "./types";

export const setTest = (state: CommonState, test: string) => {
  state.test = test;
};
