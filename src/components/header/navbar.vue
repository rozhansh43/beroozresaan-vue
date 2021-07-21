<template>
  <div class="bg-white">
    <b-container class="d-none d-md-block">
      <b-row>
        <b-col md="8">
          <b-navbar>
            <b-navbar-nav>
              <b-nav-item href="#" class="border-animation">
                <i class="fa fa-bars" aria-hidden="true"></i>
                دسته بندی کالاها
              </b-nav-item>

              <b-nav-item class="border-animation" href="#">
                ارگانیک و سلامت محور
              </b-nav-item>

              <b-nav-item href="#" class="border-animation" >
                درباره به روز رسان
              </b-nav-item>

              <b-nav-item href="#" class="border-animation" >
                مزایای به روز رسان
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </b-col>

        <b-col md="4" class="d-flex justify-content-end align-items-center">
          <b-button variant="light">
            <span class="text-danger text-bold">
              %
            </span>
            پیشنهادها و تخفیف ها
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    
    <div class="d-md-none">
      <b-container>
        <b-row>
          <b-col cols="3" class="">
            <b-button v-b-toggle.sidebar-right variant="white" class="d-flex">
              <svg 
              aria-hidden="true" 
              focusable="false" 
              data-prefix="fas" 
              data-icon="bars" 
              role="img" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512" 
              class="m-3 mx-sm-0 cursor svg-inline--fa fa-bars fa-w-14 fa-lg"
              >
                <path 
                fill="currentColor" 
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" 
                class=""
                >
                </path>
              </svg>
            </b-button>

            <b-sidebar id="sidebar-right" class="text-right" right shadow>
              <div class="px-3 py-2">
                <nav class="mb-3">
                  <b-nav vertical>
                    <b-nav-item active @click="hide">
                      خانه
                    </b-nav-item>

                    <b-nav-item href="#link-1" @click="hide">
                      دسته ها
                    </b-nav-item>

                    <b-nav-item href="#link-2" @click="hide">
                      ارگانیک و سلامت محور
                    </b-nav-item>

                    <b-nav-item href="#link-2" @click="hide">
                      درباره به روز رسان
                    </b-nav-item>

                    <b-nav-item href="#link-2" @click="hide">
                      مزایای به روز رسان
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