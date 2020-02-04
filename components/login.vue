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
              <form class="login-form" @submit.prevent="adminLogin">
                <div class="row"></div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">mail_outline</i>
                    <input class="validate" id="email" v-model="login.email" type="email" />
                    <label for="email" data-error="wrong" data-success="right">Email</label>
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
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    async adminLogin() {
      this.isLoading = true
      try {
        let response = await this.$http.post('/admin/login', this.login)
        this.isLoading = false
        if (response.data.message == 'Authentification Successful') {
          console.log(response.data)
          this.$router.push({
            path: '/admin/dashboard'
          })
        } else {
          this.isLoading = false
          console.log('You Cant Login')
          swal('Opps', 'Wrong Login Details', 'error')
        }
      } catch (err) {
        this.isLoading = false
        console.log(err)
        swal('Opps', 'Wrong Login Details', 'error')
      }
    }
  }
}
</script>
