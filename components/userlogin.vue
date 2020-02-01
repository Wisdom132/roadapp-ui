<template>
  <section>
    <div class="conatainer">
      <div class="row">
        <div class="col s12 m4 l4 offset-l4" style="margin-top:200px;">
          <div id="login-page" class="row">
            <div class="col s12 z-depth-6 card-panel center">
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
              <form class="login-form" @submit.prevent="userLogin">
                <div class="row"></div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">directions_car</i>
                    <input id="plate_number" v-model="login.plate_number" type="text" />
                    <label for="email" data-error="wrong" data-success="right">Plate Number</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">lock_outline</i>
                    <input id="password" v-model="login.password" type="password" />
                    <label for="password">Password</label>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <button class="btn blue darken-4 wave-effect" type="submit">Submit</button>
                  </div>
                </div>
              </form>
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
      login: {
        plate_number: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    async userLogin() {
      this.isLoading = true
      try {
        let response = await this.$http.post('/user/login', this.login)
        if (response.data.message == 'Authentification Successful') {
          this.isLoading = false
          localStorage.setItem('token', response.data.token)
          let vehicle = localStorage.setItem(
            'vehicle',
            JSON.stringify(response.data.vehicle)
          )
          console.log(vehicle)
          this.$router.push({
            path: 'user/basicinfo'
          })
        } else {
          console.log('Wrong Login credentials')
          swal('Opps', 'You cant Login at this Time', 'error')
        }
      } catch (err) {
        this.isLoading = false
        console.log(err)
        swal('Opps', 'You cant Login at this Time', 'error')
      }
    }
  }
}
</script>
