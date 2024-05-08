<template>
  <div class="mark-mark"
    ><div class="mark-icon"
      ><svg viewBox="0 0 1024 1024" class="mark-icon1">
        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path></svg></div
    ><p class="mark-label">{{ label }}</p></div
  >
</template>

<script>
export default {
  name: 'Mark',
  props: {
    label: {
      type: String,
      default: 'Duis aute irure dolor in reprehenderit',
    },
  },
}
</script>

<style scoped>
.mark-mark {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.mark-icon {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  background-color: #292929;
}
.mark-icon1 {
  fill: #C6FF4B;
  width: 12px;
  height: 12px;
}
.mark-label {
  color: rgb(255, 255, 255);
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 24px;
}
</style>
