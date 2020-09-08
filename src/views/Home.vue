<template>
  <div>
    <div class="page-title">
      <h3>Подбор</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="collumn">
      <InputData 
        :rates="currency.rates"
      />
    </div>
  </div>
</template>

<script>
import InputData from '@/components/InputData'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  name: 'home',
  methods: {
    async refresh() {
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
   this.loading = false
    }
  },
  data: () =>({
    loading: true,
    currency: null
  }),
  async mounted() {
   this.currency = await this.$store.dispatch('fetchCurrency')
   this.loading = false
  },
  components: {
    InputData, HomeCurrency
  }
}
</script>
