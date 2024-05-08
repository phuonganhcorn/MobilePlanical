<template>
  <div class="accordion-accordion" v-bind:class="rootClassName"
    ><div data-role="accordion-container" class="accordion-element"
      ><div class="accordion-details"
        ><span class="accordion-text">{{ text }}</span
        ><span data-role="accordion-content" class="accordion-text1"
          >{{ text1 }}</span
        ></div
      ><svg
        viewBox="0 0 1024 1024"
        data-role="accordion-icon"
        class="accordion-icon"
      >
        <path
          d="M366 708l196-196-196-196 60-60 256 256-256 256z"
        ></path></svg></div
    ><div
      data-role="accordion-container"
      class="accordion-element1 accordion-element"
      ><div class="accordion-details1"
        ><span class="accordion-text2">{{ text2 }}</span
        ><span data-role="accordion-content" class="accordion-text3"
          >{{ text3 }}</span
        ></div
      ><svg
        viewBox="0 0 1024 1024"
        data-role="accordion-icon"
        class="accordion-icon2"
      >
        <path
          d="M366 708l196-196-196-196 60-60 256 256-256 256z"
        ></path></svg></div
    ><div
      data-role="accordion-container"
      class="accordion-element2 accordion-element"
      ><div class="accordion-details2"
        ><span class="accordion-text4">{{ text4 }}</span
        ><span data-role="accordion-content" class="accordion-text5"
          >{{ text5 }}</span
        ></div
      ><svg
        viewBox="0 0 1024 1024"
        data-role="accordion-icon"
        class="accordion-icon4"
      >
        <path
          d="M366 708l196-196-196-196 60-60 256 256-256 256z"
        ></path></svg></div
  ></div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    text2: {
      type: String,
      default: 'Nemo enim ipsam voluptatem quia voluptas',
    },
    text1: {
      type: String,
      default:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
    },
    text: {
      type: String,
      default: 'Aliquam quaerat voluptatem',
    },
    text4: {
      type: String,
      default: 'Magnam aliquam quaerat voluptatem',
    },
    text5: {
      type: String,
      default:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
    },
    text3: {
      type: String,
      default:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.accordion-accordion {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.accordion-element {
  width: 640px;
  user-select: none;
}
.accordion-details {
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.accordion-text {
  color: var(--dl-color-gray-white);
  width: 100%;
  font-size: 18px;
  max-width: 535px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 27px;
}
.accordion-text1 {
  color: var(--dl-color-gray-900);
  width: 100%;
  max-width: 535px;
  font-family: Poppins;
  line-height: 24px;
  user-select: text;
}
.accordion-icon {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.accordion-element1 {
  width: 640px;
  user-select: none;
}
.accordion-details1 {
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.accordion-text2 {
  color: var(--dl-color-gray-white);
  width: 100%;
  font-size: 18px;
  max-width: 535px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 27px;
}
.accordion-text3 {
  color: var(--dl-color-gray-900);
  width: 100%;
  max-width: 535px;
  font-family: Poppins;
  line-height: 24px;
  user-select: text;
}
.accordion-icon2 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.accordion-element2 {
  width: 640px;
  user-select: none;
}
.accordion-details2 {
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.accordion-text4 {
  color: var(--dl-color-gray-white);
  width: 100%;
  font-size: 18px;
  max-width: 535px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 27px;
}
.accordion-text5 {
  color: var(--dl-color-gray-900);
  width: 100%;
  max-width: 535px;
  font-family: Poppins;
  line-height: 24px;
  user-select: text;
}
.accordion-icon4 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

@media(max-width: 767px) {
  .accordion-element {
    width: 100%;
    max-width: 560px;
  }
  .accordion-text {
    font-size: 16px;
    line-height: 24px;
  }
  .accordion-element1 {
    width: 100%;
    max-width: 560px;
  }
  .accordion-text2 {
    font-size: 16px;
  }
  .accordion-element2 {
    width: 100%;
    max-width: 560px;
  }
  .accordion-text4 {
    font-size: 16px;
  }
}
@media(max-width: 479px) {
  .accordion-element {
    width: 350px;
    max-width: auto;
  }
  .accordion-element1 {
    width: 350px;
    max-width: auto;
  }
  .accordion-element2 {
    width: 350px;
    max-width: auto;
  }
}
</style>
