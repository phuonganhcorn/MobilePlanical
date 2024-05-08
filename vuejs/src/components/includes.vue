<template>
  <div class="includes-mark" v-bind:class="rootClassName"
    ><div class="includes-icon"
      ><svg viewBox="0 0 1024 1024" class="includes-icon1">
        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path></svg></div
    ><label class="includes-label">{{ label }}</label></div
  >
</template>

<script>
export default {
  name: 'Includes',
  props: {
    rootClassName: String,
    label: {
      type: String,
      default: 'Sed ut pespiciatis unde omnis',
    },
  },
}
</script>

<style scoped>
.includes-mark {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.includes-icon {
  display: flex;
  padding: 5px;
  align-items: center;
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  background-color: #414141;
}
.includes-icon1 {
  fill: #C6FF4B;
  width: 12px;
  height: 12px;
}
.includes-label {
  color: #C2C6CC;
  font-size: 14px;
  font-family: Poppins;
  line-height: 25px;
}





















</style>
