import { CommonState } from "./types";

export const setTheme = (state: CommonState, theme: string) => {
  state.theme = theme;
};
