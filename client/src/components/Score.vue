<template>
    <div>
      <v-card style="height: 80vh;">
      <v-card-title>Score</v-card-title>
      <v-divider class="mx-0"></v-divider>
        <div style="padding: 20px 0;">
          <v-layout v-for="(score, i) in players" :key="i" wrap>
            <v-flex offset-xs1 xs6><p>{{score.name}}</p></v-flex>
            <v-flex xs5><v-btn small>{{score.points}}</v-btn></v-flex>
          </v-layout>
        </div>
      </v-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'score',
  computed : {
    ...mapState(['gameRoom']),
    players() {
      let arr = []
      for(let i in this.gameRoom) {
        if(this.gameRoom[i].name) {
          console.log(this.gameRoom[i])
          arr.push(this.gameRoom[i])
        }
      }
      return arr
    }
  }
}
</script>

<style>

</style>
