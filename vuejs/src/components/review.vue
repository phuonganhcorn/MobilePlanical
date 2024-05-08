<template>
  <section class="review-card" v-bind:class="rootClassName"
    ><div class="review-stars"
      ><svg viewBox="0 0 1024 1024" class="review-icon">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="review-icon02">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="review-icon04">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="review-icon06">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="review-icon08">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        ></path></svg></div
    ><main class="review-content"
      ><p class="review-quote">{{ quote }}</p
      ><div class="review-author"
        ><img :alt="avatarAlt" :src="avatarSrc" class="review-avatar" /><div
          class="review-details"
          ><h1 class="review-author1">{{ author }}</h1
          ><label class="review-position">{{ position }}</label></div
        ></div
      ></main
    ></section
  >
</template>

<script>
export default {
  name: 'Review',
  props: {
    quote: {
      type: String,
      default:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
    },
    author: {
      type: String,
      default: 'Sima Mosbacher',
    },
    rootClassName: String,
    avatarSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3NzU5NDE3&ixlib=rb-4.0.3&w=200',
    },
    position: {
      type: String,
      default: 'Manager',
    },
    avatarAlt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.review-card {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.review-stars {
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.review-icon {
  fill: #FFDE6A;
  width: 16px;
  height: 16px;
}
.review-icon02 {
  fill: #FFDE6A;
  width: 16px;
  height: 16px;
}
.review-icon04 {
  fill: #FFDE6A;
  width: 16px;
  height: 16px;
}
.review-icon06 {
  fill: #FFDE6A;
  width: 16px;
  height: 16px;
}
.review-icon08 {
  fill: #FFDE6A;
  width: 16px;
  height: 16px;
}
.review-content {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.review-quote {
  color: #CCCCCC;
  font-size: 18px;
  font-family: Poppins;
  line-height: 25px;
}
.review-author {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.review-avatar {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}
.review-details {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.review-author1 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.review-position {
  color: #CCCCCC;
  font-size: 14px;
  font-family: Poppins;
  line-height: 20px;
}






@media(max-width: 991px) {
  .review-card {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>
