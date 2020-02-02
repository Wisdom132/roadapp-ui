<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h5>Verify Vehicle Particulars</h5>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m5 l5">
          <div id="login-page" class="row">
            <div class="col s12 z-depth-6 card-panel">
              <form @submit.prevent="getDetailsUsingPlateNo(plate_number)">
                <div class="row">
                  <div class="conatiner">
                    <h6 style="text-align:center">Search vehicle by plate Number</h6>
                    <hr
                      style="width:60px;text-align:left;background-color:blue;height:2px;border:0px;"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input v-model="plate_number" class="validate" type="text" />
                    <label for="email">
                      <i class="fas fa-car"></i>plate number
                    </label>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12" style="text-align:center">
                    <button class="btn blue darken-4 wave-effect" type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col s12 m5 l5 offset-l1">
          <h5>Verify Vehicle With QR Code</h5>
          <button @click="initScanner" class="btn blue darken-4">{{ status }}</button>
          <div v-if="qrscanner">
            <p class="error">{{ error }}</p>

            <p class="decode-result">
              Last result:
              <b>{{ plate_number }}</b>
            </p>
            <qrcode-stream @decode="onDecode" @init="onInit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'Activate Scanner',
      plate_number: null,
      qrscanner: false,
      result: '',
      error: ''
    }
  },
  methods: {
    async getDetailsUsingPlateNo(plate_number) {
      try {
        let response = await this.$http.post('/admin/get-by-platenumber', {
          plate_number: plate_number
        })
        if (response.data.data == null) {
          swal('Opps', 'User Not Found', 'error')
        }
        let userId = response.data.data._id
        this.$router.push({
          path: `/admin/vehicledetails/${userId}`
        })
      } catch (err) {
        console.log(err)
      }
    },

    initScanner() {
      this.qrscanner = !this.qrscanner
      if (this.qrscanner) {
        this.status = 'Deactivate Scanner'
      } else {
        this.status = 'Activate Scanner'
      }
    },
    onDecode(plate_number) {
      if (plate_number) {
        this.getDetailsUsingPlateNo(plate_number)
      }
    },
    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      }
    }
  }
}
</script>
<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
