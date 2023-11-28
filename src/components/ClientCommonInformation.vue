<script>
export default {
  name: "ClientCommonInformation",
  data() {
    return {
      clientData: {
        firstNameClient: '',
        lastNameClient: '',
        birthDateClient: '',
        nationalityClient: '',
        addressClient: '',
        cityClient: '',
        countryClient: '',
        emailClient: ''
      }
    }
  },
  methods: {
    updateClientData() {
      this.$emit('updateClientData', this.clientData)
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
            <input type="text" class="form-control" id="firstNameClient" placeholder="John" v-model="clientData.firstNameClient" @input="updateClientData">
          </div>
          <div class="mb-3">
            <label for="lastNameClient" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastNameClient" placeholder="Doe" v-model="clientData.lastNameClient" @input="updateClientData">
          </div>
          <div class="mb-3">
            <label for="nationalityClient" class="form-label">Nationality</label>
            <input type="text" class="form-control" id="nationalityClient" placeholder="Doe" v-model="clientData.nationalityClient" @input="updateClientData">
          </div>
          <div class="mb-3">
            <label for="birthDateClient" class="form-label">Birth date</label>
            <input type="text" class="form-control" id="birthDateClient" placeholder="01/01/2000" v-model="clientData.birthDateClient" @input="updateClientData">
          </div>
          <div class="mb-3">
            <label for="addressClient" class="form-label">Address</label>
            <input type="text" class="form-control" id="addressClient" placeholder="18 Rue de la Paix" v-model="clientData.addressClient" @input="updateClientData">
          </div>
          <div class="mb-3">
            <label for="cityClient" class="form-label">City</label>
            <input type="text" class="form-control" id="cityClient" placeholder="Bertrange" v-model="clientData.cityClient" @input="updateClientData">
          </div>
          <div class="mb-3">
            <label for="countryClient" class="form-label">Country</label>
            <input type="text" class="form-control" id="countryClient" placeholder="Luxembourg" v-model="clientData.countryClient" @input="updateClientData">
          </div>
          <div class="mb-3">
            <label for="emailClient" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailClient" placeholder="john.doe@example.com" v-model="clientData.emailClient" @input="updateClientData">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
