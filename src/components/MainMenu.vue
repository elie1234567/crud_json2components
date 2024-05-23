<template>
  <div>
    <nav>
      <button @click="goToList">Liste des utilisateurs</button>
      <button @click="goToAdd">Ajouter</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  methods: {
    goToList() {
      this.$router.push({ name: 'CrudList' });
    },
    goToAdd() {
      this.$router.push({ name: 'AddCrud' });
    },
  },
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

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
</style>
