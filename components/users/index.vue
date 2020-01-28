<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col s12 m4 l4" v-for="(vehicle, index) in vehicles" :key="index">
          <div class="card horizontal">
            <div class="card-image">
              <img :src="vehicle.qrcode" class="responsive-img" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <ul>
                  <li>
                    <h5>
                      <b>{{ vehicle.plate_number }}</b>
                    </h5>
                  </li>
                  <li>
                    Date Issued:
                    <br />
                    {{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}
                  </li>
                  <li>
                    Expiration Date:
                    <br />
                    {{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}
                  </li>
                </ul>
              </div>
              <div class="card-action">
                <nuxt-link :to="'/admin/vehicledetails/' + vehicle._id">Details</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      vehicles: []
    }
  },
  methods: {
    async getVehicles() {
      try {
        let vehicle = await this.$http.get('/admin/list-vehicles')
        this.vehicles = vehicle.data.data
        console.log(this.vehicles)
      } catch (err) {
        console.log(err)
      }
    }
  },
  created() {
    this.getVehicles()
  }
}
</script>
