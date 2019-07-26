<template>
  <div id="room">
    <div>
      <v-layout justify-end>
        <div class="my-2" style="padding-right : 25px;">
          <modalCreate />
          <!-- <v-btn @click="createRoom" large style="background-color : #FFCDD2;">Create Room</v-btn> -->
        </div>
        <div class="my-2" style="padding-right : 25px;">
          <v-btn @click="logout" large style="background-color : #FFCDD2;">Logout</v-btn>
        </div>
      </v-layout>
      <h1>welcome {{loggedUser}}</h1>
      <h1 id="header" style="font-family: 'Russo One', sans-serif;">Choose Your Room</h1>
    </div>
    <div id="roomBox">
      <div v-for="(room, i) in rooms" :key="i">
        <cardRoom :room="room" />
      </div>
    </div>
  </div>
</template>

<script>
import cardRoom from "../components/cardRoom";
import modalCreate from "../components/modalCreateRoom";
import { mapState } from "vuex";
export default {
  name: "room",
  components: {
    cardRoom,
    modalCreate
  },
  methods: {
    logout() {
      // console.log("triggered logout");
      localStorage.clear();
      this.$router.push("/");
    }
  },
  created() {
    if (localStorage.getItem("user")) {
      this.$router.push("/room");
      this.$store.commit("MASUKUSER", localStorage.getItem("user"));
      this.$store.dispatch("snapRooms");
    } else {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState(["loggedUser", "rooms"])
  }
};
</script>

<style scoped>
* {
  font-family: "Righteous", cursive;
}
#header {
  padding-top: 90px;
  text-align: center;
}
#room {
  text-align: center;
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
