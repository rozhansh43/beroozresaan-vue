<template>
  <div class="bg-white">
    <b-container class="d-none d-md-block">
      <b-row>
        <b-col md="8">
          <b-navbar>
            <b-navbar-nav>
              <b-nav-item href="#" >
                <router-link to="/productCategory" class="border-animation">
                <i class="fa fa-bars" aria-hidden="true">
                </i>
                دسته بندی کالاها
                </router-link>              
              </b-nav-item>

              <b-nav-item class="border-animation" href="#">
                <router-link to="/productCategory">
                ارگانیک و سلامت محور
                </router-link>
              </b-nav-item>

              <b-nav-item href="#" class="border-animation">
                <router-link to="/productCategory">
                درباره به روز رسان
                </router-link>
              </b-nav-item>

              <b-nav-item href="#" class="border-animation">
                <router-link to="/productCategory">
                مزایای به روز رسان
                </router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </b-col>

        <b-col md="4" class="d-flex justify-content-end align-items-center">
          <b-button variant="light">
            <span class="text-danger text-bold blink">
              %
            </span>
            پیشنهادها و تخفیف ها
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    
    <div class="d-md-none py-2">
      <b-container>
        <b-row>
          <b-col class="d-flex justify-content-center align-items-center">
            <b-button v-b-toggle.sidebar-backdrop variant="white" class="d-flex">
              <i class="fa fa-bars" aria-hidden="true">
              </i>
            </b-button>

            <b-sidebar  id="sidebar-backdrop"
              :backdrop-variant="variant"
              backdrop
              shadow
              right
              >
              <div class="px-3 py-2 text-right">
                <nav class="mb-3">
                  <b-nav vertical>
                    <b-nav-item active>
                      <router-link to="/productCategory">
                      خانه
                      </router-link>
                    </b-nav-item>

                    <b-nav-item href="#link-1">
                      <router-link to="/productCategory">
                      دسته ها
                      </router-link>
                    </b-nav-item>

                    <b-nav-item href="#link-2">
                      <router-link to="/productCategory">
                      ارگانیک و سلامت محور
                      </router-link>
                    </b-nav-item>

                    <b-nav-item href="#link-2">
                      <router-link to="/productCategory">
                      درباره به روز رسان
                      </router-link>
                    </b-nav-item>

                    <b-nav-item href="#link-2">
                      <router-link to="/productCategory">
                      مزایای به روز رسان
                      </router-link>
                    </b-nav-item>
                  </b-nav>
                </nav>
              </div>
            </b-sidebar>
          </b-col>

          <b-col cols="9" class="d-flex justify-content-center align-items-center">
            <b-form-input type="text" placeholder="جستجو">
            </b-form-input>
          </b-col>
        </b-row>
      </b-container>
  </div>
</div>
</template>

<script>
export default {
  name:'navbar'
}
</script>