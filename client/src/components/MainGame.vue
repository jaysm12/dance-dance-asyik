<template>
  <div>
    <v-card dark style="height: 80vh;"> 
    <v-img height="400px" src="https://media.giphy.com/media/24owNmVY1AaOQXDDFj/giphy.gif"></v-img>
    <div style="text-align: center;">
      <v-btn large style="margin: 20px 0;">
        W A S D W A S D W A
      </v-btn>
      <form action="#" @submit="sendMoves">
        <input v-model="moves" type="text" style="color:#424242; width: 100%; border: 1px solid #424232;">
      </form>
    </div>
    </v-card>
  </div>
</template>

<script>
export default {
    data () {
        return {
            moves: ''
        }
    },
    methods: {
        sendMoves() {
            console.log(this.moves)
            this.moves =''
        }
    },
    created () {
        var source = "https://s107.123apps.com/aconv/d/s107z9VFuDgF.wav"  // "https://storage.cloud.google.com/adityabpradana-hacktiv8/audio.mp3" // https://s107.123apps.com/aconv/d/s107z9VFuDgF.wav
        var audio = new Audio()
        //
        audio.src = source
        audio.autoplay = true
        console.log('Music On')
        audio.load()
        audio.play()
    }
}
</script>

<style>

</style>
