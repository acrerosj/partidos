<template>
  <div class="create">
    <div v-if="message" :class="typeMessage">{{ message }}</div>
    <p>
        <label for="">Siglas</label>
        <input type="text" v-model="party.acronym">
    </p>
    <p>
        <label for="">Nombre</label>
        <input type="text" v-model="party.name">
    </p>
    <p>
        <label for="">Color</label>
        <input type="color" v-model="party.color">
    </p>
    <button @click="createParty">Crear Partido</button>
  </div>
</template>

<script>
import PartyDataService from '@/services/PartyDataService'
export default {
    name: 'PartyAdd',
    data() {
        return {
            party: {
                acronym: '',
                name: '',
                color: '#000000'
            },
            message: ''
        }
    },
    methods: {
        createParty() {
            this.message = "";
            PartyDataService.create(this.party)
                .then(res => {
                    console.log(res);
                    this.message = "Partido creado correctamente";  
                    this.typeMessage = 'success';
                })
                .catch(() => {
                    this.message = "Error al crear partido.";
                    this.typeMessage = 'error';
                });
        }
    }
}
</script>

<style>
.success {
    background-color: lightgreen;
}
.error {
    background-color: lightcoral;
}
</style>