<template>
  <div id="game">
    <v-container grid-list-md text-left>
      <v-layout wrap>
        <v-flex xs2>
          <Score class="side"></Score>
        </v-flex>
        <v-flex xs7>
          <MainGame></MainGame>
        </v-flex>
        <v-flex xs3>
          <Chat class="side"></Chat>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Score from "../components/Score.vue";
import MainGame from "../components/MainGame.vue";
import Chat from "../components/Chat.vue";
export default {
  components: {
    Score,
    MainGame,
    Chat
  }
};
</script>

<style>
#game {
  background-image: linear-gradient(
    to right top,
    #f03da3,
    #de5bc0,
    #c773d6,
    #ae87e4,
    #9897ea,
    #85a6f3,
    #74b3f8,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  height: 100vh;
}
.side {
  opacity: 0.6;
}
</style>
