<template>
  <div>
    <h2>Neu</h2>
    <input  v-model="eingabetext" type="text">
    <button @click="speichern">Speichern</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            eingabetext: 'aaa'
        }
    },
    methods: {
        speichern(){
            this.$store.commit('addText', this.eingabetext);
            this.$router.push('/');
        }
    }
}
</script>
