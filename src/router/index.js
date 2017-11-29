import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NotesPage from '@/components/NotesPage'
import RemindersPage from '@/components/RemindersPage'
import SettingsPage from '@/components/SettingsPage'
import YoutubePlayer from '@/components/YoutubePlayerElement'
import NotesElement from '@/components/NotesElement'

Vue.use(Router)
Vue.component('youtube-player', YoutubePlayer)
Vue.component('flo-notes', NotesElement)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesPage
    },
    {
      path: '/reminders',
      name: 'reminders',
      component: RemindersPage
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage
    }
  ]
})
