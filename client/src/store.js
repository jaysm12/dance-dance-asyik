import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase'
import { stat } from 'fs';
import router from './router'
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
      console.log(payload, 'DARI COMMIT')
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
          moveList : state.newMoves,
          '1' : {
            name : state.loggedUser,
            points: 0
          }
        })
    },
    joinRooms({state, commit}, payload) {
      let input = {}
      let key = payload.totalPlayers + 1
      input[key] = {
        name : state.loggedUser,
        points: 0
      }
      db.collection('rooms').doc(payload)
        .set(input, {merge: true})
        .then(() => {
          console.log('joined this room')
        })
        .catch(err => console.log(err))
    },
    snapGame({state, commit}, payload) {
      return new Promise((resolve, reject) => {
        db.collection('rooms').doc(payload)
          .onSnapshot((doc) => {
            const obj = {
              id: doc.id,
              ...doc.data()
            }
            console.log(obj)
            commit('INSERTGAMEROOM', obj)
            if(doc.data().ready) {
              router.push('/game')
            }
            resolve(true)
          })
      })
    },
    generateNewMoves({state, commit}, payload) {
      let moves = ['w', 'a', 's', 'd']
      let result = ''
      for(let i = 0 ;i < 10 ; i++) {
        let random = moves[Math.floor(Math.random() * moves.length)]
        result += random
      }
    },
    setPlayer({state, commit}, payload) {
      db.collection('rooms').doc(payload)
        .set({
          player
        })
    },
    updateMove({state, commit}, payload) {
      const game = db.collection('rooms').doc(state.gameRoom.id)
      game.update({ moveList : state.newMoves })
      .then(() => {
        console.log('move updated')
      })
      .catch(err => console.log(err))
    }
  }
})
