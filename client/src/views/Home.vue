<template>
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
          
        ></v-text-field>
      </div>
      <v-btn 
        id="btn"
        color="red white--text"
        >
        Create and Play !
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      nameInput : ''
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
  }

  #welcome {
    font-family: 'Londrina Shadow', cursive;
    font-size: 70px;
    color: white;
  }

</style>

