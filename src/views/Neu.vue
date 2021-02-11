<template>
  <div>
    <h2>Neu</h2>

    <label for="vorname">Vorname</label>
    <input  v-model="person.vorname" id="vorname" type="text">

    <label for="nachname">Nachname</label>
    <input  v-model="person.nachname" type="text">

    <button @click="speichern">Speichern</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            person: {
                vorname: 'Marta',
                nachname: 'Musterfrau'
            }
        }
    },
    methods: {
        speichern(){
            this.$store.commit('addPerson', this.person);
            this.$router.push('/');
        }
    }
}
</script>
