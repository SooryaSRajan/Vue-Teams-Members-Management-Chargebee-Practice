<template>
  <div class="home">
    <div class="col">
      <div>
        <h2>
          Team Members
        </h2>
        <span>({{ count }})</span>
      </div>
      <ElevatedButton>
        <template v-slot:icon>
          <i class="fa fa-plus" style="font-size: 14px;"></i>
        </template>
        Invite Members
      </ElevatedButton>
    </div>
    <div class="col">
      <ListComponent
          v-for="(member, index) in members"
          :key="member.email"
          :name="member.name"
          :email="member.email"
          :role="member.role"
          :index="index"
          :isCurrentUser="member.isCurrentUser"></ListComponent>

    </div>
    <div class="col"/>

  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore, Role} from "@/store";
import {mapGetters} from 'vuex'
import ElevatedButton from "@/components/ElevatedButton.vue";
import ListComponent from "@/components/ListComponent.vue";

@Options({
  components: {ListComponent, ElevatedButton},
  computed: {
    ...mapGetters({
      members: 'getAllMembers',
      count: 'getCount'
    })
  }
})
export default class HomeView extends Vue {
  members!: { name: string, email: string, role: Role, isCurrentUser: boolean }[]
  count!: number

  mounted() {
    window.addEventListener('click', (e : any) => {
      if(!e.target.matches('.dropdown-btn')){
        const dropdowns = document.querySelectorAll<HTMLElement>('.drop-down-content');
        dropdowns.forEach(dropdown => {
          dropdown.style.display = "none";
        });
      }
    })
  }

  store = useStore()

  addNewRow() {
    this.store.commit('addMember', {
      name: 'New Member',
      email: 'a@gmail.com',
      role: Role.Analyst,
      isCurrentUser: false
    })
  }

}
</script>

<style scoped lang="scss">

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 70px;
  height: 100%;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
}

.col:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 25px;

    h2 {
      font-size: 25px;
      padding: 0;
      margin: 0;
    }

    span {
      color: #adadad;
      padding-left: 5px;
      font-weight: 500;
    }
  }

}


.col:nth-child(2) {
  flex: 1;
  padding: 0;
  background-color: white;
  justify-content: start;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
}


</style>
