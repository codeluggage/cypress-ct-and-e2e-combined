<template>
  <ion-content>
    <ion-title>{{ name }}</ion-title>

    <ion-item>
      <ion-label>Toggle the thing</ion-label>
      <ion-toggle
        v-model="toggle"
        :checked="toggle"
        @ionChange="toggleThing"
      >
      </ion-toggle>
    </ion-item>

  </ion-content>
</template>

<script lang="ts">
 import {
   IonContent,
   IonTitle,
   IonLabel,
   IonItem,
   IonToggle,
 } from '@ionic/vue'
 import { defineComponent, ref } from 'vue'

 export default defineComponent({
   name: 'RoutineDetails',
   props: {
     name: String,
   },
   components: {
     IonContent,
     IonTitle,
     IonLabel,
     IonItem,
     IonToggle,
   },
   setup () {
     const toggle = ref(false)

     return {
       toggle,
       toggleThing: () => { toggle.value = !toggle.value }
     }
   }
 })
</script>

<style scoped>
 #container {
   text-align: center;
   position: absolute;
   left: 0;
   right: 0;
   top: 50%;
   transform: translateY(-50%);
 }

 #container strong {
   font-size: 20px;
   line-height: 26px;
 }

 #container p {
   font-size: 16px;
   line-height: 22px;
   color: #8c8c8c;
   margin: 0;
 }

 #container a {
   text-decoration: none;
 }
</style>
