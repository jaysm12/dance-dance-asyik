<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn style="background-color : #FFCDD2;" v-on="on">Create room</v-btn>
      </template>
      <v-card id="innerModal">
        <v-card-title>
          <h1 class="headline">Create New Room</h1>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Room Name" v-model="inputRoomName" maxlength="15" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Close</v-btn>
          <v-btn text @click="createRoom">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data: () => ({
    dialog: false,
    inputRoomName: ""
  }),
  methods: {
    createRoom() {   
      console.log('triggered createRoom')
      this.$store.dispatch('createRooms', this.inputRoomName)
      this.dialog = false
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
*{
  font-family: "Righteous", cursive;
}
#innerModal {
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}
</style>
