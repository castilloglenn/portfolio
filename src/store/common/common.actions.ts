import { Context } from "../types";

export const setTest = (context: Context, test: string) => {
  context.commit("setTest", test);
};
