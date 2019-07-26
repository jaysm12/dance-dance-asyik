<template>
<<<<<<< HEAD
  <div class="home">
=======
  <div id="home">
    <div class="dance">
      <v-img
        src="https://i.gifer.com/7Uz.gif"
      ></v-img>
      <v-img
        src="https://i.gifer.com/6os.gif"
      ></v-img>
    </div>
    <div id="form">
      <p id="welcome">DANCE DANCE ASYIK</p>
      <div id="input-name">
        <v-text-field
          placeholder="Input name.."
          rounded
          solo
          v-model="nameInput"
        ></v-text-field>
      </div>
      <v-btn 
        id="btn"
        color="red white--text"
        @click="masukUser" 
        >
        Create and Play !
      </v-btn>
    </div>
>>>>>>> development
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
<<<<<<< HEAD
=======
      nameInput : ''
    }
  },
  created() {
    if(localStorage.getItem('user')) {
      this.$router.push('/room')
      this.$store.commit('MASUKUSER', localStorage.getItem('user'))
    } else {
      this.$router.push('/')
    }
  },
  methods : {
    masukUser() {
      this.$store.commit('MASUKUSER', this.nameInput)
      this.$router.push('/room')
      console.log('user masuk')
>>>>>>> development
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Londrina+Shadow&display=swap');
  .dance {
    display: flex;
    /* width: 100%; */
  }
  #home {
    width: 100%;
    height: 100%;
    background-color: #546E7A;
    display: flex;
    align-items: center;
    justify-content: center;
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

  #welcome {
    font-family: 'Londrina Shadow', cursive;
    font-size: 70px;
    color: #f03da3;
  }

</style>

