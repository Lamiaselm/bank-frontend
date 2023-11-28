<script>
export default {
  name: "ClientCommonInformation"
}
</script>

<template>
  <div class="container-fluid">
    <div class="card" style="width: 32rem;">
      <div class="card-body">
        <h5 class="card-title fw-bolder">Your information</h5>
        <div class="card-text">
          <div class="mb-3">
            <label for="firstNameClient" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstNameClient" placeholder="John">
          </div>
          <div class="mb-3">
            <label for="lastNameClient" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastNameClient" placeholder="Doe">
          </div>
          <div class="mb-3">
            <label for="emailClient" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailClient" placeholder="john.doe@example.com">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
