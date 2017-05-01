<template>
  <div class="hello">
    <div>
      <button
        class="button is-info"
        v-geb-click-emit="{gebId:'hello-modal'}"
      >
        Vue-geb directive
      </button>
    </div>
    <div>
      <button
        class="button is-primary"
        @click="$store.dispatch('open_modal', {gebId:'hello-modal'})"
      >
        Vue-geb from Vuex Action
      </button>
    </div>
    <!-- Don't worry, this modal can be put in any file you want :)-->
    <Modal gebId="hello-modal">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete"></button>
        </header>
        <section class="modal-card-body">
          Bla bla bla
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">Save changes</a>
          <a class="button" v-geb-click-emit="{gebId:'hello-modal'}">Cancel</a>
        </footer>
      </div>
    </Modal>
  </div>
</template>

<script>
  import { Modal } from '../plugin/plugin'
  export default {
    name: 'hello',
    data () {
      return {}
    },
    components: {Modal}
  }
</script>

<style>

  .button {
    margin: 1em;
  }
</style>
