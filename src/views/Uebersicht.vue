<template>
  <div>
    <h2>Übersicht</h2>
    <ul>
        <li v-for="person in this.$store.state.liste" v-bind:key="person.id">
          {{ person.vorname }} {{ person.nachname }}
          <button @click="deletePerson(person)">-</button>
        </li>        
    </ul>
    <button @click="$router.push('neu')">Neu</button>
  </div>
</template>

<script>
  export default {
  methods:{
    deletePerson(person){
      this.$store.commit('deletePerson', person);            
    }
  }  
}
</script>
