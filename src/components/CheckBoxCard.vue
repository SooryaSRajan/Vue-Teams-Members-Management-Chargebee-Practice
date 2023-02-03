<template>
  <div class="check-box-card">
    <div class="row-el">
      <input type="checkbox" @change="onChange($event.target.checked)" v-model="checked">
    </div>
    <div class="row-el">
      <div class="title">
        {{ title }}
      </div>
      <div class="sub-title">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Prop} from 'vue-property-decorator';
import {Vue} from "vue-class-component";

export default class CheckBoxCard extends Vue {

  @Prop() public title!: string;
  @Prop() public subtitle!: string;
  @Prop() public checked!: boolean;

  @Prop() private onChange!: (checked: boolean) => void;

}
</script>

<style scoped lang="scss">

.check-box-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0ecf4;
  padding-top: 10px;
  padding-bottom: 20px;

  input {
    width: 17px;
    height: 17px;
  }

  .row-el:nth-child(2) {
    margin-left: 10px;

    .title {
      font-size: 18px;
      font-weight: 500;
      color: #1c1c1c;
    }

    .sub-title {
      margin-top: 6px;
      font-size: 15px;
      font-weight: 500;
      color: #5e5e5e;
    }

  }

}

</style>
