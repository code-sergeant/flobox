<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      clipped
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-toolbar flat dark>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../src/assets/bw-code-sergeant-logo.png" />
            </v-list-tile-avatar>
            <v-list-tile-content>
            <v-list-tile-title>{{ userInfo.userName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in leftNavItems" :key="item.title" :to="item.routerLink">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app clipped-left>
     
      <v-btn
        icon
        dark
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>

      <v-toolbar-title>FLO&nbsp;<span class="red darken-3"> BOX&nbsp; </span> </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        icon
        dark
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
               <router-view></router-view>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-navigation-drawer
      temporary
      right
      v-model="rightDrawer"
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon dark>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Search Notes</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      leftNavItems: [
        { icon: 'home', title: 'Home', routerLink: '/home' },
        { icon: 'library_books', title: 'Notes Collection', routerLink: '/notes' },
        { icon: 'event', title: 'Reminders', routerLink: '/reminders' },
        { icon: 'fingerprint', title: 'Personalize', routerLink: '/settings' }
      ],
      userInfo: {
        userName: 'Steven Hernandez',
        userEmail: 'code_sergeant@protonmail.com'
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'FloBox'
    }
  }
}
</script>
