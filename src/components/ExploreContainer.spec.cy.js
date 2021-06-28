import { mount } from "@cypress/vue"
import ExploreContainer from "./ExploreContainer"

describe('<ExploreContainer />', () => {
    it('Playground', () => {
        mount(ExploreContainer)
    })
})