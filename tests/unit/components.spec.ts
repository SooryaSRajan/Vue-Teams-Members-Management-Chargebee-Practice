import {shallowMount} from '@vue/test-utils'
import CheckboxCard from '@/components/CheckBoxCard.vue'
import ElevatedButton from "@/components/ElevatedButton.vue";
import ListComponent from "@/components/ListComponent.vue";
import RemoveAlertDialog from "@/components/RemoveAlertDialog.vue";
import AddEditMemberModal from "@/components/AddEditMemberModal.vue";

describe('CheckboxCard.vue', () => {
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

describe('ListComponent.vue', () => {
    it('renders props.name when passed', () => {
        const name = 'John Doe'
        const wrapper = shallowMount(ListComponent, {
            props: {name}
        })
        expect(wrapper.text()).toMatch(name)
    })
    it('renders props.email when passed', () => {
        const email = 'abc@chargebee.com'
        const wrapper = shallowMount(ListComponent, {
            props: {email}
        })
        expect(wrapper.text()).toMatch(email)
    })
    it('renders props.role when passed', () => {
        const role = 'Software Engineer'
        const wrapper = shallowMount(ListComponent, {
            props: {role}
        })
        expect(wrapper.text()).toMatch(role)
    })
    it('renders first letter of name in circular-icon class', () => {
        const name = 'Soorya '
        const wrapper = shallowMount(ListComponent, {
            props: {name}
        })
        expect(wrapper.find('.circular-icon').classes()).toContain('S')
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

describe('AddEditMemberModal.vue', () => {
    it('renders props.isEdit when passed', () => {
        const isEdit = true
        const wrapper = shallowMount(AddEditMemberModal, {
            props: {isEdit}
        })

        expect(wrapper.find('.input-data').exists()).toBe(false)

    });
    it('renders props.isEdit when passed', () => {
        const isEdit = false
        const wrapper = shallowMount(AddEditMemberModal, {
            props: {isEdit}
        })
        expect(wrapper.find('.input-data').exists()).toBe(true)
    });
});


