<template>
  <v-card dark style="height: 80vh;">
    <v-card-title>Live Chat</v-card-title>
      <v-divider class="mx-0"></v-divider>
        <div style="padding: 20px 0;">
        <v-layout wrap>
        <v-flex offset-xs1>
        <ul style="list-style: none;">
            <li v-for="(chat, i) in chats" :key="i"><b>Aditya: </b>What inside chat?</li>
        </ul>
        </v-flex>
        </v-layout>
        </div>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      chats: []
    }
  }
}
</script>

<style>

</style>
