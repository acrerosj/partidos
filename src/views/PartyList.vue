<template>
  <div class="party">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Color</th>
          <th>Siglas</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(party,index) in parties" :key="index">
          <td>{{ party.id }}</td>
          <td :style="'background-color: ' + party.color"></td>
          <td>{{ party.acronym }}</td>
          <td>{{ party.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import PartyDataService from '@/services/PartyDataService';

export default {
  name: 'PartyList',
  data() {
    return {
      parties: []
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
    }
  },
  mounted() {
    this.loadParties();
  }
}
</script>