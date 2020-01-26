<template>
  <section>
    <div class="container" v-if="details">
      <div class="row">
        <div class="col">
          <h4>User Details</h4>
        </div>
      </div>
      <div class="row">
        <div class="col s6">
          <div class="card z-depth-1">
            <div class="container">
              <div class="row">
                <div class="col s12 center">
                  <h5>Drivers details</h5>
                </div>
              </div>
              <div class="row">
                <div class="col s3">
                  <img :src="details.qrcode" alt="" />
                </div>
                <div class="col s8">
                  <dl>
                    <li>Name:{{ details.vehicle_owner_details.name }}</li>
                    <li>
                      Phone:{{ details.vehicle_owner_details.phone_number }}
                    </li>
                    <li>State:{{ details.vehicle_owner_details.state }}</li>
                    <li>
                      Nationality:{{
                        details.vehicle_owner_details.nationality
                      }}
                    </li>
                  </dl>
                </div>
              </div>

              <div class="row">
                <button
                  style="margin-bottom:10px;"
                  @click="initModal"
                  class="btn blue darken-4 modal-trigger"
                >
                  {{ modal ? 'Cancle payment' : 'Make Payment' }}
                </button>

                <div v-if="modal">
                  <div class="card z-depth-3">
                    <div class="card-content white-text">
                      <span class="card-title">Card Title</span>
                      <form>
                        <div class="row">
                          <div class="input-field col s12">
                            <input
                              id="Email"
                              v-model="useremail"
                              type="text"
                              class="validate"
                            />
                            <label for="Email">Email</label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="card-action">
                      <paystack
                        class="btn blue darken-4"
                        :amount="amount"
                        :email="useremail"
                        :paystackkey="paystackkey"
                        :reference="reference"
                        :callback="callback"
                        :close="close"
                        :embed="false"
                      >
                        Proceed Payment
                      </paystack>
                    </div>
                  </div>
                </div>
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
      paystackkey: 'pk_test_ab67763762750ac895df7de2857a3dae5cc44c9f', //paystack public key
      email: 'foobar@example.com', // Customer email
      amount: 1000000, // in kobo
      details: null,
      modal: false,
      useremail: ''
    }
  },
  methods: {
    initModal() {
      this.modal = !this.modal
    },

    async callback(response) {
      try {
        let response = await this.$http.put(
          `/admin/renew-vehicle/${this.$route.params.id}`,
          {
            dateIssued: new Date(
              new Date().setFullYear(new Date().getFullYear())
            ),
            expiryDate: new Date(
              new Date().setFullYear(new Date().getFullYear() + 1)
            ),
            year: new Date(new Date().getYear() + 1)
          }
        )

        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },

    close() {
      console.log('Payment closed')
    },
    async getUsersDetails(id) {
      try {
        let details = await this.$http.get(`/admin/vehicle/${id}`)
        this.details = details.data.details.vehicleDetails
        console.log(this.details)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    reference() {
      let text = ''
      let possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return text
    }
  },
  created() {
    this.getUsersDetails(this.$route.params.id)
  }
}
</script>
<style scoped>
.card {
  height: auto;
}
ul li {
  list-style-type: none;
}
</style>
