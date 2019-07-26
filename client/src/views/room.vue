<template>
  <div id="room">
    <h1 id="header" style="font-family: 'Russo One', sans-serif;">Choose Your Room</h1>
    <div id="roomBox">
      <div v-for="(card, i) in rooms" :key="i">
        <cardRoom :data="card" />
      </div>
    </div>
  </div>
</template>

<script>
import cardRoom from '../components/cardRoom'
export default {
  name: 'room',
  components: {
    cardRoom
  },
  data () {
    return {
      rooms: ['First', 'Second', 'Third', 'Fourth']
    }
  },
  created() {
    if(localStorage.getItem('user')) {
      this.$router.push('/room')
      this.$store.commit('MASUKUSER', localStorage.getItem('user'))
    } else {
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
* {
  font-family: "Righteous", cursive;
}
#header {
  padding-top: 90px;
}
#room {
  width: 100%;
  height: 100vh;
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
}
#roomBox {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 40vh;
}
</style>
