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
        id: this.state.nextId,
        vorname: person.vorname,
        nachname: person.nachname
      }
      state.liste.push(newPerson);
      this.state.nextId++;
      this.saveToLocalStorage();     
    },
    deletePerson(state, person){
      let index = 0;
      for(let i=0; i<this.state.liste.length; i++){
        if(person.id === this.state.liste[i].id){
          index = i;
        }
      }
      state.liste.splice(index, 1);
      this.saveToLocalStorage();           
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
