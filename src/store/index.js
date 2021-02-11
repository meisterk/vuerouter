import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste:[],
    nextId: 0
  },
  mutations: {
    addPerson(state, person){
      const newPerson = {
        id: state.nextId,
        vorname: person.vorname,
        nachname: person.nachname
      }
      state.liste.push(newPerson);
      state.nextId++;
      //store.dispatch('saveToLocalStorage');     
    },
    deletePerson(state, person){
      let index = 0;
      for(let i=0; i<state.liste.length; i++){
        if(person.id === state.liste[i].id){
          index = i;
        }
      }
      state.liste.splice(index, 1);
      //store.dispatch('saveToLocalStorage');           
    }
  },
  actions: {
    saveToLocalStorage(){
      let dataString = JSON.stringify(this.state.liste);
      localStorage.setItem('personen', dataString);
    },
    loadFromLocalStorage(){
      if(localStorage.getItem('personen')){
        const dataString = localStorage.getItem('personen');
        this.state.liste = JSON.parse(dataString);
      }else{
        this.state.liste = [];
      }
    }
  },
  modules: {
  }
})
