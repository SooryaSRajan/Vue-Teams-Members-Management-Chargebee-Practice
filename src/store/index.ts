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
        addMember(state, member: { name: string, email: string, role: Role, isCurrentUser: boolean }) {
            state.members.push(member);
        },
        updateMember(state, member: { name: string, email: string, role: Role, isCurrentUser: boolean }) {
            const index = state.members.findIndex(m => m.email === member.email);
            state.members[index] = member;
        },
        deleteMember(state, member: { name: string, email: string, role: Role, isCurrentUser: boolean }) {
            const index = state.members.findIndex(m => m.email === member.email);
            state.members.splice(index, 1);
        }
    },
    getters: {
        getAllMembers(state) {
            return state.members;
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
