<template>
  <div class="container fluid">
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="background: white !important;">
        <h4 class="hstack gap-3" style="padding: 10px;">Welcome <i class="bi bi-filetype-pdf p-2 ms-auto" style="font-size: 1em;"></i></h4>
        <div  style="display:flex;justify-content: center;">
            <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center border-0" style="background: #afa5d9 !important;width: 270px;color:white ;">
              My balance<br>
             <b style="font-size:26px">12,546 £</b>   
        </div>
        </div>
       
    </div>
    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="background: white !important;">
        <h4 style="padding:10px" class="hstack gap-3">
         My transactions history
         <button type="button" class="btn btn-dark p-2 ms-auto btn-sm"><i class="bi bi-send-plus-fill"></i>&nbsp;&nbsp;New Transaction</button>
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