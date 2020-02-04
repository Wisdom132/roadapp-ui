<template>
  <section>
    <!-- loader starts here  -->
    <div class="preloader-wrapper big active" v-if="isLoading">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <!-- loader ends here  -->
    <div class="container" v-else>
      <div class="row">
        <div class="col" v-for="(vehicle, index) in vehicles" :key="index">
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
                    <p>
                      <b>State:</b>
                      {{vehicle.vehicle_information.registration_state}}
                    </p>
                  </li>
                  <li>
                    <b>Date Issued:</b>
                    <br />
                    {{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}
                  </li>
                  <li>
                    <strong>Expiration Date:</strong>
                    <br />
                    {{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}
                  </li>
                </ul>
              </div>
              <div class="card-action">
                <nuxt-link :to="'/admin/vehicledetails/' + vehicle._id">View Particulars</nuxt-link>
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
      vehicles: [],
      isLoading: false
    }
  },
  methods: {
    async getVehicles() {
      this.isLoading = true
      try {
        let vehicle = await this.$http.get('/admin/list-vehicles')
        this.vehicles = vehicle.data.data
        this.isLoading = false
        console.log(this.vehicles)
      } catch (err) {
        this.isLoading = false
        console.log(err)
      }
    }
  },
  created() {
    this.getVehicles()
  }
}
</script>
