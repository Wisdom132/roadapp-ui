<template>
  <section>
    <div class="conatainer">
      <div class="row">
        <div class="col s12 m4 l10 offset-l1 mt-5" style="margin-top:80px;">
          <div id="login-page" class="row">
            <div class="col s12 z-depth-6 card-panel">
              <form class="login-form" @submit.prevent="registerNewUser">
                <div class="row">
                  <div class="col s12 center">
                    <h4>Vehicle Owner Details</h4>
                  </div>
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="input-field col l6">
                    <i class="fas fa-user prefix"></i>
                    <input class="validate" id="name" v-model="register.name" type="text" />
                    <label for="name" data-error="wrong" data-success="right">Name</label>
                  </div>
                  <div class="input-field col l6">
                    <i class="fas fa-phone-volume prefix"></i>
                    <input
                      class="validate"
                      id="phone"
                      v-model="register.phone_number"
                      type="number"
                    />
                    <label for="phone" data-error="wrong" data-success="right">Phone</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col l6">
                    <i class="fas fa-map-marker-alt prefix"></i>
                    <input class="validate" id="address" v-model="register.address" type="text" />
                    <label for="address" data-error="wrong" data-success="right">Address</label>
                  </div>
                  <div class="input-field col l3">
                    <i class="fas fa-map-marker-alt prefix"></i>
                    <input class="validate" id="phone" v-model="register.lga" type="text" />
                    <label for="phone" data-error="wrong" data-success="right">LGA</label>
                  </div>

                  <div class="input-field col l3">
                    <i class="fas fa-transgender-alt prefix"></i>
                    <select>
                      <option value disabled selected>Choose gender</option>
                      <option value="male">Male</option>
                      <option value="femalel">Female</option>
                    </select>

                    <label for="gender" data-error="wrong" data-success="right">Gender</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col l6">
                    <i class="fas fa-map-marker-alt prefix"></i>
                    <input class="validate" id="state" v-model="register.state" type="text" />
                    <label for="state" data-error="wrong" data-success="right">State</label>
                  </div>
                  <div class="input-field col l6">
                    <i class="fas fa-map-marker-alt prefix"></i>
                    <input
                      class="validate"
                      id="nationality"
                      v-model="register.nationality"
                      type="text"
                    />
                    <label for="nationality" data-error="wrong" data-success="right">Nationality</label>
                  </div>
                </div>

                <div class="col s12 center">
                  <h4>Vehicle Registration Details</h4>
                </div>
                <div class="row">
                  <div class="input-field col l4">
                    <i class="fas fa-car prefix"></i>
                    <input
                      class="validate"
                      id="vehicleMake"
                      v-model="register.vehicle_make"
                      type="text"
                    />
                    <label for="vehicleMake" data-error="wrong" data-success="right">vehicle Make</label>
                  </div>
                  <div class="input-field col l4">
                    <i class="material-icons prefix">tonality</i>
                    <input
                      class="validate"
                      id="vehicle_model"
                      v-model="register.vehicle_model"
                      type="text"
                    />
                    <label for="vehicle_model" data-error="wrong" data-success="right">Vehicle Model</label>
                  </div>
                  <div class="input-field col l4">
                    <i class="material-icons prefix">trending_up</i>

                    <input
                      class="validate"
                      id="vehicle_production_year"
                      v-model="register.vehicle_production_year"
                      type="text"
                    />
                    <label
                      for="vehicle_production_year"
                      data-error="wrong"
                      data-success="right"
                    >Production Year</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col l4">
                    <i class="material-icons prefix">center_focus_strong</i>
                    <select v-model="register.vehicle_class">
                      <option value disabled selected>Choose Vehicle Class</option>
                      <option value="Commercial">Commercial(Goods only)</option>
                      <option value="Taxi/Car Hire">Taxi/Car Hire</option>
                      <option value="Stage Carriage(8-15 Persons)">Stage Carriage(8-15 Persons)</option>
                      <option
                        value="Stage Carriage(Over 15 Persons)"
                      >Stage Carriage(Over 15 Persons)</option>
                      <option value="Omnibus">Omnibus</option>
                      <option value="Private(car)">Private(car)</option>
                      <option value="Motorcyle/Tricyle">Motorcyle/Tricyle</option>
                      <option value="Tractor/Equipment">Tractor / Equipment</option>
                    </select>
                    <label for="vehicle_class" data-error="wrong" data-success="right">Vehicle Class</label>
                  </div>
                  <div class="input-field col l4">
                    <i class="material-icons prefix">transform</i>
                    <input
                      class="validate"
                      id="vehicle_engine_number"
                      v-model="register.vehicle_engine_number"
                      type="text"
                    />
                    <label
                      for="vehicle_engine_number"
                      data-error="wrong"
                      data-success="right"
                    >Engine Number</label>
                  </div>
                  <div class="input-field col l4">
                    <i class="fas fa-tint prefix"></i>
                    <input
                      class="validate"
                      id="vehicle_color"
                      v-model="register.vehicle_color"
                      type="text"
                    />
                    <label for="vehicle_color" data-error="wrong" data-success="right">Vehicle Color</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col l4">
                    <i class="fas fa-users-class prefix"></i>
                    <input
                      class="validate"
                      id="chassic_number"
                      v-model="register.chassic_number"
                      type="number"
                    />
                    <label
                      for="chassic_number"
                      data-error="wrong"
                      data-success="right"
                    >Chassic Number</label>
                  </div>
                  <div class="input-field col l4">
                    <i class="fas fa-map-marker-alt prefix"></i>
                    <select
                      v-model="register.registration_lga"
                      @change="state(register.registration_lga)"
                    >
                      <option value disabled selected>Choose State</option>
                      <option value="AkwaIbom">Akwa Ibom</option>
                      <option value="Abuja">Abuja</option>
                      <option value="CrossRiver">Cross River</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Lagos">Lagos</option>
                    </select>
                    <!-- <input
                      class="validate"
                      id="registration_state"
                      v-model="register.registration_state"
                      type="text"
                    />-->
                    <label
                      for="registration_state"
                      data-error="wrong"
                      data-success="right"
                    >Registration State</label>
                  </div>
                  <div class="input-field col l4">
                    <i class="fas fa-map-marker-alt prefix"></i>

                    <select v-model="register.registration_lga" v-if="AkwaIbom">
                      <option value disabled selected>Choose LGA</option>
                      <option value="Cal">Calabar Municipal</option>
                      <option value="KMM">Ikom</option>
                      <option value="BRA">Obubra</option>
                      <option value="UDU">Obudu</option>
                    </select>

                    <select v-model="register.registration_lga" v-if="lag">
                      <option value disabled selected>Choose LGA</option>
                      <option value="Cal">Calabar Municipal</option>
                      <option value="KMM">Ikom</option>
                      <option value="BRA">Obubra</option>
                      <option value="UDU">Obudu</option>
                    </select>

                    <select v-model="register.registration_lga" v-if="eki">
                      <option value disabled selected>Choose LGA</option>
                      <option value="Cal">Calabar Municipal</option>
                      <option value="KMM">Ikom</option>
                      <option value="BRA">Obubra</option>
                      <option value="UDU">Obudu</option>
                    </select>

                    <label
                      for="registration_lga"
                      data-error="wrong"
                      data-success="right"
                    >Registration lGA</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col l6">
                    <i class="fas fa-key prefix"></i>
                    <input
                      class="validate"
                      id="password"
                      v-model="register.password"
                      type="password"
                    />
                    <label for="password" data-error="wrong" data-success="right">Password</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12">
                    <button class="btn blue darken-3" type="submit">Submit</button>
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
      AkwaIbom: false,
      eki: false,
      lag: false,
      register: {
        name: '',
        phone_number: '',
        address: '',
        gender: '',
        state: '',
        lga: '',
        nationality: '',

        vehicle_make: '',
        vehicle_model: '',
        vehicle_production_year: '',
        vehicle_class: '',
        vehicle_engine_number: '',
        vehicle_color: '',
        chassic_number: '',
        registration_state: '',
        registration_lga: '',
        MV_reg: '',
        password: ''
      }
    }
  },
  mounted() {
    if (process.client) {
      // document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select')
      var instances = M.FormSelect.init(elems)
      // })
    }
  },
  methods: {
    state(id) {
      if (id == 'AkwaIbom') {
        this.AkwaIbom = true
      }
    },

    async registerNewUser() {
      try {
        let response = await this.$http.post(
          '/admin/registervehicle',
          this.register
        )
        this.register = {}
        swal(
          'Success',
          `Hello "${response.data.data.vehicle_owner_details.name}" Your Plate number is "${response.data.data.plate_number}"`,
          'success'
        )
      } catch (err) {
        swal('Error', 'Something Went Wrong', 'error')
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
.prefix {
  color: #1d3c6e !important;
}
</style>
