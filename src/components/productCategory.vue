<template>
  <div class="container">
      
        My name is {{name}}
    <div class="domain_list row mt-5">
      <div class="col-2">
          
      </div>
      <div class="col-8">
        <transition name="slide-fade">
            <div v-if="show_domains" class="domian_carousel d-flex">
            <span class="add_domain px-3 py-2 m-auto"> افزودن دامنه + </span>

            <carousel
                :perPageCustom="[
                [480, 2],
                [768, 4],
                ]"
                class="w-100  my-2"
            >
                <slide
                v-for="slide in slides"
                :key="slide.id"
                class="carousel_slide mx-1 px-3 py-2"
                >
                <div @click="getName(slide.name)">
                    {{ slide.name }}
                </div>
                </slide>
            </carousel>
            </div>
        </transition>
      </div>

      <div class="col-2 align-items-center d-flex">
        <span @click="domainList" id="demo" class="p-2 action">
          < لیست دامنه ها
        </span>
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
      ],
      show_domains: false,
      name: ''
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
      console.log("ihnujhu");
      y.innerHTML = ">" + slide_name ;
      localStorage.slide_name = slide_name 
      this.show_domains = false
    },
    domainList() {
      this.show_domains = !this.show_domains;
    },
  },
};
</script>

<style scoped>
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
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.5, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
