import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: '',
    rooms: [],
    gameRoom: {},
    newMoves : ''
  },
  mutations: {
    GETMOVES() {

    },
    MASUKUSER(state, payload) {
      state.loggedUser = payload
      console.log(state.loggedUser)
      localStorage.setItem('user', this.state.loggedUser)
    },
    MAIN(state, payload) {
      state.gameRoom = payload
    },
    GENERATENEWMOVES(state, payload) {
      let moves = ['w', 'a', 's', 'd']
      let result = ''
      for(let i = 0 ;i < 10 ; i++) {
        let random = moves[Math.floor(Math.random() * moves.length)]
        result += random        
      }
      state.newMoves = result
    },
    INSERTGAMEROOM(state, payload) {
      state.gameRoom = payload
    },
    INSERTROOMS(state, payload) {
      state.rooms = payload
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
          commit('INSERTROOMS', arr)
        })
    },
    createRooms({state, commit}, payload) {
      commit('GENERATENEWMOVES')
      db.collection('rooms')
        .add({
          name: payload,
          ready: false,
          roomMaster: state.loggedUser,
          totalPlayers: 1,
          moveList : state.newMoves
        })
    },
    joinRooms({state, commit}, payload) {
      db.collection('rooms').doc(payload)
        .set(gameRoom)
        .then(() => {
          console.log('player joined')
        })
        .catch(console.log(err))
    },
    snapGame({state, commit}, payload) {
      db.collection('rooms').doc(payload)
        .onSnapshot((doc) => {
          gameRoom =  {
            id: doc.id,
            ...doc.data()
          }
          commit('INSERTGAMEROOM', gameRoom)
        })
    },
    generateNewMoves({state, comit}, payload) {

    }
  }
})
