<template>
  <div id="resultContainer">
    <div id="notionWin" v-if="result == 'win'">
      <h1>Congratulations, You win!</h1>

      <v-divider id="divid"></v-divider>

      <div class="text-center">
        <v-btn class="button" @click="back">Back</v-btn>
      </div>
    </div>
    <div id="notionLose" v-if="result == 'lose'">
      <h1>Oops.. Maybe Next Time</h1>
      <br />
      <h2>Keep Tryin!</h2>

      <v-divider id="divid"></v-divider>

      <div class="text-center">
        <v-btn class="button" @click="back">
          <h3>Back</h3>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "result",
  props: ["result"],
  data() {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap");
#resultContainer {
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
#notionWin,
#notionLose {
  margin-top: 22vh;
}
#divid {
  margin-top: 10px;
  margin-left: 50vh;
  width: 50em;
}
h1,
h2 {
  text-align: center;
  font-family: "Kaushan Script", cursive;
  font-size: 4em;
}
h3 {
  font-family: "Kaushan Script", cursive;
  font-size: 1.5em;
}
#button {
  background-color: #74b3f8;
  margin-top: 20px;
  width: 15em;
  height: 4em;
}
</style>
