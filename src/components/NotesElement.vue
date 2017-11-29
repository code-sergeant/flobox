<template>
<v-layout row wrap>
      <v-flex xs12 md4 v-for="note in notes" :key="note.id" >
        <v-card class="mx-2">
          <v-card-title>
            <h5>{{ note.title}}</h5>
            <v-spacer></v-spacer>
            <div class="text-xs-center">
              <v-chip v-for="(tag, index) in note.tags" :key="index">{{tag}}</v-chip>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card light>
            <v-card-text>{{note.noteBodyFull}}</v-card-text>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout> 
</template>

<script>
export default {
  name: 'NotesElement',
  computed: {
    notes () {
      return this.$store.getters.loadedNotesCollection
    }
  },
  data () {
    return {
      notes: null
    }
  }
}
</script>

<style>

</style>

