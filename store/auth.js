export const state = () => ({
  email: null
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    function login({ email }) {
      state.email = email;
    }
    function logout() {
      state.email = null;
    }

    if (!!authUser) {
      console.log("tunak tun");
      login({ email: authUser.email });
    } else {
      console.log("tunak tun");
      logout();
    }
  }
};
