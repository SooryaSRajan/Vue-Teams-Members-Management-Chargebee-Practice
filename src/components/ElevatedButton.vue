<template>
  <button @click="onClick">
    <div class="button-flex">
      <slot name="icon"></slot>
      <div :style=" isAppBoxSlotActive ? {'padding-left': '10px'} : ''">
        <slot></slot>
      </div>
    </div>
  </button>
</template>


<script lang="ts">
import {Vue} from "vue-class-component";
import {Prop} from 'vue-property-decorator';

export default class ElevatedButton extends Vue {

  @Prop() private onClick!: () => void;

  get isAppBoxSlotActive() {
    console.log(this.$slots);
    return !!this.$slots['icon'];
  }
}

</script>

<style scoped>
button {
  min-width: 130px;
  background-color: #6724ea;
  color: white;
  padding: 8px 35px 8px 35px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}

.button-flex{
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #310d77;
}

</style>