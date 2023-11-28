<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ClientCommonInformation from "@/components/ClientCommonInformation.vue";
import ClientMIFIQuestionnaire from "@/components/ClientMIFIQuestionnaire.vue";

export default {
  name: "ClientOnboarding",
  components: {ClientMIFIQuestionnaire, ClientCommonInformation, HeaderComponent},
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
      },
      MIFIDData: {
        riskLevel: 'low',
        actionKnowledge: 'no'
      }
    }
  },
  methods: {
    updateClientData(data) {
      this.clientData = data
//      console.log(JSON.stringify(this.clientData))
    },
    updateMIFIDData(data) {
      this.MIFIDData = data
    }
  }
}
</script>

<template>
  <div>
    <HeaderComponent from="onboarding"/>
    <div class="container-fluid d-flex justify-content-center p-2">
      <h1>Client Onboarding Form</h1>
    </div>
    <ClientCommonInformation v-on:updateClientData="updateClientData"/>
    <ClientMIFIQuestionnaire v-on:updateMIFIDData="updateMIFIDData"/>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary">Save your information</button>
    </div>
  </div>
</template>

<style scoped>

</style>
