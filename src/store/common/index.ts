import * as actions from "./common.actions";
import * as mutations from "./common.mutations";
import * as getters from "./common.getters";
import state from "./common.state";

const common = {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};

export default common;
