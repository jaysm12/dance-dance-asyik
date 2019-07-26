import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: '',
    rooms: [],
    gameRoom: {}
  },
  mutations: {
    GETMOVES() {

    },
    MASUKUSER(state, payload) {
      state.loggedUser = payload
      console.log(state.loggedUser)
      localStorage.setItem('user', this.state.loggedUser)
    }

  },
  actions: {
    snapRooms({state, commit}, payload) {
      db.collection('rooms')
        .onSnapshot((querySnapshot) => {
          let arr = []
          let count = 1
          querySnapshot.forEach(doc => {
            arr.push({
              name: count,
              id: doc.id,
              ...doc.data()
            })
            count++
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
