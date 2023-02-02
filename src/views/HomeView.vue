<template>
  <div class="home">
    <div class="col">
      <v-btn color="primary">
        <v-icon
            size="large"
            color="green-darken-2"
        >
          mdi-domain
        </v-icon>
        Invite Members
      </v-btn>
    </div>
    <div class="col">
      Row here
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore, Role} from "@/store";
import {mapGetters} from 'vuex'

@Options({
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

//color variable #6724ea declare below
$secondary-color: #6724ea;

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 40px 70px;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
}

.col:nth-child(2) {
  flex: 1;
}


</style>
