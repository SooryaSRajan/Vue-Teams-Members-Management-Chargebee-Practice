import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
    key: 'team-members',
    storage: window.localStorage,
});

export enum Role {
    Admin = 'Admin',
    Analyst = 'Analyst',
    TechSupport = 'Tech Support',
}

export interface State {
    members: { name: string, email: string, role: Role, isCurrentUser: boolean }[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        members: [],
    },
    mutations: {
        initializeStore(state) {
            const member = {
                name: "Soorya S",
                email: "soorya.s@chargebee.com",
                role: Role.Admin,
                isCurrentUser: true
            }

            if (state.members.find(m => m.email === member.email)) {
                return;
            }

            state.members.push(member);

        },
        addMember(state, member: { name: string, email: string, role: Role, isCurrentUser: boolean }) {
            //only push if email is unique
            if (state.members.find(m => m.email === member.email)) {
                alert('Email already exists')
                return;
            }
            state.members.push(member);
        },
        updateMember(state, member: { email: string, role: Role }) {
            const index = state.members.findIndex(m => m.email === member.email);
            state.members[index].role = member.role;
        },
        deleteMember(state, member: { name: string, email: string, role: Role, isCurrentUser: boolean }) {
            const index = state.members.findIndex(m => m.email === member.email);
            state.members.splice(index, 1);
        }
    },
    getters: {
        getAllMembers(state) {
            //reverse list without mutating original array
            return state.members.slice().reverse();
        },
        getCount(state) {
            return state.members.length;
        }
    },
    plugins: [vuexPersist.plugin],
})

export function useStore () {
    return baseUseStore(key)
}
