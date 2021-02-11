<template>
  <div>
    <h2>Übersicht</h2>
    <ul>
        <li v-for="eintrag in this.$store.state.liste" v-bind:key="eintrag">{{ eintrag }}</li>        
    </ul>
    <button @click="$router.push('neu')">Neu</button>
  </div>
</template>
