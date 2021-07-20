<template>
  <div>
    <b-container class="bg-white">
      <b-row>
        <b-col md="8">
          <b-navbar>
            <b-navbar-nav>
              <b-nav-item href="#">
                دسته بندی کالاها
              </b-nav-item>

              <b-nav-item href="#">
                ارگانیک و سلامت محور
              </b-nav-item>

              <b-nav-item href="#">
                درباره به روز رسان
              </b-nav-item>

              <b-nav-item href="#">
                مزایای به روز رسان
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </b-col>
        <b-col md="4">
          <b-button variant="light">
            پیشنهادها و تخفیف ها
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    
    <div class="d-md-none">
     <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </div>
    </b-sidebar>
  </div>
  </div>
</template>