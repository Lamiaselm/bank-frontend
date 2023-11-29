<template>
  <div>
    <div class="container">
      <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4">
          <div class="card" >
          <div class="card-body">
            <h5 class="card-title hstack gap-3">Transactions<i class="bi bi-cash-stack p-2 ms-auto" style="font-size: 1.5em;color:#a595e3;"></i></h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">1000</h6>
          </div>
        </div>
        </div>
        <div class="col-md-4">
          <div class="card" >
          <div class="card-body">
            <h5 class="card-title hstack gap-3">Clients<i class="bi bi-people p-2 ms-auto" style="font-size: 1.5em;color:#a595e3;"></i></h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">700</h6>
          </div>
        </div>
        </div>
        <div class="col-md-4">
          <div class="card" >
          <div class="card-body">
            <h5 class="card-title hstack gap-3">Market<i class="bi bi-graph-up-arrow p-2 ms-auto" style="font-size: 1.5em;color:#a595e3;"></i></h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">1000</h6>
          </div>
        </div>
        </div>
      </div>
      <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="background: white !important;">
        <h4 style="padding:10px">
        <small class="text-body-secondary" >Transactions history</small>
        </h4>
      <input
        v-model="search"
        class="form-control mb-2"
        type="text"
        placeholder="Search"
      />
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Transaction Name</th>
            <th>Client</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.client }}</td>
            <td>{{ user.date }}</td>
            <td>{{ user.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
       


  </div>
</template>
<script>
export default {
    data() {
      return {
        data: [
        { id: 1, name: "Transaction Euro", client: "John Doe",date:'2023-11-20',amount:"8000" },
        { id: 2, name: "Transaction Euro", client: "John Doe",date:'2023-11-20',amount:"8000" },

        // Add more users as needed
      ],
        search: '',
      };
    },
    computed: {
      filteredUsers() {
        return this.data.filter((user) =>
          user.date.toLowerCase().includes(this.search.toLowerCase())
        );
      },
    },
    mounted(){
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
