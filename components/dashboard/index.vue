<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col s12 m3">
            <div class="card blue darken-3 white-text">
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
          <div class="col s12 m3">
            <div class="card blue darken-3 white-text">
              <div class="card-content valign-wrapper">
                <div class="card-text">
                  <h6>0</h6>
                  <p>Active Vehicles</p>
                </div>
                <div class="card-icon">
                  <i class="material-icons medium valign">check_circle</i>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="card blue darken-3 white-text">
              <div class="card-content valign-wrapper">
                <div class="card-text">
                  <h6>{{matrics.almostexpired}}</h6>
                  <p>Almost Expired</p>
                </div>
                <div class="card-icon">
                  <i class="material-icons medium valign">build</i>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m3">
            <div class="card blue darken-3 white-text">
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
                  <th>Phone Number</th>
                  <th>Plate Number</th>
                  <th>Mv-Reg</th>
                  <th>Date Issued</th>
                  <th>Expiration Date</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(vehicle,index) in vehicles"
                  :key="index"
                  :to="'/admin/vehicledetails/' + vehicle._id"
                >
                  <td>{{index + 1}}</td>
                  <td>{{vehicle.vehicle_owner_details.name}}</td>
                  <td>{{vehicle.vehicle_owner_details.phone_number}}</td>
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
      matrics: {}
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