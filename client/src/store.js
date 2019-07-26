import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: '',
    rooms: '',
    gameRoom: {}
  },
  mutations: {
    GETMOVES() {

    }

  },
  actions: {
    snapRooms({state, commit}, payload) {
      db.collection('rooms')
        .onSnapshot((querySnapshot) => {
          let arr = []
          querySnapshot.forEach(doc => {
            arr.push({
              id: doc.id,
              ...doc.data()
            })
          })
          state.rooms = arr
        })
    },
    createRooms({state, commit}, payload) {
      db.collection('rooms')
        .add({
          ready: false,
          roomMaster: state.loggedUser,
          totalPlayers: 1
        })
    },
    joinRooms({state, commit}, payload) {
      db.collection('rooms').doc(payload)
        .set(gameRoom)
        .then(() => {
          console.log('player joined')
        })
        .catch(console.log(err))
    }
  }
})
