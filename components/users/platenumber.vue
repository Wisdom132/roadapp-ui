<template>
  <section v-if="details">
    <div class="container">
      <div class="preloader-wrapper big active" v-if="loading">
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
      <div class="row" style="margin-top:100px;">
        <div class="col s6">
          <div class="card" style="padding:20px;width:auto;text-align:center">
            <div class="row">
              <div class="col s3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm1Z2TzWOz6ww5nHdcU7_CEKM3uuQfJ6e4OFyLvnVyYGi1OZ64"
                  class="data"
                />
              </div>
              <div class="col s6">
                <h4>{{details.vehicle_information.registration_state}}</h4>
              </div>
              <div class="col s3">
                <img :src="details.qrcode" class="data" />
              </div>
            </div>

            <h1 style="text-transform:uppercase;font-size:90px">{{details.plate_number}}</h1>
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
      details: null,
      loading: true
    }
  },
  methods: {
    async getDetails(id) {
      this.loading = true
      try {
        let response = await this.$http.post(`/admin/get-by-platenumber`, {
          plate_number: id
        })
        this.details = response.data.data
        this.loading = false
        console.log(this.details)
      } catch (err) {
        this.loading = false
        console.log(err)
      }
    }
  },
  created() {
    this.getDetails(this.$route.params.id)
  }
}
</script>
<style>
.data {
  height: 100px;
  width: 100px;
}
</style>