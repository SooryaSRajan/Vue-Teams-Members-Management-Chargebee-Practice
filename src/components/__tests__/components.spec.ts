import {shallowMount} from '@vue/test-utils'
import CheckboxCard from '../CheckBoxCard.vue'
import ElevatedButton from "../ElevatedButton.vue";
import ElevatedButtonWhite from "../ElevatedButtonWhite.vue";
import ListComponent from "../ListComponent.vue";
import RemoveAlertDialog from "../RemoveAlertDialog.vue";
import AddEditMemberModal from "../AddEditMemberModal.vue";

describe('AddEditMemberModal.vue', () => {
    it('renders props.email when passed', () => {
        const email = 'soorya@chargebee.com'
        const isEdit = true
        const wrapper = shallowMount(AddEditMemberModal, {
            props: {email, isEdit}
        })
        expect(wrapper.text()).toMatch("Change role for " + email)
    })

    it('renders input fields when passed isEdit false', () => {
        const isEdit = false
        const wrapper = shallowMount(AddEditMemberModal, {
            props: {isEdit}
        })
        expect(wrapper.text()).toMatch("Invite a member to use ChargeBee" )
        const input_data = wrapper.findAll('.input-data')
        expect(input_data[0].exists()).toBe(true)
        expect(input_data[1].exists()).toBe(true)
    })


});

describe('CheckBoxCard.vue', () => {
    it('renders props.title when passed', () => {
        const title = 'new message'
        const wrapper = shallowMount(CheckboxCard, {
            props: {title}
        })
        expect(wrapper.text()).toMatch(title)
    })
    it('renders props.subtitle when passed', () => {
        const subtitle = 'new message'
        const wrapper = shallowMount(CheckboxCard, {
            props: {subtitle}
        })
        expect(wrapper.text()).toMatch(subtitle)
    })
});

describe('ElevatedButton.vue', () => {
    it('renders slot content', () => {
        const wrapper = shallowMount(ElevatedButton, {
            slots: {
                default: 'Hello World'
            }
        })
        expect(wrapper.text()).toMatch('Hello World')
    })
});

describe('ElevatedButtonWhite.vue', () => {
    it('renders slot content', () => {
        const wrapper = shallowMount(ElevatedButtonWhite, {
            slots: {
                default: 'Hello World'
            }
        })
        expect(wrapper.text()).toMatch('Hello World')
    })
});

describe('ListComponent.vue', () => {
    it('renders props.name when passed', () => {
        const name = 'John Doe'
        const email = 'abc@chargebee.com'
        const role = 'Analyst'

        const wrapper = shallowMount(ListComponent, {
            props: {name, email, role}
        })
        expect(wrapper.text()).toMatch(name)
        expect(wrapper.text()).toMatch(email)
        expect(wrapper.text()).toMatch(role)
    })
});

describe('RemoveAlertDialog.vue', () => {
    it('renders props.email when passed', () => {
        const email = 'abc@chargebee.com'
        const wrapper = shallowMount(RemoveAlertDialog, {
            props: {email}
        })
        expect(wrapper.text()).toMatch(email + ' will not be able to access this site.')
    })
});


