<template>
  <div class="modal" :class="{'is-active': showModal}">
    <div class="modal-background" @click="showModal = !showModal"></div>
    <div class="modal-content">
      <slot/>
    </div>
    <button class="modal-close" @click="showModal = !showModal"></button>
  </div>
</template>

<script>
  export default {
    props: {
      gebId: {
        type: [String, Number],
        required: true,
      }
    },
    created: function () {
      this.sub = this.$geb.getFilteredBus({ gebId: this.gebId }).subscribe(data => {
        this.showModal = !this.showModal
      })
    },
    data () {
      return {
        showModal: false,
      }
    }
  }
</script>
