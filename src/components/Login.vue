<template>
  <div>
    <div id="Login"></div>

    <section class="vh-110 gradient-custom">
      <div class="container py-5 h-80">
        <div class="row d-flex justify-content-center align-items-center h-90">
          <div class="col-10 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <div class="card-body p-4 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase"> enjoy Casino</h2>
                  <br>
                  <p class="text-white-50 mb-7">
                    Bienvenido! Por favor, ingrese su usuario y contraseña
                  </p>
                  <br>
                  <div class="form-outline form-white mb-2">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX">Email</label>
                  </div>
                  <br>
                  <div class="form-outline form-white mb-2">
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typePasswordX"
                      >Contraseña</label
                    >
                  </div>
                  <br>
                  <br>
                  <button
                    class="btn btn-outline-light btn-lg px-5
                    "
                    type="submit"
                  >
                    Login
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return;
  },
};


</script>

<style>

.gradient-custom {
    /* fallback for old browsers */
    background: #6a11cb;
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
    }

</style>


