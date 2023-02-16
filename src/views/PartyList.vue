<template>
  <div class="party">
    <div v-if="parties.length">
      <p>Filtrar por nombre
        <input type="text" v-model="filter">
      </p>
      <table >
        <thead>
          <tr>
            <th>id</th>
            <th>Color</th>
            <th>Siglas</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>        
          <tr v-for="(party,index) in partiesSearch" :key="index">
            <td>{{ party.id }}</td>
            <td :style="'background-color: ' + party.color"
              @click="deleteParty(party.id)"
            ></td>
            <td>{{ party.acronym }}</td>
            <td>{{ party.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>No hay partidos</p>
  </div>
</template>

<script>
// @ is an alias to /src
import PartyDataService from '@/services/PartyDataService';

export default {
  name: 'PartyList',
  data() {
    return {
      parties: [],
      filter: ''
    }
  },
  methods: {
    loadParties() {
      PartyDataService.getAll()
      .then(res => {
        console.log(res);
        this.parties = res.data;    
        console.log(this.parties);    
      })
      .catch(e => console.log(e));
    },
    deleteParty(id) {
      PartyDataService.delete(id)
      .then(res => {
        console.log(res);
        this.parties = this.parties.filter(p => p.id != id);
      })
      .catch(e => console.log(e));
    }
  },
  computed: {
    partiesSearch() {
      return this.parties.filter(p => p.name.includes(this.filter));
    } 
  },
  mounted() {
    this.loadParties();
  }
}
</script>

<style>
  table {
    margin: 0 auto;
  }
</style>