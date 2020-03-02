<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <router-link v-bind:to="{ name: 'Home' }" class="side_bar_link">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'Contact' }" class="side_bar_link">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'Chat' }" class="side_bar_link">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Chat</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      fixed
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ pag = 'Application' }}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >

        <div id="app">
          <router-view/>
        </div>

      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; Sigmafone 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
</style>
