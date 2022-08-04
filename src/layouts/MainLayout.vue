<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          ED Tools
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-splitter
        model-value="128px"
      >
        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
          >
            <q-route-tab
              icon=""
              label="Pristines"
              to="/pristine"
              exact
            />
            <q-route-tab
              icon=""
              label="Rares"
              to="/rares"
              exact
            />
            <q-route-tab
              icon=""
              label="RES"
              to="/res"
              exact
            />
            <q-route-tab
              icon=""
              label="Distances"
              to="/dist"
              exact
            />
            <q-route-tab
              icon=""
              label="Miner's Tool"
              to="/miner"
              exact
            />
            <q-route-tab
              icon=""
              label="Sphere"
              to="/sphere"
              exact
            />
            <q-route-tab
              icon=""
              label="List"
              to="/list"
              exact
            />
            <q-route-tab
              icon=""
              label="Road to Riches"
              to="/expl"
              exact
            />
            <q-route-tab
              icon=""
              label="Selenium"
              to="/selenium"
              exact
            />
            <q-route-tab
              icon=""
              label="Massacre"
              to="/pve"
              exact
            />
            <q-route-tab
              icon=""
              label="Hotspots"
              to="/hotspot"
              exact
            />
          </q-tabs>
        </template>
        <template v-slot:after>
          <router-view />
        </template>
      </q-splitter>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
      tab: ref('pristine')
    };
  }
});
</script>
