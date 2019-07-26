<template>
  <div>
    <v-card dark style="height: 80vh;">
      <v-img height="400px" src="https://media.giphy.com/media/24owNmVY1AaOQXDDFj/giphy.gif"></v-img>
      <div style="text-align: center;">
        <v-btn large style="margin: 20px 0;">{{arrow}}</v-btn>
        <form action="#" @submit.prevent="sendMoves">
          <input
            v-model="moves"
            type="text"
            style="color:#424242; width: 100%; border: 1px solid #424232;"
            autofocus
          />
        </form>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      moves: "",
      moveList: "W A S D W A S D W A"
    };
  },
  methods: {
    sendMoves() {
      console.log(this.moves);
      this.moves = "";
    }
  },
  created() {
    var source = "https://s107.123apps.com/aconv/d/s107z9VFuDgF.wav"; // "https://storage.cloud.google.com/adityabpradana-hacktiv8/audio.mp3" // https://s107.123apps.com/aconv/d/s107z9VFuDgF.wav
    var audio = new Audio();
    //
    audio.src = source;
    audio.autoplay = true;
    console.log("Music On");
    audio.load();
    audio.play();
  },
  computed: {
    arrow: function() {
      let arrowList = "";
      for (let i = 0; i < this.moveList.length; i++) {
        let a = this.moveList[i];
        if (a === "w") {
          a = "⬆";
        } else if (a === "a") {
          a = "➡";
        } else if (a === "s") {
          a = "⬅";
        } else if (a === "d") {
          a = "⬇";
        } else {
          a = " ";
        }
        arrowList += a;
      }
      console.log(arrowList);
      return arrowList;
    },
    ...mapState(["rooms", "gameRoom"])
  }
};
</script>

<style>
#arrowSymbol {
  font-size: "30px";
}
</style>
