<template>
  <div class="bg-success py-3">
    <b-container >
      <b-row >
        <b-col cols="6" md="2" class="d-flex justify-content-start align-items-center">
          <b-img rounded 
          class="mainlogo"
          src="https://beroozresaan.com/_nuxt/img/logo-full-primary.4349d87.png" 
          :class="logostyle" 
          img-height="20"/>
        </b-col>

        <b-col md="6" class="d-none d-md-flex justify-content-center align-items-center">
          <b-form-input type="text" placeholder="جستجو"/>
        </b-col>

        <b-col cols="6" md="4" class="d-flex justify-content-end align-items-center">
          <div class="d-flex text-white">
            <a class="position-relative">
              <b-badge pill variant="danger" class="position-absolute">
                0
              </b-badge>
              <b-img rounded src="https://beroozresaan.com/_nuxt/img/cartt.ed617c6.svg" class="header-icon ml-3"/>
            </a>

            <div>
              <a href="#" class="d-flex justify-content-center align-items-center">
                <b-img rounded src="https://beroozresaan.com/_nuxt/img/avatarr.48dc0bb.svg" class="header-icon"/>

                <span class="d-none d-md-block px-3">
                  ورود / ثبت نام
                </span>
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'topheader',
  data () {
    return {
      logostyle: { height:200 }
    }
  }
}
</script>