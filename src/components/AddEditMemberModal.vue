<template>
  <div class="add-modify-member">
    <div class="card">
      <div class="row-el">
        <h3>
          {{ isEdit ? "Change role for " + email : "Invite a member to use ChargeBee" }}
        </h3>
        <h5 v-if="!isEdit">
          You can either let your team members access everything in the site, or assign specific roles to them.
        </h5>
        <label for="name" v-if="!isEdit">Name</label>
        <input id="name" type="text" v-model="nameInput" placeholder="Name" v-if="!isEdit" class="input-data">

        <label for="email" style="margin-top: 20px" v-if="!isEdit">Email</label>
        <input id="email" type="email" v-model="emailInput" placeholder="Email" v-if="!isEdit" class="input-data">

        <span>Select user access level</span>

        <CheckBoxCard :on-change="techSupportChanged" :checked="techSupportChecked" title="Tech Support"
                      subtitle="User can view Subscriptions and Product Catalog tabs. Can also view, add comments to, send, download individual Invoices/Credit Notes."></CheckBoxCard>
        <CheckBoxCard :on-change="analystChanged" :checked="analystChecked" title="Analyst"
                      subtitle="In addition to Tech Support level access, user will have access to the SaaS metrics report."></CheckBoxCard>
        <CheckBoxCard :on-change="adminChanged" :checked="adminChecked" title="Admin"
                      subtitle="Access everything in Chargebee."></CheckBoxCard>

      </div>
      <div class="row-el">
        <span>
          <ElevatedButton :on-click="isEdit ? update : invite">{{ isEdit ? "Update" : "Invite" }} </ElevatedButton>
        </span>
        <span>
          <ElevatedButtonWhite :on-click="close">Cancel</ElevatedButtonWhite>
        </span>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator/lib/decorators/Prop';
import ElevatedButton from "@/components/ElevatedButton.vue";
import ElevatedButtonWhite from "@/components/ElevatedButtonWhite.vue";
import {Role, useStore} from "@/store";
import CheckBoxCard from "@/components/CheckBoxCard.vue";

@Options({
  components: {
    CheckBoxCard,
    ElevatedButtonWhite,
    ElevatedButton
  },
})
export default class AddEditMemberModal extends Vue {
  @Prop() private email!: string;
  @Prop() private isEdit!: boolean;

  techSupportChecked = false;
  analystChecked = false;
  adminChecked = false;

  store = useStore();

  nameInput = "";
  emailInput = "";

  role!: Role;

  close() {
    this.$emit('close');
  }

  invite() {
    if (this.emailInput === "" || this.nameInput === "" || !this.role) {
      let input = document.querySelectorAll<HTMLElement>(".input-data")

      if (this.nameInput === "") {
        input[0].style.border = "1px solid red";
      }
      else{
        input[0].style.border = "1px solid #e0e0e0";
      }

      if (this.emailInput === "") {
        input[1].style.border = "1px solid red";
      }
      else{
        input[1].style.border = "1px solid #e0e0e0";
      }

      if(!this.role){
        alert("Please select a role");
      }

      return;
    } else {

      if (!this.emailInput.match(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        let input = document.querySelectorAll<HTMLElement>(".input-data")
        input[1].style.border = "1px solid red";
        return;
      }

      let input = document.querySelectorAll<HTMLElement>(".input-data")
      for (let i = 0; i < input.length; i++) {
        input[i].style.border = "1px solid #e0e0e0";
      }

    }
    this.store.commit('addMember', {
      name: this.nameInput,
      email: this.emailInput,
      role: this.role,
      isCurrentUser: false
    })
    this.close();
  }

  update() {
    //check if not null
    if (this.email === "") {
      alert("Please select a member");
      return;
    }

    if (!this.role) {
      alert("Please select a role");
      return;
    }

    this.store.commit('updateMember', {
      email: this.email,
      role: this.role
    })
    this.close();
  }

  techSupportChanged(checked: boolean) {
    this.techSupportChecked = checked;
    if (checked) {
      this.role = Role.TechSupport;
      this.analystChecked = false;
      this.adminChecked = false;
    }
  }

  analystChanged(checked: boolean) {
    this.analystChecked = checked;
    if (checked) {
      this.role = Role.Analyst;
      this.techSupportChecked = false;
      this.adminChecked = false;
    }
  }

  adminChanged(checked: boolean) {
    this.adminChecked = checked;
    if (checked) {
      this.role = Role.Admin;
      this.techSupportChecked = false;
      this.analystChecked = false;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style scoped lang="scss">


.add-modify-member {
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

  .card {
    margin: 70px;
    background-color: white;
    width: 100%;
    max-height: 90%;
    overflow-y: scroll;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 45px;
    display: flex;
    flex-direction: row;

    .row-el {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
    }

    .row-el:nth-child(1) {
      flex: 5;
      margin-right: 70px;
      text-align: justify;

      h3 {
        padding: 0;
        font-size: 22px;
        margin: 0;
      }

      h5 {
        margin-top: 14px;
        font-size: 16px;
        font-weight: 500;
        color: #6e6e6e;
      }

      label {
        font-size: 14px;
        font-weight: 500;
        color: #6e6e6e;
      }

      span {
        font-size: 14px;
        font-weight: 500;
        color: #6e6e6e;
        margin-top: 30px;
      }

      input {
        width: 100%;
        height: 40px;
        padding: 10px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        font-size: 16px;
        margin-top: 8px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
      }
    }

    .row-el:nth-child(2) {
      flex: 2;

      span {
        margin-left: 10px;
        margin-top: 10px;
      }
    }

  }

  @media screen and (max-width: 700px) {
    .card {
      flex-direction: column;

      .row-el:nth-child(1) {
        margin-right: 0;
      }

      .row-el:nth-child(2) {
        flex: 1;
        margin-top: 20px;
        margin-left: 0;
        align-items: center;
        justify-content: center;
      }


    }
  }

}
</style>
