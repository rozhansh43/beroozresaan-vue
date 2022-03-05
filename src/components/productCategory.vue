<template>
  <div class="add_domain">
    <div class="action">
      <span @click="actionToggle();" id="demo" class="m-5 py-2 px-2">+ افزودن دامنه</span>
      <carousel :perPageCustom="[[480, 2], [768, 6]]" class="domian_carousel">
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
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        actionToggle() {
            const action = document.querySelector('.action');
            action.classList.toggle('active');
            var x = document.getElementById("demo");
            if (x.innerHTML === "X") {
                x.innerHTML = "افزودن دامنه +";
            } else {
                x.innerHTML = "X";
            }
        }
    }
}
</script>

<style scoped>
.add_domain {
    display: flex;
    justify-content: end;
}
.action span {
  width: fit-content;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0,0,0,0.1);
  display: flex;
  background: #fff;
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
