<template>
  <div class="container-fluid">
    <div class="home flex-grow-1 d-flex flex-column">
      <div class="row mb-3">
        <div class="col-12 p-0">
          <img class="banner" src="//placehold.it/1000x1000" alt="">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 pl-5">
          <p>
            <strong>OUR FOOD TRUCK</strong>
          </p>
          <h3>
            The BBQ Guy
          </h3>
          <p>
            has been serving the Treasure valley for over 8 years! We opened our first truck at the end of 2012, serving different types
            of "Man Food". We deliver a variety of high quality "Man Food" like pulled pork sandwichs and brisket sandwichs all the way to turkey legs and ribs.
          </p>
          <p>
            Serving our famous fries and fry sauce people come from all around to feast on our bbq.
          </p>
        </div>
        <div class="col-md-6  ml-2 p-5">
          <img class="img1 w-100" src="//placehold.it/200x200" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.banner{
  min-width: 100%;
  max-height: 50vh;
  }
.img1{
  max-width: 100% auto;
}
</style>
