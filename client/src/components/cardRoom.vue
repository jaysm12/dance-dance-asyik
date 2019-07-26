<template>
  <div>
    <v-card width="300" id="cardChooseRoom">
      <v-card-title>{{ data }} Room</v-card-title>
      <v-card-text>2 player inside</v-card-text>
      <v-card-actions>
        <v-btn text style="background-color : #FCE4EC">Dance Here</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'cardRoom',
  props: ['data'],
  data() {
    return {
      
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
