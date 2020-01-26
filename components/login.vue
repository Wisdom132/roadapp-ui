<template>
  <section>
    <div class="conatainer">
      <div class="row">
        <div class="col s12 m4 l4 offset-l4" style="margin-top:200px;">
          <div id="login-page" class="row">
            <div class="col s12 z-depth-6 card-panel">
              <form class="login-form" @submit.prevent="adminLogin">
                <div class="row"></div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">mail_outline</i>
                    <input
                      class="validate"
                      id="email"
                      v-model="login.email"
                      type="email"
                    />
                    <label for="email" data-error="wrong" data-success="right"
                      >Email</label
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">lock_outline</i>
                    <input
                      id="password"
                      v-model="login.password"
                      type="password"
                    />
                    <label for="password">Password</label>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <button class="btn blue darken-4 wave-effect" type="submit">
                      Submit
                    </button>
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
      }
    }
  },
  methods: {
    async adminLogin() {
      try {
        let response = await this.$http.post('/admin/login', this.login)
        if (response.data.message == 'Authentification Successful') {
          console.log(response.data)
          this.$router.push({
            path: '/admin/dashboard'
          })
        } else {
          console.log('You Cant Login')
          swal('Opps', 'You cant Login at this Time', 'error')
        }
      } catch (err) {
        console.log(err)
        swal('Opps', 'You cant Login at this Time', 'error')
      }
    }
  }
}
</script>
