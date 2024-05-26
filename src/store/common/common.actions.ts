import { Context } from "../types";

export const setTheme = (context: Context, theme: string) => {
  context.commit("setTheme", theme);
};
