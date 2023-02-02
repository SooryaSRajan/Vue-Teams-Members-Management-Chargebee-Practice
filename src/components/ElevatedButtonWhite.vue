<template>
  <button @click="onClick">
    <div class="button-flex">
      <div>
        <slot></slot>
      </div>
    </div>
  </button>
</template>


<script lang="ts">
import {Vue} from "vue-class-component";
import {Prop} from 'vue-property-decorator/lib/decorators/Prop';

export default class ElevatedButtonWhite extends Vue {

  @Prop() private onClick!: () => void;

}

</script>

<style scoped>
button {
  min-width: 130px;
  background-color: white;
  color: #5a1fcb;
  padding: 8px 35px 8px 35px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}

.button-flex{
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: rgba(90, 31, 203, 0.38);
}

</style>