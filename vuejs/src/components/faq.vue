<template>
  <div class="faq-accordion" v-bind:class="rootClassName"
    ><div data-role="accordion-container" class="faq-element accordion-element"
      ><div class="faq-details"
        ><span class="faq-text"
          >What is sit amet, consectetur adipiscing elit, sed do?
          <span v-html="rawnxe4"></span></span
        ><span data-role="accordion-content" class="faq-text01"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id.
          <span v-html="raw21nf"></span></span></div
      ><div data-role="accordion-icon"
        ><svg viewBox="0 0 1024 1024" class="faq-icon">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
          ></path></svg></div></div
    ><div data-role="accordion-container" class="faq-element1 accordion-element"
      ><div class="faq-details1"
        ><span class="faq-text02"
          >We&apos;ll update amet, consectetur adipiscing elit until you&apos;re
          100% happy.</span
        ><span data-role="accordion-content" class="faq-text03"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id.
          <span v-html="rawhqq5"></span></span></div
      ><div data-role="accordion-icon"
        ><svg viewBox="0 0 1024 1024" class="faq-icon02">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
          ></path></svg></div></div
    ><div data-role="accordion-container" class="faq-element2 accordion-element"
      ><div class="faq-details2"
        ><span class="faq-text04"
          >Is it really sit amet, consectetur adipiscing elit, sed do?</span
        ><span data-role="accordion-content" class="faq-text05"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id.
          <span v-html="raw142w"></span></span></div
      ><div data-role="accordion-icon"
        ><svg viewBox="0 0 1024 1024" class="faq-icon04">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
          ></path></svg></div></div
    ><div data-role="accordion-container" class="faq-element3 accordion-element"
      ><div class="faq-details3"
        ><span class="faq-text06"
          >We work, what is sit amet, consectetur adipiscing elit, sed do sint
          occaecat cupidatat non proident</span
        ><span data-role="accordion-content" class="faq-text07"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id.
          <span v-html="raw1sph"></span></span></div
      ><div data-role="accordion-icon"
        ><svg viewBox="0 0 1024 1024" class="faq-icon06">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
          ></path></svg></div></div
    ><div data-role="accordion-container" class="faq-element4 accordion-element"
      ><div class="faq-details4"
        ><span class="faq-text08"
          >What is sit amet, consectetur adipiscing elit, sed do?
          <span v-html="rawi2mu"></span></span
        ><span data-role="accordion-content" class="faq-text09"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id.
          <span v-html="rawklpl"></span></span></div
      ><div data-role="accordion-icon"
        ><svg viewBox="0 0 1024 1024" class="faq-icon08">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
          ></path></svg></div></div
    ><div data-role="accordion-container" class="faq-element5 accordion-element"
      ><div class="faq-details5"
        ><span class="faq-text10"
          >Amet, consectetur adipiscing elit mollit anim id est laborum.</span
        ><span data-role="accordion-content" class="faq-text11"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id.
          <span v-html="rawiscg"></span></span></div
      ><div data-role="accordion-icon"
        ><svg viewBox="0 0 1024 1024" class="faq-icon10">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
          ></path></svg></div></div
  ></div>
</template>

<script>
export default {
  name: 'FAQ',
  props: {
    rootClassName: String,
  },
  data() {
    return {
      rawnxe4: ' ',
      raw21nf: ' ',
      rawhqq5: ' ',
      raw142w: ' ',
      raw1sph: ' ',
      rawi2mu: ' ',
      rawklpl: ' ',
      rawiscg: ' ',
    }
  },
}
</script>

<style scoped>
.faq-accordion {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.faq-element {
  width: 100%;
  max-width: 800px;
  padding-top: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-threeunits);
}
.faq-details {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.faq-text {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 28px;
}
.faq-text01 {
  color: rgb(204, 204, 204);
  width: 100%;
  font-family: Poppins;
  line-height: 24px;
  user-select: text;
}
.faq-icon {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.faq-element1 {
  width: 100%;
  max-width: 800px;
  padding-top: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-threeunits);
}
.faq-details1 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.faq-text02 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 28px;
}
.faq-text03 {
  color: rgb(204, 204, 204);
  width: 100%;
  font-family: Poppins;
  line-height: 28px;
  user-select: text;
}
.faq-icon02 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.faq-element2 {
  width: 100%;
  max-width: 800px;
  padding-top: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-threeunits);
}
.faq-details2 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.faq-text04 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 28px;
}
.faq-text05 {
  color: rgb(204, 204, 204);
  width: 100%;
  font-family: Poppins;
  line-height: 28px;
  user-select: text;
}
.faq-icon04 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.faq-element3 {
  width: 100%;
  max-width: 800px;
  padding-top: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-threeunits);
}
.faq-details3 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.faq-text06 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 28px;
}
.faq-text07 {
  color: rgb(204, 204, 204);
  width: 100%;
  font-family: Poppins;
  line-height: 28px;
  user-select: text;
}
.faq-icon06 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.faq-element4 {
  width: 100%;
  max-width: 800px;
  padding-top: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-threeunits);
}
.faq-details4 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.faq-text08 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 28px;
}
.faq-text09 {
  color: rgb(204, 204, 204);
  width: 100%;
  font-family: Poppins;
  line-height: 28px;
  user-select: text;
}
.faq-icon08 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.faq-element5 {
  width: 100%;
  max-width: 800px;
  padding-top: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-threeunits);
}
.faq-details5 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.faq-text10 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 28px;
}
.faq-text11 {
  color: rgb(204, 204, 204);
  width: 100%;
  font-family: Poppins;
  line-height: 28px;
  user-select: text;
}
.faq-icon10 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

@media(max-width: 767px) {
  .faq-text {
    font-size: 16px;
    line-height: 24px;
  }
  .faq-text02 {
    font-size: 16px;
    line-height: 24px;
  }
  .faq-text04 {
    font-size: 16px;
    line-height: 24px;
  }
  .faq-text06 {
    font-size: 16px;
    line-height: 24px;
  }
  .faq-text08 {
    font-size: 16px;
    line-height: 24px;
  }
  .faq-text10 {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
