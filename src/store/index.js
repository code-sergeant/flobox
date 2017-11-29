import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    notesCollection: [{
      id: 2,
      title: 'Example Note Title',
      tags: ['Example Tag', 'Example Tag 2'],
      timeStamp: '11-9-17',
      noteDescription: 'This is a super cool note about something I was studying',
      noteBodyFull: `Here's a bunch of text that 
        you can format however you like 
        using something like showdown.`,
      videoTimeStamp: '',
      videoUrl: '',
      videoTitle: '',
      videoId: ''
    },
    {
      id: 3,
      title: 'Example Note Title 2',
      tags: ['example 1', 'example 2', 'example tag 3'],
      timeStamp: '11-2-17',
      noteDescription: 'Here\'s another noteworthy note worth taking note of.',
      noteBodyFull: `Here's a bunch of text that 
        you can format however you like 
        using something like showdown.`,
      videoTimeStamp: '',
      videoUrl: '',
      videoTitle: '',
      videoId: ''
    }],
    user: {
      id: 'lkajsdlkfjsadf',
      userName: 'Steven',
      userEmail: 'code_sergeant@protonmail.com'
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedNotesCollection (state) {
      return state.notesCollection.sort((noteA, noteB) => noteA.date > noteB.date)
    },
    loadedNote (state) {
      return noteId => state.notesCollection.find(note => note.id === noteId)
    }
  }
})
