<template>
  <div class="container">
    <h1>CRUD Vue.js</h1>
    <label for="search">Recherche par nom et ID:</label>
    <input type="text" id="search" v-model="searchTerm" @input="filterRows" style="border-color:red; width:50px;">
    
    <form @submit.prevent="addData">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="devise">Devise:</label>
      <input type="text" id="devise" v-model="devise" required>
      <button type="submit">Add</button>
    </form>
    
   <div class="card-container">
      <card v-for="item in filteredData" :key="item.id" :item="item" @delete="deleteData" @update="updateData"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'; // Import the Card component

export default {
  components: {
    Card, // Register the Card component for use
  },
  data() {
    return {
      data: [],
      searchTerm: '',
      name: '',
      email: '',
      devise: '',
      lastGeneratedId: 47,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(item => {
        return (
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.id.toString().includes(this.searchTerm.toLowerCase())
        );
      });
    },
  },
  methods: {
    generateId() {
      this.lastGeneratedId++;
      return this.lastGeneratedId;
    },
    addData() {
      const id = this.generateId();
      this.data.push({ id, name: this.name, email: this.email, devise: this.devise });
      this.updateLocalStorage();
      this.name = '';
      this.email = '';
      this.devise = '';
    },
    updateData(id, key, value) {
   const index = this.data.findIndex(item => item.id === id);
   this.data[index][key] = value;
   this.updateLocalStorage();
   },

    deleteData(id) {
      this.data = this.data.filter(item => item.id !== id);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('crudData', JSON.stringify(this.data));
    },
    populateTable() {
      const localData = localStorage.getItem('crudData');
      this.data = localData ? JSON.parse(localData) : [];
    },
    filterRows() {
      // Implement your filter logic here if needed
    },
  },
  mounted() {
    this.populateTable();
  },
};
</script>
<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start; /* Align cards to the start (left) of the container */
}
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #272727;
    color: #191818;
}
.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h1 {
    text-align: center;
}
form {
    margin-bottom: 20px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

</style>
