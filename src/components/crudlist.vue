<template>
  <div>
    <h1 class="crud-title">CRUD List</h1>

    <ul class="crud-list">
      <li v-for="crud in cruds" :key="crud.id" class="crud-item">
         <h6>nom:{{ crud.nom }}</h6>
        <h6>prenom:{{ crud.prenom }}</h6>
        <h6>password: {{ crud.email }}</h6>
        <button @click="deleteCrud(crud.id)">Delete</button>
         <button  @click="editCrud(crud.id)">Modifier</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/service/api';

export default {
  name: 'CrudList',
  data() {
    return {
      cruds: [],
    };
  },
  created() {
    this.fetchCruds();
  },
  methods: {
    fetchCruds() {
      api.getCruds().then((response) => {
        this.cruds = response.data;
      });
    },
    deleteCrud(id) {
      api.deleteCrud(id).then(() => {
        this.fetchCruds();
      });
    },
    goToAddPage() {
      this.$router.push({ name: 'AddCrud' });
    },
   editCrud(id) {
   this.$router.push({ name: 'ModCrud', params: { crudId: id } });
  },

  },
};
</script>

<style>
.crud-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.crud-list {
  list-style-type: none;
  padding: 0;
  float:left; 
   width: calc(99.333% - 32px);
     overflow: hidden;
  
}

.crud-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.crud-item button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.crud-item button:hover {
  background-color: #cc0000;
}
</style>
