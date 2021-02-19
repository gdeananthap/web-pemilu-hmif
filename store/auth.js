export const state = () => ({
  email: null,
  nim: null,
  uid: null,
  loading: true
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    state.loading = false;
    function login({ email, uid }) {
      state.email = email;
      state.uid = uid;
      state.nim = email.split(".")[0];
    }
    function logout() {
      state.email = null;
      state.uid = null;
      state.nim = null;
    }

    if (!!authUser) {
      const { email, uid } = authUser;
      login({ email, uid });
    } else {
      logout();
    }
  }
};
