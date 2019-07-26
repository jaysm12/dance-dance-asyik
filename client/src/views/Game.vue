<template>
    <div>
    <v-container grid-list-md text-left>
      <v-layout wrap>
        <v-flex xs2>
          <Score></Score>
        </v-flex>
        <v-flex xs7>
          <MainGame></MainGame>
        </v-flex>
        <v-flex xs3>
          <Chat></Chat>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Score from '../components/Score.vue'
import MainGame from '../components/MainGame.vue'
import Chat from '../components/Chat.vue'
export default {
  components: {
    Score,
    MainGame,
    Chat
  }
}
</script>

<style>

</style>
