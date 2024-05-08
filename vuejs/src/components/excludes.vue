<template>
  <div class="excludes-mark" v-bind:class="rootClassName"
    ><div class="excludes-icon"
      ><svg viewBox="0 0 1024 1024" class="excludes-icon1">
        <path
          d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
        ></path></svg></div
    ><label class="excludes-label">{{ label }}</label></div
  >
</template>

<script>
export default {
  name: 'Excludes',
  props: {
    label: {
      type: String,
      default: 'Sed ut pespiciatis unde omnis',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.excludes-mark {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.excludes-icon {
  display: flex;
  padding: 5px;
  align-items: center;
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  background-color: #414141;
}
.excludes-icon1 {
  fill: #0F0F0F;
  width: 12px;
  height: 12px;
}
.excludes-label {
  color: #75797E;
  font-size: 14px;
  font-family: Poppins;
  line-height: 25px;
}

















</style>
