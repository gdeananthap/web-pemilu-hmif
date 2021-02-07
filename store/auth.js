export const state = () => ({
  email: null,
  uid: null
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    function login({ email, uid }) {
      state.email = email;
      state.uid = uid;
    }
    function logout() {
      state.email = null;
      state.uid = null;
    }

    if (!!authUser) {
      const { email, uid } = authUser;
      console.log("user uid is: " + uid);
      login({ email, uid });
    } else {
      logout();
    }
  }
};