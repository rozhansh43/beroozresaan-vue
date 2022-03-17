<template>
  <div>
    <div class="text-right d-md-none">
      <b-dropdown
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
      >
        <template #button-content>
          <div class="bg-blue radius-40 py-1 px-3">
            <img src="@/assets/arrow-down.png" class="bg-lightgray radius-40 p-1 mx-1" width="15" alt="">
            <span id="demo1" class="h6 text-light">
              لیست دامنه ها
            </span>
          </div>
        </template>
        <b-dropdown-item 
          @click="getName(slide.name)"
          v-for="slide in slides"
          :key="slide.id"
          href="#"
        >
          {{ slide.name }}
        </b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="container d-none d-md-block">
      <div class="domain_list row mt-5">
        <div class="col-2 align-items-center d-flex justify-content-end">
          <span @click="domainList" id="demo" class="p-2 action">
            لیست دامنه ها >
          </span>
        </div>
        <div class="col-8">
          <transition name="slide-fade">
            <div v-if="show_domains" class="domian_carousel d-flex">
              <carousel
                :paginationEnabled="false"
                :perPageCustom="[
                  [480, 2],
                  [768, 4],
                ]"
                class="w-100"
              >
                <slide
                  v-for="slide in slides"
                  :key="slide.id"
                  class="carousel_slide px-3 py-2"
                >
                  <div @click="getName(slide.name)">
                    {{ slide.name }}
                  </div>
                </slide>
              </carousel>

              <span class="add_domain px-3 py-2 mx-2"> افزودن دامنه + </span>
            </div>
          </transition>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "slide one",
        },
        {
          id: 2,
          name: "slide two",
        },
        {
          id: 3,
          name: "slide three",
        },
        {
          id: 4,
          name: "slide four",
        },
        {
          id: 5,
          name: "slide five",
        },
      ],
      show_domains: false,
      name: "",
    };
  },
  mounted() {
    if (localStorage.slide_name) {
      this.name = localStorage.slide_name;
    }
  },
  methods: {
    actionToggle() {
      const action = document.querySelector(".action");
      action.classList.toggle("active");
      var x = document.getElementById("demo");
      if (x.innerHTML === "X") {
        x.innerHTML = "< لیست دامنه ها";
      }
      if ((x.innerHTML = "< لیست دامنه ها)")) {
        x.innerHTML = "X";
      } else {
        x.innerHTML = "< لیست دامنه ها";
      }
    },
    getName(slide_name) {
      var y = document.getElementById("demo");
      var z = document.getElementById("demo1");
      y.innerHTML = slide_name + " > ";
      z.innerHTML = slide_name ;
      localStorage.slide_name = slide_name;
      this.show_domains = false;
    },
    domainList() {
      this.show_domains = !this.show_domains;
    },
  },
};
</script>

<style>
.dropdown-toggle:focus {
  box-shadow: none;
}
.dropdown-menu {
  background:rgba(255, 255, 255, 0.6);
  border-radius:15px;
  border: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
.bg-blue {
  background: #6da9c4!important
}
.radius-40 {
  border-radius: 40px;
}
.bg-lightgray{
  background: rgb(233, 233, 233);
}
.text-gray {
  color: rgb(173, 173, 173);
}
.add_domain {
  background: #9ad2eb;
  color: #fff;
  border-radius: 40px;
  display: block ruby;
}
.action {
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  background: #6da9c4;
  color: #fff;
  z-index: 3;
  transition: 0.3s ease-in-out;
}

.domian_carousel .carousel_slide {
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.5, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
