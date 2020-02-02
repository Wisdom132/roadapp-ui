<template>
  <div>
    <section v-show="display">
      <div class="container">
        <div class="card" style="padding:10px">
          <form class="login-form" v-if="register">
            <div class="row">
              <div class="col s12 center">
                <h4 style>Vehicle Owner Details</h4>
              </div>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="input-field col l6 s12">
                <i class="fas fa-user prefix"></i>
                <input
                  class="validate"
                  id="name"
                  v-model="register.vehicle_owner_details.name"
                  type="text"
                  required
                />
                <label for="name" data-error="wrong" data-success="right">Name</label>
              </div>
              <div class="input-field col l6 s12">
                <i class="fas fa-phone-volume prefix"></i>
                <input
                  class="validate"
                  id="phone"
                  v-model="register.vehicle_owner_details.phone_number"
                  type="number"
                  required
                />
                <label for="phone" data-error="wrong" data-success="right">Phone</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col l6 s12">
                <i class="fas fa-map-marker-alt prefix"></i>
                <input
                  class="validate"
                  id="address"
                  v-model="register.vehicle_owner_details.address"
                  type="text"
                  required
                />
                <label for="address" data-error="wrong" data-success="right">Address</label>
              </div>
              <div class="input-field col l3 s12">
                <i class="fas fa-map-marker-alt prefix"></i>
                <input
                  class="validate"
                  id="phone"
                  v-model="register.vehicle_owner_details.lga"
                  type="text"
                  required
                />
                <label for="phone" data-error="wrong" data-success="right">LGA</label>
              </div>

              <div class="input-field col l3 s12">
                <i class="fas fa-transgender-alt prefix"></i>
                <select v-model="register.vehicle_owner_details.gender">
                  <option value disabled selected>Choose gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <label for="gender" data-error="wrong" data-success="right">Gender</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col l6 s12">
                <i class="fas fa-map-marker-alt prefix"></i>
                <input
                  class="validate"
                  id="state"
                  v-model="register.vehicle_owner_details.state"
                  type="text"
                  required
                />
                <label for="state" data-error="wrong" data-success="right">State</label>
              </div>
              <div class="input-field col l6 s12">
                <i class="fas fa-map-marker-alt prefix"></i>
                <input
                  class="validate"
                  id="nationality"
                  v-model="register.vehicle_owner_details.nationality"
                  type="text"
                  required
                />
                <label for="nationality" data-error="wrong" data-success="right">Nationality</label>
              </div>
            </div>

            <div class="col s12 center">
              <h4>Vehicle Registration Details</h4>
            </div>
            <div class="row">
              <div class="input-field col l4 s12">
                <i class="fas fa-car prefix"></i>
                <input
                  class="validate"
                  id="vehicleMake"
                  v-model="register.vehicle_information.vehicle_make"
                  type="text"
                  required
                />
                <label for="vehicleMake" data-error="wrong" data-success="right">vehicle Make</label>
              </div>
              <div class="input-field col l4 s12">
                <i class="material-icons prefix">tonality</i>
                <input
                  class="validate"
                  id="vehicle_model"
                  v-model="register.vehicle_information.vehicle_model"
                  type="text"
                  required
                />
                <label for="vehicle_model" data-error="wrong" data-success="right">Vehicle Model</label>
              </div>
              <div class="input-field col l4 s12">
                <i class="material-icons prefix">trending_up</i>

                <input
                  class="validate"
                  id="vehicle_production_year"
                  v-model="register.vehicle_information.vehicle_production_year"
                  type="text"
                  required
                />
                <label
                  for="vehicle_production_year"
                  data-error="wrong"
                  data-success="right"
                >Production Year</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col l4 s12">
                <i class="material-icons prefix">center_focus_strong</i>
                <select v-model="register.vehicle_information.vehicle_class">
                  <option value disabled selected>Choose Vehicle Class</option>
                  <option value="Commercial">Commercial(Goods only)</option>
                  <option value="Taxi/Car Hire">Taxi/Car Hire</option>
                  <option value="Stage Carriage(8-15 Persons)">Stage Carriage(8-15 Persons)</option>
                  <option value="Stage Carriage(Over 15 Persons)">Stage Carriage(Over 15 Persons)</option>
                  <option value="Omnibus">Omnibus</option>
                  <option value="Private(car)">Private(car)</option>
                  <option value="Motorcyle/Tricyle">Motorcyle/Tricyle</option>
                  <option value="Tractor/Equipment">Tractor / Equipment</option>
                </select>
                <label for="vehicle_class" data-error="wrong" data-success="right">Vehicle Class</label>
              </div>
              <div class="input-field col l4 s12">
                <i class="material-icons prefix">transform</i>
                <input
                  class="validate"
                  id="vehicle_engine_number"
                  v-model="register.vehicle_information.vehicle_engine_number"
                  type="text"
                  required
                />
                <label
                  for="vehicle_engine_number"
                  data-error="wrong"
                  data-success="right"
                >Engine Number</label>
              </div>
              <div class="input-field col l4 s12">
                <i class="fas fa-tint prefix"></i>
                <input
                  class="validate"
                  id="vehicle_color"
                  v-model="register.vehicle_information.vehicle_color"
                  type="text"
                  required
                />
                <label for="vehicle_color" data-error="wrong" data-success="right">Vehicle Color</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col l4 s12">
                <i class="fas fa-sort-numeric-up-alt prefix"></i>
                <input
                  class="validate"
                  id="chassic_number"
                  v-model="register.vehicle_information.chassic_number"
                  type="number"
                />
                <label for="chassic_number" data-error="wrong" data-success="right">Chassic Number</label>
              </div>
              <div class="input-field col l4 s12">
                <i class="fas fa-map-marker-alt prefix"></i>
                <select
                  v-model="register.vehicle_information.registration_state"
                  @change="state(register.registration_state)"
                >
                  <option value disabled selected>Choose State</option>
                  <option value="AkwaIbom">Akwa Ibom</option>
                  <option value="Abuja">Abuja</option>
                  <option value="CrossRiver">Cross River</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Lagos">Lagos</option>
                </select>

                <label
                  for="registration_state"
                  data-error="wrong"
                  data-success="right"
                >Registration State</label>
              </div>
              <div class="input-field col l4 s12">
                <i class="fas fa-map-marker-alt prefix"></i>
                <div v-show="crossriver">
                  <select v-model="register.vehicle_information.registration_lga">
                    <option value disabled selected>Choose LGA</option>
                    <option value="Cal">Calabar Municipal</option>
                    <option value="KMM">Ikom</option>
                    <option value="BRA">Obubra</option>
                    <option value="UDU">Obudu</option>
                  </select>
                </div>

                <div v-show="lagos">
                  <select v-model="register.vehicle_information.registration_lga">
                    <option value disabled selected>Choose LGA</option>
                    <option value="LSR">Surulere</option>
                    <option value="LSD">Osohi</option>
                    <option value="APP">Apapa</option>
                    <option value="JJJ">Ojo</option>
                  </select>
                </div>

                <div v-show="akwaibom">
                  <select v-model="register.vehicle_information.registration_lga">
                    <option value disabled selected>Choose LGA</option>
                    <option value="ABK">Abak</option>
                    <option value="ABT">Onna</option>
                    <option value="AED">Ekpe Atai</option>
                    <option value="AEE">Etim Ekpo</option>
                  </select>
                </div>

                <div v-show="ekiti">
                  <select v-model="register.vehicle_information.registration_lga">
                    <option value disabled selected>Choose LGA</option>
                    <option value="KER">Ikere Ekiti</option>
                    <option value="AMK">Aramoko Ekiti</option>
                    <option value="EFY">Efon Alya</option>
                    <option value="KLE">Ikole Ekiti</option>
                  </select>
                </div>
                <div v-show="abuja">
                  <select v-model="register.vehicle_information.registration_lga">
                    <option value disabled selected>Choose LGA</option>
                    <option value="RSH">Karshi Area Councle</option>
                    <option value="RBC">Rubuchi Admin councle</option>
                    <option value="AWL">Kwali Area Councle</option>
                    <option value="ABC">Abuja municipal</option>
                  </select>
                </div>

                <label
                  for="registration_lga"
                  data-error="wrong"
                  data-success="right"
                >Registration lGA</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col l6 s12">
                <i class="fas fa-key prefix"></i>
                <select v-model="register.vehicle_information.insurance">
                  <option value disabled selected>Insurance Agency</option>
                  <option value="Anchor Insurance Ltd">Anchor Insurance Ltd</option>
                  <option value="Cornerstone Insurance Plc">Cornerstone Insurance Plc</option>
                </select>
                <label for="insurance" data-error="wrong" data-success="right">Insurance</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <button class="btn" @click.prevent="initModal">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- </div>
    </div>-->
    <!-- update  -->
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
    <section v-if="vehicle">
      <div class="container">
        <nav class="nav-extended blue darken-3" style="margin-top:20px;">
          <div class="container">
            <div class="nav-wrapper">
              <a class="brand-logo">
                <h6>{{vehicle.vehicle_owner_details.name}}</h6>
              </a>
              <ul class="right hide-on-med-and-down">
                <li>
                  <a>{{vehicle.vehicle_information.vehicle_make}}</a>
                </li>
                <li>
                  <a>{{vehicle.vehicle_information.vehicle_model}}</a>
                </li>
                <li>
                  <a>{{vehicle.vehicle_information.vehicle_production_year}}</a>
                </li>
                <li>
                  <a>{{vehicle.vehicle_information.vehicle_color}}</a>
                </li>
                <li>
                  <button
                    data-target="modal1"
                    class="btn modal-trigger"
                    @click="initEdit(vehicle)"
                  >{{display?'Cancel Update':'Edit'}}</button>
                </li>
              </ul>
            </div>
            <div class="nav-wrapper">
              <div class="nav-content">
                <span class="nav-title" style="margin-top:20px">{{vehicle.plate_number}}</span>
                (
                <span>{{vehicle.vehicle_information.registration_state}}</span>)
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <div class="card" style="padding:10px">
              <div class="row">
                <div class="col s12 center">
                  <img
                    src="/images/lagos.jpeg"
                    v-if="vehicle.vehicle_information.registration_state == 'Lagos'"
                    alt
                    class="responsive-img"
                  />
                  <img
                    src="/images/abuja.jpeg"
                    v-if="vehicle.vehicle_information.registration_state == 'Abuja'"
                    alt
                    class="responsive-img"
                  />
                  <img
                    src="/images/cross.jpeg"
                    v-if="vehicle.vehicle_information.registration_state == 'CrossRiver'"
                    alt
                    class="responsive-img"
                  />
                  <img
                    src="/images/ekiti.jpeg"
                    v-if="vehicle.vehicle_information.registration_state == 'Ekiti'"
                    alt
                    class="responsive-img"
                  />
                  <img
                    src="/images/aks.jpeg"
                    v-if="vehicle.vehicle_information.registration_state == 'Akwa Ibom'"
                    alt
                    class="responsive-img"
                  />

                  <h6 style="text-transform:uppercase">
                    <b>GOVERNMENT OF {{vehicle.vehicle_information.registration_state}} STATE</b>
                  </h6>
                  <p>Motor Vehicle Registration(MV-REG)</p>
                </div>
              </div>
              <ul class="collection">
                <li class="collection-item">
                  Issued
                  <br />
                  {{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">
                  Expired
                  <br />
                  {{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}
                </li>

                <li class="collection-item">
                  Engin No:
                  <br />
                  {{vehicle.vehicle_information.vehicle_engine_number}}
                </li>
                <li class="collection-item">
                  Chassis No:
                  <br />
                  {{vehicle.vehicle_information.chassic_number}}
                </li>
                <li class="collection-item">
                  MV Reg:
                  <br />
                  {{vehicle._id}}
                </li>
                <li class="collection-item">
                  Fee:
                  <br />
                  <span class="new badge" data-badge-caption="Cleared"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col l6 s12">
            <div class="card" style="padding:10px">
              <div class="row">
                <div class="col s12 center">
                  <img
                    src="data:image/jpeg;base64,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"
                    class="responsive-img"
                    alt
                  />
                  <h6 style="text-transform:uppercase">
                    <b>Federal Republic Of Nigeria</b>
                  </h6>
                  <p>NATIONAL CERTIFICATE OF ROADWORTHINESS</p>
                  <p>AKWA IBOM STATE</p>
                  <i>Issued Under Regulations 31(2) Of the Road Traffic Regulations</i>
                </div>
              </div>
              <ul class="collection">
                <li class="collection-item">
                  Issued
                  <br />
                  {{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">
                  Expired
                  <br />
                  {{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">
                  Class:
                  <br />
                  {{vehicle.vehicle_information.vehicle_class}}
                </li>
                <li class="collection-item">
                  Fee:
                  <span class="new badge" data-badge-caption="Cleared"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <div class="card" style="padding:10px">
              <div class="row">
                <div class="col s12 center">
                  <img
                    src="data:image/png;base64,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"
                    class="responsive-img"
                    alt
                  />
                  <h6 style="text-transform:uppercase">
                    <b>THE NIGERIAN POLICE FORCE</b>
                  </h6>
                  <p style="text-transform:uppercse">Change Of Ownership/Engine/Chassis No</p>
                </div>
              </div>
              <ul class="collection">
                <li class="collection-item">
                  Issued
                  <br />
                  {{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">
                  Expired
                  <br />
                  {{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">Old Engine No.:237237623765</li>
                <li class="collection-item">
                  New Engine No.:
                  <br />
                  {{vehicle.vehicle_information.vehicle_engine_number}}
                </li>
                <li class="collection-item">Old Chassis No.:72538752375</li>
                <li class="collection-item">
                  New Chassis No.:
                  <br />
                  {{vehicle.vehicle_information.chassic_number}}
                </li>
                <li class="collection-item">
                  Fee:
                  <span class="new badge" data-badge-caption="Cleared"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col l6 s12">
            <div class="card" style="padding:10px">
              <div class="row">
                <div class="col s12 center">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEREhUSExMVFhUWGSAbGBgYGBceGhogISIdISIaGBgYHSghGxwmIBYWITIhJSkrLi4uGiAzOD8sNygtLisBCgoKDg0OGhAQGi0mICUyLjEvLy4rLSstLS8tLzUrLS8uLy8tLS0tLS0rLS0uLSstLS01NS0tLy8tLS0tLS0tNf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCCAH/xABIEAACAQIEBAMFBQUFBQcFAAABAgMAEQQSITEFBhNBIlFhBzJxgZEjQlJyoRRigrHBM0OS0eEIFSRTohdkk7LC0vEWY3OD8P/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAyEQACAQIEAggFBAMAAAAAAAAAAQIDEQQSITFBUQUTYXGBocHwIjKR0eEUI7HxFVKi/9oADAMBAAIRAxEAPwDuNKUoBSlKAUpSgFKUoBSlKAUpSgFKVRvarzDi8Fhs0BjQMQuck9Qk9o1tYWAJLE6AaC9jUN2JSu7G5zTz5h8GxiUGaYbqpAVP/wAjnY+gBPpUJwL2o9aVElgVEkYKHRy1iTYXBUaXsLjauPqokuWbqNrfU5Bfck/ePqbmrF7OOFHE4jDxi+VW6jnyVCDp6Fsqj81cvWzctOZ66wdGNNua4N3vxVvDjzfgWf2nY/iUk00CxYgYUZbZIrpJYBiWYC5Ga4tcCwqm8J47i8NYwzsi+SHw+f8AZuSov8K+heL8TiwsTzTNlRBr5nyAHck6AV84cVxYnnmlEYQSOWVBbw5tgOxJ1JPqe1qmsrO6ZGAkpxySgrc+07ZyNxuWXBPi8VOsgGYkKgXphL3Bt7zaXvoLEW86rkntaYOLYVchOgaWzkfJCAfS5rL7JMH1uH4uJrhJZGUfxRICQPnXLON4NklWKQeNHZWBNlutx+trj0qZzklGxShQpSnUUldpqy2424ctD6E5Y5pw+PU9MlXX343sHX10NmX1FxU5Xy3h8fJhHEsEjRyJqFY6jzynuD3XUGvo7lXHTT4WKWbp52W5MTExsOzLcXFxuDsbitKU8y1OXFUFSnZe/fg+wlqUpWpyilKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCuCe1biOJxGKySIYo1Fo1JGbKx95gD4S2QtY6hQo0N673XzRz1xNsVjsRIhBAlKD1t4Bl/hQn+I1lV2OrCL42+z35Ec8JVdNVABy+Vz2Gx+flW/y1x2XAuHR8kiAr4lupU2OU9m2U6G+laC4piLlDbNc2I0Vf9R/OvxsUw1KNcAtqNAW7n0ArkWY9qXVbra1tU7W8uFmteZYeP8ANOJ4hlE0iMkZuoVcq5iN2sTcgbfmNQ3RGni9L/1Prp/OsWDK+JVAy3G+l9Br63sa2spP3R4t/S3nVJyd9TooUoZLRS47Xtv/AF7RL8vc84nBRGGJ4UUO2jJmNz3vceg22FV7iuNady5Jk1Z5DYWYnvrYEXJ0FYWlALFksytdTbe/3b+utq9ibt02yglduzf5HStG2cijBXSsm92k77315ba6bLtE+FJU5jqD4Re4FxoQTrvpXVfYtxPEFZISuaC+YOCPAxF9VvcK+p00zK3nXKJsRIRbIQStjqPeXW4q9exPihjxjQMR9tHcW2NvELfANJV6N01c58dkcXlT8V74P0O40pSuw8YUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAVFcR44kT9NUeWTcqmXwjzdmIVb+V7nyr1xvihgChE6kr3CJttuzEAkKLjYE3IA3qmSxx4HDlnSdsRM3haSUKZZH7KhZjY31BSwUa6Cqtkk5xzmqSFGKwMjqLkTaAk3ssZQlZCQrMSGAUKSxFY+Ec552CSx28TBpUN4o9fCJX+4xBUa7n0rzy1yjEqRyTO00gDBs5JTxFGsqHRFHTWwHY96j+asHLFiUjwuFnCzm82IiPhW5uQ8aAtJm1zZrGx8JB2XBfwa/aiOXeiidCNOk0fvREkkX+8CdWU9m/kQQJerEGHG5um+QgPlOUnYG2hPpevlqLDLGyeIsQGct56Wvbte96+j+dsd0MDiHBschVfzN4R+rCvnYjM7gbDLGP5n9P5VzYiWy98j1OjqSd521ureHxelvE9RpZQPRV+ZNz+hqb5W4IeIYjoC+Qk9Rh91F0OvYk+EfH0NRWCw8k8sUcSlnkclQPhZSfIW1J8ga+huWeXYMBEIoUAJsXf7zt3Zj9dNhesqVLM7s68Zi1Sj1cN9u5W08mci5y5RXAYLBuwBnLFJbbXZbjXyQR5Qf3iaqWpvZT5b+VtR63tr6V03234i5wsI38bnX8qj+b/SuWQe8RYXvcZr6Ak6fp+tKyWbTgMBKTprNxb97EtyxwI4zHR4fZHVi2vu5ASCPUMRp/StfiOHeOSSGQZZFBVh5Mv9DmBB7gg04Vj3ws8U6amIhio7gHUfEqxHreux88ctw4/D/tcEYbEBA0bru6aHJ5Ndb2vsamMM8NN0RUrvD19fllbw11/l/U4nIQSrfvK3yYZakuQMGf2/CMjBXSYjW9iLNdfQlSQPUiomL3Qux8Sa6G4N10O2gNbPDMaYJ+qv3Skw9cpBI+eW3zqkW4s3rQVaF+af1av6JH07SvMbhgGGoIuDX5NKqKWZgqqLkkgADzJOwr0D5ojOPcdTCgeB5XJH2cYzOF7uVGoQaXNVzAc7yvKRkiZLMy5HuzAOwCqRcGTKjELs2Q2N7gR3H1kSQS4TB4iWKZrSRxs6dQH++fMMoGllQ2BvdtCKtkvKuEeFI+kEAsRYKGHjRyLroLtGL5e9yKgk9S8xhLF8POsZ1zlU0H4jGGMgH8Nx3AqZhlV1DKQysLgg3BB7gjcVzvDRR4XEth5Wklin8UDNNZid+mXYguQGuuZ9r2Fxcy3L7nAsYWSYQSSfZmQ3MTN9y9yChbYhjYt5a1CkC40pSrEClKUApSlAKUpQClKUApSlAKUpQFH4rIJsbIJJlhjiHTVywG6qzZQSATcqLtcDKNN6r2L4fGuOwfSsYbyMHuW6jhDZjK/iktnPugIuawudrHjeExx8Qd2HVWYCQRta3UFkUA/guFaxvZmLeVvfMfCismExLkNIshRiNFVXRgFQdhnEeu579gM3syTdE0yLnjBKm2wJystwQyjUqyldQDYjXe49Rc2RlsjBFa9iDKtwfVR4vlav3huM6ba+6d/863sdgCx60JXMwAZH1jlA2zd1YbBh8wwsAg7oMy8VwkUseZsoYC8blipUnYh1IZbm2xF61uWp5yskU5DPEwGYEHdQ1iRuRc62BIsTrURieFpiFbDof2djq0Ei5lFtpIQGA0JBupK3tcA1acHhI4lyxoqLvZVAF/Ow0vVyCke1zEMYsPhYxmknl0QbtlG3+JkN+1r1U+BezTFTS3m+xgVmBv8A2snbMq/dDAHVjcZtq7K2HQuHKqXUEBrC4B3AO4BsPpWWqOmm7s6IYmcIZI6b+dvsQ/LfLWGwCZIEIvuzG7G212Pb0GlTFK577T+dZcC0MOGeMSMSZLgMyKLWuva9ybkbCrtqKMVeT1f1K77XsLP+0iZlDK2WKGMG7vYFmcDZQHkVfMkjTzgeL8AMGAw2IdSrzO+jDxBCoyKQe5ys38dbeO4txHESJjpYC37KFYfZOsYUHOGYE5rGwJYaeEeVafGud58fEsWIWFrOHUojh1IvsMxFiDv5GuWWV3dmepCU6ahFyjZavVaavj5sgYSC4tmItuRpa3n5+v8AlXR/Zpzd0CuDnb7NjaJzsjH7hPZWO3kTbYi1QnxjYl8KpVIV6aQdVy6o2W9nYlbA2voL7fS3L7LsSy3/AGiAg7aOQQe+b+lvnVIRmpXgtDqq1cPUo5KztJ66a25bX0LrzRyPhMe3UcMkoGjobHS9sw2axPfXtXJ+K+z3iOGkUiMTIoc54rkFd8pUi4bTQag7A3rtfLmBmgw6RTy9Z1Fs9iNOwNySSBpmO9qk66pU4y3R49PE1KT+F+07lc5A4j1uHQPe5RMh+Md1+pyg/OsXL8LYi0+KKOXCyQpmvlB1JEd8vhuoDWLaG5G1WODDol8iquYljYAXJ3Jt3PnVe4pwKOOX9qSSPDqFIZhGoYXJJZWuBma6jxBtVFhve/Awk022iR4xxxMOQGy3PYuF/wDNp+tR8XGpsQQYEBFjlIOZCSLBmkHhyi97Akm2gNe8Jw7qC0cZghPvOR/xEvxJ8SA92Y59/dOtb2PxSxIIowBYWAGyjYAfKobtqwUXnyAmOHJ4mjxEKpcKc2ojtZ/CcwYix0N7Vsz8Ow6xMI5kRyRmg6jjKexVHOeE7eBsyj9a2OJYBcQ+GgYXVp1Zh6Rhn7eqKPnW5zdhysL5wruqkwylQW9Y5PxA3/iHkRc5x+VsksXAcY0+GhlbR2QFx5NbxD5NcfKt+tHgnDVwsEcCszCNbZm95vVj5kk1vVsVFKUoBSlKAUpSgFKUoBSlKAUpSgK9zmhSJcSou8J2FrsrWUqL975GA7lQO9Rq4tsThZUvnlz9NbHTPEmcfV42+vpVk4rweLE5OrnIQ5gFd1F9rnIRfc71TeNY+Ph05CqAgkikyqNFUoyE2Hbw/Vh51RrW5JIYRxKqsmocAr631qTwE8kRylWIPax/Sq1y9i7M8exjKyIP3JQJFt6KWZP4BV9wuJWRbj5jyrOEddyWYuJYATKBcq6nMjj3kbsR/IjYgkHQ1gwPEWL9GZck1ri3uSAbtGf5qdR6jUyVQ3Nkf/DvIGCPGM8bnZWGoufK+h8wSO9bFSZqOxXHcLG2R5oww3GYEj81vd+dVAYwTQpNPiHZJFDAMwRPEL5ckeUNvsbmt7l/A9YShCYVjcKq9LKdUVrlTYi+fyFUz32RNiVdmxbsM6DDI4DAHWXwqwu4NhGc48NvEBvY2rivMuAbDYueN4yD1HZAAbNG7EqU8wFsthtlt2q4c08B4zglklwUySREHOiRgOF8um5ZXA1OmupAFtKonDvafxCAeAQEkAF3SRnIGwLtJew1021NJLNozDEYeNeOVs6vwDiuJk4eIpcFiLhOlcoB1VtluAxDKcp1zAC43105tPy9j4VDSYOcACxKqH18rRkm2+u1ef8Atj4r/wB3/wDCb/30/wC2Piv/AHf/AMJv/fUSipbla2EhWSU76HWuWsRhEwsWHeSNjh41eQ38MbDW5Y2sb5vkNd659hecZcPi5ZsMS+Hd2tC7MEK30ZAb9M38Wg+9qPKt8R9p2OxClZosHICLeKAnQ+RL6VB8I/a8VMIYEzu+yi+gG92J8KjuSe9JX0sMRTqtJUmlY+lMNzPhWjjdpVQyIsmVjqoYXGa23xOlSsEyuoZGDKdipBB+BFUrljlbHRxgYieBT3WKNib27yM9joALBbAAAaCtLh0sThG8UMzqG8OaIvputiBIv+KrOTW6Omxf8bi0hQu5sB8SSTsFA1JJ0AGprRw2GeZ1mmXKF1iiJBKn/mPbTPbQAXCi+pJ0gOBzNPjHilm6gw6qUVgmbM4a7HIBeyhQDb77DvV0qydyDR4nimQWVTc97aD/AFqDkicDMwIv3PerUarvHOIKbm9kQEk/zP6VlUXG5ZGlwkg4oki6qvTH5nBc/MLEv+OtPheObG4iKNjmjW7FrjxGFipW175s4jY+l6hsFzCI+gjCzSk4pidLLLFIEB/KGgT4286uHCOWsP08NKVZZUVGzI7rdsouWCkBibkG41GlWS2RBZKUpWhApSlAKUpQClKUApSlAKUpQClYsVNkRnszZQTZRdjbso7n0quxcamxl/2YFYwbMwyF7+VzdEI8rO3mF3oCz1C8xcOjMcsywdWYoqqABmYq2ZFudAocgnYee1ecJw2QgkyYiKQHcyiRT65TdbemVT8N63+E4tpEIcASIxR8uxI7rfYEFWt2vbW1AVL/AHW2HOH6hBlZXz22AVYUVAe4ARNe5udL1L8JJ6q277/Ctbis3Uxb22hQJ/E1nb/p6X1NTPBMPZS53Og+FYWvMtwPfEmnQGSKz2FzE2lwPwONm+NwfTeorg3HYpdQ32Eq3XOLZGvZonvsQQRY7VZa59g+CxtxKRUBVDnaUKzKDawX3SLNmPzCm961ZBPYXl2PDOZsGkRB+42wHlDJqYx+5Yr5WqsY72iR8Px00WKw08aSlXD2UkeBUPhBIZQU3Un4VbU4JJCc+HlJP/Lktkb0zIAw/Mc1vI1SvbM+Hn4ZHiGUrKJFEV7XBJs6kjcZVY/FRUg6Tw7HxYiNZoXV43F1ZTcH/wDvKua+0f2WjEs2JwQVZjq8R0WQ/iU7K/6H03qi+zLn08NcxS5mw0huwGpjb8ajuD3Hpca7984NxzC4xc+HmSUd8p1H5l3X5im42PlfivCMRhXyYiF4m7Bxa/5W2b5E1omvrvi3C4MVGYp41kRtww/UHsfUa1R+WfZNhMLiHmkPXUNeBHAsg837OwOgO2l96jKLnJOWuQeIY7K0cJSI/wB7L4Vt5qD4m+Qt613vkjk6DhkWSPxSN/aSkeJj5D8Kjsv8zrVkAqrc3894PhykO4ea3hhQgsT+9+Aep/WpskCV5h5gw2Bi6uIkCLso3Zj+FFGrH4VD8HgmxGDhhaARp0kDGdVZtAPdh1A+L2t5GuTco8Z/3pxqGXHG/vGJPuKyi6oAewsTfuQL12zEGXEvJEjdKONsrPu7NYNZRsqgMupvc300uV7gwRYfDcPhZIAOo2puc0jttmc7m30AFhasfCeJyTs8MJ0iNpp2F7ud0iXZrbFjoLWAaxtH808vrFhXdHlJBXOS5HguA5ypZdASb22Bqa5PwkcWFjWNQo10HxP+VRxBs8YuIgASdQCe5+NvW1VnHAEIDt1Yr+o6iXB9KuksYYFTsap/FMMxSSMaNrlP7w1U/UCs6is0yUZeH8vWnlhxEKyQmHJE9gQU2MUg7HKIvQ5LjW4FsjQKABoALCsPDsWJoklXZ1DW8rjY+o2qNw6SYq8hkdIsxCJGcpYKSMzv72pBICkAC17nbUqTVKreXFxXeNZMv4JHWTT1t41P5Wf8prd4Fx9MXmCKwKe8dCl7kZQ4OpBBuNCO4FSCXpSlAKUpQClKUApSlAKUpQFf5n5kjwwMYJMpF9FZumPxuFB+S7sfIXIcPmTCR5SGYjVzcXzEXy3JAuB4mJIGpYnWtjjkqlo4ibLfqyH9yMggfNzHp3AatOOHrTJGR4VHVkB82OZUPxbxEdhCn4qgE9g8UkqB0ZWU91YMPqpsaiMHjViw82KOod2dQPvXOSMD1YKlvzVrCY9GUpo+KxDpHbt/dlx8EhaT1t61p8yT2nwuEjW0UfifyBCt0k9dEkb0yL50bsrknjBwlV8Ru5JZz5sxux+FybelquOHjyqF8hVWTcfGrYwuD3rKlxZLNfiWNSCJpXNgov8A6VTuVeNRRiSWRJjNK2ZgInOVRfKtwPUt8WNRXFeLzS5uHyC7wyrIJCNHg3Qkf8y4MZ/Izelb+CcIjyHZQSfgBeplOz0CRajzBCYZJUYkppkIZXzH3UyMAbsbAaa30rjXtmxJQYTBZrmKPM/q1goP1Eh+dXDlHExy4h5QXxU6qhAS3SiLZrqWFk8FjYklvG1r1z32w8OmixyyTMC00Yew91bEjIpsLgaG/ck7bVa90QUas/D8dLh5FlhkaORdmU2P+o9DoawUqCT6Q9l/O/8AvOFlkAXEQ26gGzA3s6jtexBHYj1FXauE/wCz+hOMxDX0EABHxcW/8p+td0kNgT6VdEM4X7VfaHNLM+DwshjhjJWR0NmkYaEZhqEBuNNyD2rl9C5bxE3J1J8ydSaVS9yTb4Pjjh54Zx/dyK3yBFx8xcV9PcKxKrNJdgFmVZkYnQ5VCPb4BI2/jr5WsToNSdq+jpuGmHAfs2KjeWKOPwyxk5xZdnC+JTa6kqCCCb2BsJQZMz8zYV1ZbSyIQQSIZCjAjWxy2YEdxoaj+Q+Jr9phSW8BJjLggunY2Ot/P1B9Kg+W8esyNGJxPlVT1PDchgdGCgAEMrDYaWrAMYMNLHimuUhzdQAXbKRqV8yCoNu4vVFNtix1KoDjUdpL+Yv/AE/pXrk/EzTQdecZXl8eTtGp1SP1IUgk92ZvhXvj3vL8DVqmsSEa/LOIyPJhzsbyx/M+Nfkxzf8A7PSt7l/wo8XeKR1+ROdf+h0qrcWxEkPSmjUs8cqnKPvIbiQevgzkDzUVZi4TEpIpvHiVy3G2dQWQj8yFxf8AcQVNN3QZ7l41HnMa2cjQ5WQ2P4SAbq2hsGsDte+lQUfF48FOVJcwTAOGyuQt9M9wNr2VgdR4W1uxGdcLbD5wvjw0kimw8TR5ySPMtkySD99VrLJiFRklBF0bM1tjFLlzMp/CJMr38lqxBY43DAEEEEXBGoI8wa9UFKkClKUApSlAKUpQCtLi+JkiiLxpnYFdPEdCQCbKCxsCTYAk2rdpQFOkzzMTlklditx0pY4jlvkjLyKLRqWLsRdmOw+7Vl4Zgeiliczsc0j92Y7n0GgAHYADtW5SgKpgJHRMOyxNJ0UkjZQVGWW6i75iMosJPFro3qL6q8JkxKtMrZmR+ojAkJNLazEecQT7FCf3m10NWjEcJw8jZ3hjZjuWRSTba9xr863NAPID9KiwKdhJRKAVB3sVI8QI0KsOzA6EVaYmKRDNuB/8CoPheSbGSzRf2Vl8Q2d1BBceYsUW/fJ5Wrdxf/FSGAf2Mf8AbH8TbiIeljdj5EL3Ns4Rtclld/3DNinfExSIFKrGgdTZwhY5wwNwC0jgGxuAD3rRwcrK7ROtiGySIdbH0PcEEEHuDXR1UAWGgFUPixDY6W3ZkB+IVT/JhScUkSmTHKMAD4h1AVQUiAAsPAC2gHrNb5VS/wDaB4bmhw2JA/s3MbH0cXH6pb51ceXOL4aGAJJIEkzOzhgwILMx7jUagAjsBWtzricFjsFPhhiIs7r4MzAeNSGTU/vKKsvlsRxPmqlLeehpUEl/9iXF1g4j022xCFAf3h4l+tmHzFfQ5FfMvsq4e03FMNl2jYyMfIKP8yo+dfR/FsemGglnf3YkZ2+Cgn+lWiQz5M4lAI5pYxskjqPgrEf0rXr3PMZHZ2952LH4sST+prxVSSc5G4acTxDCw2uDKrN+VPEf0U/WvqTGQdSN0OzqV+ot/WuG+xCCCKabGTyImVelGGYAkmxYgb6AKL/vGux//UmD/wCfH8jf+VWRDKfBNaFGCqruoDkAXuBYgnuQbiv3Bcuz42IkMkUTghWZSzMDcZgoIAHkSTfe1eMZZuoUvkMrlCQRcNZiQCAbZ2f6VdOWHBweHIFvsU0/hFZwirslsw8tznKY30kSyuPJgADb0Ngw81YVg4xGwkJI0Ox/pW7xTBsGGIhH2qDVdhKv4D+9qSp7H0JrHxNhiMKXiO63U7EGxGo3BB3Ha1WnH4SEQOFwD4ty8bFVgJKPrZphpbT3kUZlYbEsRuprNhZZGi6CRMcsiFACt4CrKxjlBIIVbHKwBDJb0zTfLeJieBFjAXpqEaPvGQNVYefr33Fwa2cZwyCYgyRRuRpdlBNvK57elWirLQGrwNszYlwbo85ynscqRobfxo4+VRXEeFmJtEdodcoVS2VW0eB0XxGNr3UqDlPkAAbRFGqgKoAUCwAFgB5ADavVWIIDguPlMiw2Z4wpPUeOWNxa2UOHUAsbm9j2vYVP0pQClKUApSlAKUpQClKUApSlAKhucFvhJL7AoWHmodSwPmCoItUzUTzWf+Fk9cq/VlH9ah7AwifpYYdMDqSNkQHbOTYEj8KgFj6Kak+HYNYY1jW5tuTuxOpZvNiSSfU1F4NLzQqdkjeT+JiFB+S9QfOq/wAb9p+HhkeKGNp2XLZlZRGb2zeP0B7A61CaUdSJzjFXk7IvtVnHcCm60kkZiyyMHu+a6HKqkWA1HgB3G9c+xntG4i5BUxRWvoEzXubi+Y6EAWuDrc6DS3njftFxOJgEIyQk3Ekkbe+Le6qsPADrfUnyNUc4M5P19DW0tuxlzxTQQkCfiUEZIBAAjXQi4PjdtCAbHvWjxbiMUCyH9vwkgRS2RiA7WXNkGV7EkbG3fY1y9IBlZlC2UC92Ubm1lBNyBpcAaaV66Km+RHZVQM7FRZSfe929kzHQness8drCOJrzouvGk3Bcb/g1Of8AgBw0qzrEUgxIzxbHyJHhuFvcMBfY+lhVquGMhMkQiLPkXVVLMVU7AqpNhvbSqlPEUYqw1FaRkmXwuMhiL5dGjsn+z3hEyYub+8zKnwW2b9ST/hHlV09qiseE4vL+AE/AMpb5ZQa5p7AMQwxk8YvlaHM3ldWAB+jtXZeYo1bCYhW90wuD8MpvWq2OrifJVZMNh3kdY0Us7sFVRuSTYD6msKHQVP8AAMGVImuysPcIJBH7wI1FZuSSuZYivChDNI6hy/DHgP8AgWkgw0saK0hmYfaM5IBRlYXHhO+wsLCp84nCgJm4rBmcAi3SsQdiBmJy+pNcnaMtnbK0jAZnOrGw0zOxvYDQXO1fogQsRGLgJmYuUU3ABYAXsfFfL3OmlZ548jnpYmvWpyq06TcY7u52QcKnbWObDTDQi4ZbXFwbqX3Go0F6sPB8EYII4icxRQCbWBPcgdheuE8ucfkwEokiYZTbqREjLIACACbEggXsRtbuBapzG+0nHyvmiMUSD7gXOd/vO250toBoT31q8ZwWpWPSNFxzSdvA7NUSg6GIy/3eIuQOyyAXYfxqC1vNHP3qonD/AGqupP7Th7rqc0J22spRzr967X8tKtj8ahxeC/aomB6eSUi/iQrZmRvJspKn0NaKSex1U60KivB3POCiA4h4Ra0clz5jMgAPmAc1v9as9V7Drl4gR+KJz/1RH/1VYaQ2NWKUpViBSlKAUpSgFKUoBSlKAUpSgFKUoBUNzXG7QDKpYCRGcLqcqsGuB31UaeV6ma5R7V+LytOMJcrEEDEbCQsTv5quW1trk37VWbsjKtWVGDm+Bv8AH+bXwywTwIsgmiaMMxIVSuqm1rn3r2091q5nhwFFmUt4DqpsFY2sx0IIudjvepYY6M8PfDyvJ1InL4ZVVOnffxtbNqWkXU2AIrQw0UrgrGJLOBmCZspsbgG2hsfOuapNJJtnBKtGpXpSazw3cVq+5mKMdSPwxscgYySeK+UkAZhYBFBFr+utYf2OO3uDT0qbh5cncglUSwA1YkmwF2IFxckXO3yrU4xw0wssblWzgnS+liNx89/Q1zQxNOUlBSu+wnpXDTzutRpuFPTkvHLe5pYZ4RfTMApC5WAAYgEEmxuO9hvX6kYAAFwdcwBGXcEba33Jv3tWJsHGe300r1Bhwt7Em/ma203OFdI1Y4d0ITeV8GvX+TycIAC4ElgbEjMRc62J2uax8Y4erkqHRnW1nW+VrgGwvuASRfzBrdABD3kZdAQgDEOQe9iApAZtT8t6xiQpHbNdWALqVu11JtdiN9j4Trm12qU3c7KVLDrBfqOtfWrZb8bWtyf2L17AuDlExOJYWZnEQHcBRmJ+Zcf4auvtJnZOF4xlNj0WF/RvCf0JrjPBOZJsHL1YQ4P3lIORx5OB8yCNR+hnucfaBJjY+gsLRRMo6g0Zn81uNAg+pt22PQqisdFPHRcM0lZ8vsc54Xw7N9o+iDa/f/SrBJg85jVSXLrmCxh7rv4GAF8wC38rEV4gxhFyl1bKQLqDoRY2BB/zHasqRBWktMy5QcjKr2c7ZV1DIGBbUj471hKTbK4eOHxUalTEVMkl8q2+nO+lzFFEoGhbKSL2OpFxe19NfI6V7URDqAqbsQYyGAt4t3FvESthoRrX663Fv5VrLgU73J9Sf5VXR7nmYbpGtRpTpqbSlurX7N+B+rDE/isrX71nw+GsSyx5wtnkUXy5QRctb3Qdr+tYxEqm4ABNh5DUga+Q8zU/PytLbRkb/EPobGs6lenTaUna5fBYerWmpwi5Qi1dXS8NyEWRT1LI518NifswGBN/DdxlNrk+tTvK/HJoVkwaRq64twt7kMpcBCdiG7Htsa0JuH4mIk5JEBTI3TLFSLANfKSTmtcg6XNZeWMTBFihJO0qCJbxmIKWznS5DAiwW+hB970rSjUUtpJno4ydNYyLo0+rjazusqfcdWwuK62PDRAsIiyynsoKAgX7sSIzYdiatVfO0PF54ZmxavllzM5OgBFycrgaFbWFvp2r6Dwc/UjR7WzKGse1xe3611U5XNqGJjXzZeDM1KUrQ6BSlKAUpSgFKUoBSlKAUpSgFKUoBUJzRy7HjYwGC9RLmNmUEA91YHdDYXHwI1ANTdKiSUlZhOxyjC4GEa9BEdSVYZVurA2IvbzG/fevXFMesCZyCdbADuf6bGrVzDy/K0xngCtnA6iFspzDQOptYkrlBBt7oqIxHKGLxKFHEMY0IzMzm4NxdVsANLXzGvmanRtbr7Wbjfe/A9WliaSim9OwouJ5knb3cqD0Fz9W0/SojxyvfxuxBBIDMe29r2q74fg8AuDAodSVZW8WVhuNe2xB7gg960n4pIqpZFRZFFsovkY5bA9iDdhew1y+dKddU5NU4Wa56fdnRjOpr4eVLLZS47ve5XoeVpn/ALth6s9v0Bv+lScXK7qBmlRQPif1Nq38JJIzKeqzDqKrDtlMavsosPF38iRXh8JMz5iLZXLKWOhRil1N+4sW+KipljKzdnJLw+55EeiMNb4k5d7fpYwRcCgOU/tGbMcoyBbE+Wl6Nw3CKQM8rXAIyi41vbVU/db6VkQKipmliRlYG3UHaLIPd3uQDbyrHhXhTT9ojIB0sCTYdTQ2AH96NvKqdZVeuaT7vwjT9Hg6e8Irvt6ntsBgxGZCJSoIB1a+oBGmn4hX6MBgsuYiQAhiLs1yFtcgX9RWLDzYdE6ZmUpmRtI31K2uCPI5R9TXh3wxABxFrFrZYnHvZr37E3ZTf931p+7zn5/YdXgv9af/ACbQ4ThSHJ6qBBdie2l9yD21rDNwjCi/27ixsbgGxsDY+HyYH51lOMgbq5p0+1tmIjddgARrfSwP1rFGyXDDEQl9MwLZQSNM2ove1voKhTrLeUvP1XeHhsFPRQh4W9Dw/Ly3suIQnTQgX122bv8ACtLFcpS3JsG/K5H6GwqUxXDs+Ux5ZMpQCzKboEsdL6EkAfSvUMbxspdZAtgCFuLyXALm24sTqdDY1eOKqpaTv2NL8FH0Vhb6Qa7U2VnEcLkiUgxyAG24JUfxC4/WtvBcYmiFkkuo+63iHy7j4A1KcP4rN0w2ZmsgZrhTa7WuQLMdAWAHapXDQQ4gMXijurFTp4hbz0BBNwfgRVq2JbVqsU+78nd0ZRo4WMopOWZ3132NbhHMPVcRulmbYrsbAnUHUaA+dTE2HR9HRW/MAf5154Lyk8p/acOsSKuZUD5/tDsWDC+VRYqPCb6na15Mcv45/DkSO+hcyBgvqqgXY+ht8qxqYCrJxlSg0n2/nQ1qYmi20tvqY+VeVoJ367Qx9KNrIAq+N1OrHTVVIsB3IN9hXQqwYHCJDGkSCyooUfAaa+tZ6+loUVSgoL+zx5yzO4pSlbFRSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgK3zFy88r9eAqJCAHViQrgbG4Bs42vbUaHYWg8FyVPsRDGt9yXlOpBsFOUAXAsL6WpSuSpgqNSeeS172axrzirJk1huTIQPtJZX9AwjX5dIA2+JNZsVyXw+VMj4dCPxXbOPUSXzfrX7StoUKcPlil4FJTlLdlU4l7LBvhsRYfhlW/yDpY/UGqxxL2f4+PUxBwO8cq2+jlDSlS6cWcU8DRk72s+zQrvEY2i8Ml4z8if+kmtKCVCwtIx9D/8AFftKz6tXsc/+Opp5U35fYn8Fyri8TYxwMR59RFH0z3/SrNgPZhi2t1ZYox5Lmkb/ANIB+ZpStFSiax6Oox3u+9ls4T7OsBDZnj67/ilsQPggAUfG1635uUMIfcDxH/7cjgf4CSn6UpUypQkrSSfgd0P21aGncROO5HY6pJHJ6TRgN8OpHa3+GtfA8oYgnIwSJGN3ZZGZzsLJdRbQAXO3YUpXM+j8O2nl/m302NliKlrXLzh4VjVUQBVUAKBsANABWSlK7DEUpSgFKUoBSlKAUpSgFKUoD//Z"
                    class="responsive-img"
                    alt
                  />
                  <h6 style="text-transform:uppercase">
                    <b>Federal Republic Of Nigeria</b>
                  </h6>
                  <p>(uniform Licensing Scheme)</p>
                  <p>AKWA IBOM STATE</p>
                  <h5>Proof Of Ownership Certificate</h5>
                </div>
              </div>
              <ul class="collection">
                <li class="collection-item">
                  Issued
                  <br />
                  {{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">
                  Expired
                  <br />
                  {{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">
                  purpose(class):
                  <br />
                  {{vehicle.vehicle_information.vehicle_class}}
                </li>
                <li class="collection-item">
                  LIC State:
                  <br />
                  {{vehicle.vehicle_information.registration_state}}
                </li>
                <li class="collection-item">
                  Fee:
                  <span class="new badge" data-badge-caption="Cleared"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <div class="card" style="padding:10px">
              <div class="row">
                <div class="col s12 center">
                  <img
                    src="/images/anchor.jpeg"
                    v-if="vehicle.vehicle_information.insurance == 'Anchor Insurance Ltd'"
                    alt
                    class="responsive-img"
                  />
                  <img
                    src="/images/corner.jpeg"
                    v-if="vehicle.vehicle_information.insurance == 'Cornerstone Insurance Plc'"
                    alt
                    class="responsive-img"
                  />
                  <h6 style="text-transform:uppercase">
                    <b>{{vehicle.vehicle_information.insurance}}</b>
                  </h6>
                  <p
                    style="text-transform:uppercase"
                  >Motor Vehicle (third party insurance) ACT,1945(Nigeria)</p>
                  <p>Certificate OF INSURANCE</p>
                </div>
              </div>
              <ul class="collection">
                <li class="collection-item">
                  Issued
                  <br />
                  {{ moment(vehicle.dateIssued).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">
                  Expired
                  <br />
                  {{ moment(vehicle.expiryDate).format('YYYY-MM-DD') }}
                </li>
                <li class="collection-item">Policy Holder(user)</li>
                <li class="collection-item">Policy No</li>
                <li class="collection-item">
                  Fee:
                  <span class="new badge" data-badge-caption="Cleared"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
  data() {
    return {
      display: false,
      akwaibom: false,
      ekiti: false,
      lagos: false,
      abuja: false,
      crossriver: false,
      sub_admin_password: 'test',
      test: '',
      isLoading: false,
      vehicle: null,

      register: null
    }
  },
  methods: {
    initModal() {
      swal('Update Vehicle Details', {
        content: 'input',
        button: {
          text: 'update',
          closeModal: false
        }
      }).then(value => {
        if (this.sub_admin_password === value) {
          return this.$http
            .put(
              `/admin/renew-all-vehicle-details/${this.register._id}`,
              this.register
            )
            .then(response => {
              swal('Success', 'Vehicle Updated Successfully', 'success')
              this.getVehicleDetails(this.$route.params.id)
              console.log(response)
              this.display = false
            })
            .catch(err => {
              swal('Error', 'Something Went Wrong', 'error')
              console.log(err)
            })
        } else {
          swal('Error', 'Incorrect Password', 'error')
        }
      })
    },
    state(id) {
      // console.log(id)
      if (id == 'AkwaIbom') {
        this.ekiti = false
        this.akwaibom = true
        this.abuja = false
        this.lagos = false
        this.crossriver = false
      }
      if (id == 'Ekiti') {
        this.ekiti = true
        this.akwaibom = false
        this.abuja = false
        this.lagos = false
        this.crossriver = false
      }
      if (id == 'Abuja') {
        this.abuja = true
        this.akwaibom = false
        this.ekiti = false
        this.lagos = false
        this.crossriver = false
      }
      if (id == 'CrossRiver') {
        this.abuja = false
        this.akwaibom = false
        this.ekiti = false
        this.lagos = false
        this.crossriver = true
      }
      if (id == 'Lagos') {
        this.abuja = false
        this.akwaibom = false
        this.ekiti = false
        this.lagos = true
        this.crossriver = false
      }
    },

    initEdit(id) {
      if (this.vehicle) {
        this.register = id
        this.display = !this.display
      }
    },
    async getVehicleDetails(id) {
      this.isLoading = true
      try {
        this.isLoading = true
        let details = await this.$http.get(`/admin/vehicle/${id}`)
        this.vehicle = details.data.details.vehicleDetails
        this.isLoading = false
        console.log(this.vehicle)
      } catch (err) {
        this.isLoading = false
        console.log(err)
      }
    }
  },
  updated() {
    if (process.browser) {
      var elems = document.querySelectorAll('.modal')
      var instances = M.Modal.init(elems)

      var elems = document.querySelectorAll('select')
      var instances = M.FormSelect.init(elems)
    }
  },

  created() {
    this.getVehicleDetails(this.$route.params.id)
  }
}
</script>

<style scoped>
.nav-title {
  font-size: 25px !important;
}
.brand-logo {
  font-size: 15px !important;
}
.add {
  line-height: 20px;
  width: 200px;
  height: 100% !important;
}
</style>