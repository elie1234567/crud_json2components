<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <input type="text"  v-model="item.name" @input="updateData(item.id, 'name', item.name)"class="a">
      </h5>
      <p class="card-text">Email:
        <input type="email" class="a" v-model="item.email" @input="updateData(item.id, 'email', item.email)">
      </p>
      <p class="card-text">Devise:
        <input type="text" class="a" v-model="item.devise" @input="updateData(item.id, 'devise', item.devise)">
      </p>
      <button @click="deleteItem" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['item'],
  methods: {
    deleteItem() {
      this.$emit('delete', this.item.id);
    },
    updateData(id, key, value) {
      this.$emit('update', id, key, value);
    },
  },
};


</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.a {
  border: none !important; /* Supprime la bordure autour des input */
  border-radius: 4px; /* Ajoute un arrondi aux coins de l'input */
  padding: 8px; /* Ajoute un espacement à l'intérieur de l'input */
  width: 100%; /* Fait en sorte que l'input prenne toute la largeur disponible */
  box-sizing: border-box; /* Inclut le padding dans la largeur totale de l'input */
}


.card {
  width:253px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-body {
  padding: 20px;
}

.card-title {
  margin: 0;
  font-size: 1.2rem;
}

.card-text {
  margin-bottom: 10px;
}

.btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-danger {
  background-color: #dc3545;
}

.btn:hover {
  background-color: #0056b3;
}



</style>
