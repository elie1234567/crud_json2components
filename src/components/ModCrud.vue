<template>
  <div>
    <h1 class="crud-title">Modifier un utilisateur</h1>
    <form @submit.prevent="updateCrud">
      <div class="card">
      <div>
        <label for="nom">Nom:</label>
        <input type="text" v-model="crud.nom" id="nom" required />
      </div>
      <div>
        <label for="prenom">Prénom:</label>
        <input type="text" v-model="crud.prenom" id="prenom" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" v-model="crud.email" id="email" required />
      </div>
       </div>
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script>
import api from '@/service/api';

export default {
  data() {
    return {
      crud: {
        nom: '',
        prenom: '',
        email: '',
      },
      crudId: null, 
    };
  },

  created() {
    this.crudId = this.$route.params.crudId;
    this.fetchCrud();
  },

  methods: {
    fetchCrud() {
      api.getCrud(this.crudId)
        .then((response) => {
          this.crud = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    updateCrud() {
      if (!this.crud.email) {
        alert('Veuillez saisir une adresse email valide');
        return;
      }

      api.updateCrud(this.crudId, this.crud)
        .then((response) => {
          console.log("Update response:", response);
          this.$router.push({ name: 'CrudList' });
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    },
  },
};
</script>


<style>
.card{
   list-style-type: none;
  padding: 0;
  float:left; 
   width: 400px;
   overflow: hidden;
  

}
</style>
