<script>
export default {
  name: "HeaderComponent",
  props: {
    from: String
  }
}
</script>

<template>
  <div class="container-fluid text-center">
    <div class="row background p-2">
      <div class="col-2">
        <img src="../assets/bank-logo.svg" class="img-fluid" alt="logo" width="70">
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        My BANK
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center" v-if="from==='home'">
        <router-link to="/onboarding" class="p-1 mx-1">Sign up</router-link>
        <router-link to="/login" class="p-1 mx-1">Sign in</router-link>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center" v-if="from==='onboarding'">
        <router-link to="/">Back</router-link>
      </div>

    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #DAD3E0;
}
</style>
