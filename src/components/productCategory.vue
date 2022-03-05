<template>
  <div class="domain_list">
    <div class="action">
       <span @click="actionToggle();" id="demo" class="m-5 p-2">
         < لیست دامنه ها 
        </span>
        
        <div class="domian_carousel d-flex"> 
            <carousel :perPageCustom="[[480, 2], [768, 6]]" class="w-100">
                <slide class="carousel_slide">
                    Slide 1 Content
                </slide>
                <slide class="carousel_slide">
                    Slide 2 Content
                </slide>
                <slide class="carousel_slide">
                    Slide 3 Content
                </slide>
                <slide class="carousel_slide">
                    Slide 4 Content
                </slide>
            </carousel>
            
            <span class="add_domain">
                افزودن دامنه +
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        actionToggle() {
            const action = document.querySelector('.action');
            action.classList.toggle('active');
            var x = document.getElementById("demo");
            if (x.innerHTML === "X") {
                x.innerHTML = "< لیست دامنه ها"
            } else {
                x.innerHTML = "X";
            }
        }
    }
}
</script>

<style scoped>
.domain_list {
    display: flex;
    justify-content: end;
}
.action #demo {
  width: fit-content;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0,0,0,0.1);
  display: flex;
  background: #6da9c4;
  color: #fff;
  justify-content: center;
  align-items: center;
  transition: .3s ease-in-out;
}
.action .domian_carousel {
  position: absolute;
  left: 170px;
  top: 23px;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  opacity: 0;
  visibility: hidden;
  transition: .5s;
}

.action.active .domian_carousel {
  opacity: 1;
  visibility: visible;
  transition: .3s;
}

.action .domian_carousel .carousel_slide {
  list-style:none;
  text-decoration: none;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0;
  margin: 5px;
  border-radius: 40px;
  box-shadow: 0 5px 5px rgba(0,0,0,0.1); 
}
</style>
