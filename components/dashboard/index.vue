<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col s12 m4">
            <div class="card blue darken-3 white-text" @click="getVehicles">
              <div class="card-content valign-wrapper">
                <div class="card-text">
                  <h6>{{matrics.allvehicles}}</h6>
                  <p>Total Vehicle</p>
                </div>
                <div class="card-icon">
                  <i class="material-icons medium valign">pie_chart</i>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m4" @click="getVehicles">
            <div class="card blue darken-3 white-text">
              <div class="card-content valign-wrapper">
                <div class="card-text">
                  <h6>{{matrics.allvehicles}}</h6>
                  <p>Active Vehicles</p>
                </div>
                <div class="card-icon">
                  <i class="material-icons medium valign">check_circle</i>
                </div>
              </div>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="card blue darken-3 white-text" @click="returnEmpty">
              <div class="card-content valign-wrapper">
                <div class="card-text">
                  <h6>{{matrics.expired}}</h6>
                  <p>Expired Vehicles</p>
                </div>
                <div class="card-icon">
                  <i class="material-icons medium valign">build</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <h5>Most Recent Vehicle</h5>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <table class="striped responsive-table">
              <thead class="blue darken-3 white-text">
                <tr>
                  <th>Id</th>
                  <th>Vehicle Owner</th>
                  <th>Vehicle Make</th>
                  <th>Vehicle Model</th>
                  <th>State</th>
                  <th>Plate Number</th>
                  <th>Mv-Reg</th>
                  <th>Date Issued</th>
                  <th>Expiration Date</th>
                </tr>
              </thead>

              <tbody>
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
                <tr
                  v-for="(vehicle,index) in vehicles"
                  :key="index"
                  :to="'/admin/vehicledetails/' + vehicle._id"
                >
                  <td>{{index + 1}}</td>
                  <td>{{vehicle.vehicle_owner_details.name}}</td>
                  <td>{{vehicle.vehicle_information.vehicle_make}}</td>
                  <td>{{vehicle.vehicle_information.vehicle_model}}</td>
                  <td>{{vehicle.vehicle_information.registration_state}}</td>
                  <td>{{vehicle.plate_number}}</td>
                  <td>{{vehicle._id}}</td>
                  <td>{{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}</td>
                  <td>{{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [],
      matrics: {},
      isLoading: false
    }
  },
  methods: {
    returnEmpty() {
      this.vehicles = []
    },
    async getVehicles() {
      this.isLoading = true
      try {
        let vehicle = await this.$http.get('/admin/list-vehicles')
        this.vehicles = vehicle.data.data.reverse()
        console.log(this.vehicles)
        this.isLoading = false
      } catch (err) {
        console.log(err)
        this.isLoading = false
      }
    },
    async getVehicleMatrics() {
      try {
        let matrics = await this.$http.get('/admin/get-vehicle-metrics')
        this.matrics = matrics.data
        console.log(this.matrics)
      } catch (err) {
        console.log(err)
      }
    }
  },
  created() {
    this.getVehicles()
    this.getVehicleMatrics()
  }
}
</script>

<style scoped>
table {
  border-spacing: 0ch !important;
}
</style>