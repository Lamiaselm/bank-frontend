<script>
export default {
  name: "ClientCommonInformation",
  data() {
    return {
      firstNameClient: '',
      lastNameClient: '',
      birthDateClient: '',
      nationalityClient: '',
      addressClient: '',
      cityClient: '',
      countryClient: '',
      emailClient: '',
    }
  }
}
</script>

<template>
  <div class="container-fluid p-2 d-flex justify-content-center">
    <div class="card" style="width: 32rem;">
      <div class="card-body">
        <h5 class="card-title fw-bolder">Your information</h5>
        <div class="card-text">
          <div class="mb-3">
            <label for="firstNameClient" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstNameClient" placeholder="John" v-model="firstNameClient">
          </div>
          <div class="mb-3">
            <label for="lastNameClient" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastNameClient" placeholder="Doe" v-model="lastNameClient">
          </div>
          <div class="mb-3">
            <label for="nationalityClient" class="form-label">Nationality</label>
            <input type="text" class="form-control" id="nationalityClient" placeholder="Doe" v-model="nationalityClient">
          </div>
          <div class="mb-3">
            <label for="birthDateClient" class="form-label">Birth date</label>
            <input type="text" class="form-control" id="birthDateClient" placeholder="01/01/2000" v-model="birthDateClient">
          </div>
          <div class="mb-3">
            <label for="addressClient" class="form-label">Address</label>
            <input type="text" class="form-control" id="addressClient" placeholder="18 Rue de la Paix" v-model="addressClient">
          </div>
          <div class="mb-3">
            <label for="cityClient" class="form-label">City</label>
            <input type="text" class="form-control" id="cityClient" placeholder="Bertrange" v-model="cityClient">
          </div>
          <div class="mb-3">
            <label for="countryClient" class="form-label">Country</label>
            <input type="text" class="form-control" id="countryClient" placeholder="Luxembourg" v-model="countryClient">
          </div>
          <div class="mb-3">
            <label for="emailClient" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailClient" placeholder="john.doe@example.com" v-model="emailClient">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
