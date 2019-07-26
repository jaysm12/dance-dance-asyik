<template>
  <div>
    <v-card width="300" height="110" id="cardChooseRoom">
      <v-card-title>Room {{ room.name }}</v-card-title>
      <!-- <v-card-text>2 player inside</v-card-text> -->
      <v-card-actions>
        <v-btn text style="background-color : #FCE4EC" @click="main">Dance Here</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'cardRoom',
  props: ['room'],
  methods : {
    main() {
      this.$store.commit('MAIN', room )
      this.$router.push('/game')
    }
  },
  computed: {
    ...mapState(['rooms'])
  }
}
</script>

<style>
#cardChooseRoom {
  background-image: linear-gradient(
    to right top,
    #e03df0,
    #e14cef,
    #e258ee,
    #e264ec,
    #e36eeb,
    #d977ef,
    #d07ff3,
    #c786f5,
    #af8dfb,
    #9693fe,
    #7b98fe,
    #5f9cfb
  );
}
</style>
