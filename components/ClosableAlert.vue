<template>
  <div v-if="isOpened" :class="`alert alert-${variant}`" role="alert">
    <div class="d-flex">
      <p class="my-auto">
        {{ text }}
      </p>
      <div class="ml-auto">
        <button class="bg-transparent border-0" @click="closeAlert()">
          <img
            src="@/public/images/icon-cross.png"
            class="icon-cross"
            width="25"
            height="25"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    variant: String
  },
  data() {
    return {
      isOpened: true
    };
  },
  methods: {
    closeAlert() {
      this.isOpened = false;
    }
  }
};
</script>
