<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ClientCommonInformation from "@/components/ClientCommonInformation.vue";
import ClientMIFIQuestionnaire from "@/components/ClientMIFIQuestionnaire.vue";

export default {
  name: "ClientOnboarding",
  components: {ClientMIFIQuestionnaire, ClientCommonInformation, HeaderComponent}
}
</script>

<template>
  <div>
    <HeaderComponent from="onboarding"/>
    <div class="container-fluid d-flex justify-content-center p-2">
      <h1>Welcome to Client Onboarding</h1>
    </div>
    <ClientCommonInformation/>
    <ClientMIFIQuestionnaire/>
  </div>
</template>

<style scoped>

</style>
