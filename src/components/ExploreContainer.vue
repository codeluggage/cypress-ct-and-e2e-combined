<template>
  <ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title>
          {{ title || 'Hello world!' }}
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-item>
      <ion-label>Toggle the thing!</ion-label>
      <ion-toggle
        v-model="toggle"
        :checked="toggle"
      >
      </ion-toggle>
    </ion-item>

  </ion-content>
</template>

<script lang="ts">
 import {
   IonContent,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonLabel,
   IonItem,
   IonToggle,
 } from '@ionic/vue'
 import { defineComponent, ref } from 'vue'

 export default defineComponent({
   name: 'ExploreContainer',
   props: {
     title: String,
   },
   components: {
     IonContent,
     IonHeader,
     IonToolbar,
     IonTitle,
     IonLabel,
     IonItem,
     IonToggle,
   },
   setup () {
     const toggle = ref(false)

     return {
       toggle,
     }
   }
 })
</script>
