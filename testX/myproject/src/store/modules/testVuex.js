const test = {
  namespaced: true,
  actions: {
    increment ({
      commit
    }) {
      return new Promise((resolve, reject) => {
        // commit('incrementLD', 1)
        resolve('wwwwww')
      })
    }
  }
}
export default test
