<template>
  <div>
    <v-card width="300" height="150" id="cardChooseRoom">
      <v-card-title>Room {{ room.name }}</v-card-title>
      <v-card-text> {{room.totalPlayers}} player inside</v-card-text>
      <v-card-actions>
        <v-btn v-if="isJoined.status === false"  @click="join" 
          elevation="6"
          color="cyan lighten-1 white--text"
        >Join Here</v-btn>
        <v-btn v-if="isJoined.status === true && isJoined.room == room.id "
          elevation="6"
          color="green lighten-1 white--text"
        >Joined</v-btn>
        <v-btn v-if="isReady === true && isJoined.room == room.id"  @click="main" 
          elevation="6"
          color="red lighten-1 white--text"
        >Dance Here</v-btn>
        <v-btn v-if="isJoined.status === true && isReady === false && isJoined.room == room.id"
          elevation="6"
          color="yellow lighten-1 white--text"
        >Wait</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'cardRoom',
  data: function () {
    return {
      isJoin: false,
      isReady: false
    }
  },
  props: ['room'],
  methods : {
    main() {
      this.$store.commit('MAIN', room)
      console.log(this.room.id)
      this.$store.dispatch('updateReady', this.room)
    },
    join() {
      this.isJoin = true
      this.$store.dispatch('snapGame', this.room.id)
      .then( () => {
        console.log('SNAP!!!')
        console.log(this.isJoined)
      })
      this.$store.dispatch('joinRooms', this.room)
      if(this.room.totalPlayers >= 2){
        this.isReady = true
      }
    }
  },
  computed: {
    ...mapState(['rooms', 'isJoined'])
  },
  created() {
    // this.isJoin = this.isJoined 
    console.log(this.room.totalPlayers)
    if(this.room.totalPlayers >= 3){
      this.isReady = true
    }
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
