<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <h4>Vehicle Basic Info</h4>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <!-- <img :src="user.qrcode" /> -->
            </div>
            <div class="card-content">
              <pre>{{ vehicle }}</pre>
              <!-- <span class="card-title">{{ user.name }}</span>
              <p>{{ user.email }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
  data() {
    return {
      vehicle: {}
    }
  },
  methods: {
    getUserDetails() {
      if (process.client) {
        this.vehicle = localStorage.getItem('vehicle')
      }
    }
  },

  created() {
    this.getUserDetails()
  }
}
</script>
