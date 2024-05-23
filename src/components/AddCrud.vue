<template>
  <div>
    <h1 class="crud-title">Ajouter un utilisateur</h1>
    <form @submit.prevent="addCrud">
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
          <label for="email">Password:</label>
          <input type="email" v-model="crud.email" id="email" required />
        </div>
      </div>
      <button type="submit">Ajouter</button>
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
    };
  },
  methods: {
    addCrud() {
      api.createCrud(this.crud).then(() => {
        this.$router.push({ name: 'crudlist' });
      });
    },
  },
};
</script>

<style>
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 10px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width:300px;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
