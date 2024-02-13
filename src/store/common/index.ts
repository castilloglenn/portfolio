import * as actions from "./common.actions";
import * as mutations from "./common.mutations";
import * as getters from "./common.getters";
import state from "./common.state";
import { NAMESPACED } from "../constants";

const common = {
  NAMESPACED,
  getters,
  mutations,
  actions,
  state,
};

export default common;
