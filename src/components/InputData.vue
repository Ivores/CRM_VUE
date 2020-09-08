<template>
    <div class="col s12 m6 l4">
        <div class="card light-blue auth-card">
          <div class="card-content white-text">
            <h3 class="card-title">Параметры подбора:</h3>
          </div>
          <div class="input-field col s12">
            <form method="post">
              <select name="ventType" id="ventType">
                <option value="Radial"> Радиальный </option>
                <option value="Axial"> Осевой </option>
                <option value="RooаRad"> Крышный радиальный </option>
                <option value="RoofAx"> Крышный осевой </option>
                <option value="TDM"> Тягодутьевая машина </option>
              </select>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props: ['rates'],
    data: ()=> ({
      currencies:['RUB','USD','EUR']
    }),
    computed: {
      base(){
        return this.$store.getters.info.bill / (this.rates['RUB']/this.rates['EUR'])
      }
    },
    methods: {
      getCurrency (currency){
        return Math.floor(this.base*this.rates[currency])
      }
    }
}
</script>