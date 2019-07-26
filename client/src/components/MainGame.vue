<template>
  <div>
    <v-card dark style="height: 80vh;">
      <v-img height="400px" src="https://media.giphy.com/media/24owNmVY1AaOQXDDFj/giphy.gif"></v-img>
      <div style="text-align: center;">
        <v-card class="arrow" style="margin-top: 40px;" elevation="7">{{arrow}}</v-card>
        <v-card
          class="arrow"
          style="margin-top: 40px;"
          elevation="7"
          color="pink--text"
        >{{arrowUser}}</v-card>
        <form action="#" @submit.prevent="sendMoves">
          <input id="playerMove"
            v-model="moves"
            type="text"
            style="color:#424242; border: 1px solid #424232;" 
            maxlength="10"           
            autofocus
          />
        </form>
      </div>
    </v-card>
    <v-snackbar
      v-model="snackbar.condition"
      top
      :color="snackbar.color"
      timeout="500"
    >
      {{snackbar.text}}
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      moves: "",
      userMoves: "",
      snackbar: {
        condition: false,
        text: '',
        color: ''
      }
    };
  },
  methods: {
    sendMoves() {
      if(this.moves.toLowerCase() == this.gameRoom.moveList.toLowerCase()) {
        this.$store.commit('GENERATENEWMOVES')
        this.$store.dispatch('updateMove')
        this.snackbar.condition = true
        this.snackbar.text = 'Nice !'
        this.snackbar.color = 'success'
      } else {
        this.snackbar.condition = true
        this.snackbar.text = 'Miss !'
        this.snackbar.color = 'error'
      }
      this.moves = ''
    }
  },
  created() {
    var source = "https://s107.123apps.com/aconv/d/s107z9VFuDgF.wav"; // "https://storage.cloud.google.com/adityabpradana-hacktiv8/audio.mp3" // https://s107.123apps.com/aconv/d/s107z9VFuDgF.wav
    var audio = new Audio();
    //
    audio.src = source;
    audio.autoplay = true;
    
    audio.load();
    audio.play();
  },
  computed: {
    arrow() {
      let arrowList = "";
      
      for (let i = 0; i < this.gameRoom.moveList.length; i++) {
        let a = this.gameRoom.moveList[i].toLowerCase();
        if (a === "w") {
          a = " ⬆";
        } else if (a === "d") {
          a = " ➡";
        } else if (a === "a") {
          a = " ⬅";
        } else if (a === "s") {
          a = " ⬇";
        } else {
          a = " ";
        }
        arrowList += a;
      }
      
      return arrowList;
    },
    arrowUser() {
      let arrowList = "";
      for (let i = 0; i < this.moves.length; i++) {
        let a = this.moves[i].toLowerCase();
        if (a === "w") {
          a = " ⬆"; 
        } else if (a === "d") {
          a = " ➡";
        } else if (a === "a") {
          a = " ⬅";
        } else if (a === "s") {
          a = " ⬇";
        } else {
          a = " ";
        } 
        arrowList += a;
      }
      
        return arrowList;
    },
    ...mapState(["rooms", "gameRoom"])
  }
};
</script>

<style>
.arrow {
  font-size: 30px;
}
#playerMove {
}
</style>
