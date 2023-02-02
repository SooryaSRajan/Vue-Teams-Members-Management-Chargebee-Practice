<template>
  <div class="alert">
    <div class="card">
      <div class="row">
        <i class="fa fa-info-circle"></i>
        <h2>{{ email }} will not be able to access this site.</h2>
      </div>
      <div class="buttons">
        <button @click="$emit('close')">Cancel</button>
        <button @click="deleteEmail(email)">Remove Member</button>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator/lib/decorators/Prop';

export default class RemoveAlertDialog extends Vue {
  @Prop() private deleteEmail!: (email: string) => void;
  @Prop() private email!: string;
}
</script>

<style scoped lang="scss">

.alert {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .card{
    background-color: white;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    text-align: start;

    .row{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 20px;

      i{
        padding-right: 10px;
        font-size: 22px;
        color: #fb6827;
      }

      h2{
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        padding: 0;
      }
    }

    .buttons{
      display: flex;
      flex-direction: row;
      justify-content: end;
      width: 100%;

      button{
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;

        &:nth-child(1){
          background-color: transparent;
          color: #494949;
          margin-right: 10px;
        }

        &:nth-child(2){
          background-color: #fb6827;
          color: white;
          width: 150px;
        }
      }
    }
  }


}

</style>