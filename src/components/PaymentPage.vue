<script>
import PaymentForm from "./PaymentForm.vue";
export default {
    name: "PaymentPage",
    components: {PaymentForm}
}
</script>

<template>
    <div>
        <h1>Payment page</h1>
    </div>
    <div style="display: flex; justify-content: center;">
      <div>
        <PaymentForm />
      </div>
    </div>
</template>
