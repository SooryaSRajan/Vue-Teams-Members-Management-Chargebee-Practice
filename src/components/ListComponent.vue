<template>
  <div class="list-item">
    <div class="left-items">
      <div class="circular-icon">
          {{name[0]}}
      </div>
      <div class="user-info">
        <div class="user-name-and-role">
          <span class="user-you" v-if="isCurrentUser">You .</span>
          <span class="user-name">{{name}}</span>
          <span class="user-role-you" v-if="isCurrentUser">{{role}}</span>
          <span class="user-role" v-else>({{role}})</span>
        </div>
        <div class="user-email">
          {{email}}
        </div>
      </div>
    </div>
    <div class="dropdown">
        <button @click="controlDropDown" class="dropdown-btn">
          <i class="fa fa-ellipsis-v" style="font-size: 16px;"></i>
        </button>
        <div class="drop-down-content">
          <button>Edit Role</button>
          <button>Remove</button>
        </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator/lib/decorators/Prop';

export default class ListComponent extends Vue {

  @Prop() private email!: string;
  @Prop() private name!: string;
  @Prop() private role!: string;
  @Prop() private isCurrentUser!: boolean;
  @Prop() private index!: number;

  controlDropDown() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    const dropdowns = document.querySelectorAll<HTMLElement>('.drop-down-content');
    dropdowns.forEach(dropdown => {
      dropdown.style.display = "none";
    });

    const dropdown = document.querySelectorAll<HTMLElement>('.drop-down-content')[this.index]!;

    if (dropdown.style.display === "flex") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "flex";
    }
  }

}
</script>

<!--sass-->
<style scoped lang="scss">
.list-item{
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0ecf4;
  height: 70px;

  .left-items{
    margin-left: 30px;
    padding: 4px;
    display: flex;

    .circular-icon{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #f68541;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 500;
      margin-right: 20px;
    }

    .user-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .user-name-and-role{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .user-you{
          font-size: 16px;
          font-weight: 600;
          color: #000000;
        }

        .user-name{
          font-size: 16px;
          font-weight: 400;
          margin-right: 5px;
        }

        .user-role{
          font-style: italic;
          font-size: 14px;
          font-weight: 400;
          color: #838383;
        }

        .user-role-you{
          border: 1px solid #6724ea;
          border-radius: 2px;
          padding: 3px;
          font-style: italic;
          font-size: 12px;
          font-weight: 600;
          color: #6724ea;
        }
      }

      .user-email{
        font-size: 14px;
        font-weight: 400;
        color: #707070;
      }
    }
  }

  .dropdown{
    margin-right: 10px;
    padding: 10px;
    display: inline-block;

    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      transition: ease-in-out 0.2s;
      width: 35px;
      height: 35px;
      border-radius: 5px;
    }

    button:hover{
      background-color: rgba(215, 206, 255, 0.87);
    }

    .drop-down-content{
      display: none;
      flex-direction: column;
      position: absolute;
      right: 90px;
      border-radius: 3px;
      background-color: #f9f9f9;
      width: 160px;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      z-index: 1;

      button{
        width: 100%;
        text-align: start;
        padding-left: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 0;
        font-size: 12px;
      }


    }
  }
}

</style>