import ExploreContainer from "./ExploreContainer.vue"

describe('<ExploreContainer />', () => {
  it('renders without props', () => {
    cy.ionPageMount(ExploreContainer)

    cy.contains('ion-title', 'Hello world!')
  })

  it('renders with props', () => {
    cy.ionPageMount(ExploreContainer, {
      data: () => ({
        title: 'ExploreContainer title'
      })
    })

    cy.contains('ion-title', 'ExploreContainer title')
  })

  it('understands ionic elements', () => {
    cy.ionPageMount(ExploreContainer)

    cy.get('ion-toggle')
      .should('have.attr', 'modelValue', 'false')
      .click()
      .should('have.attr', 'modelValue', 'true')
  })
})
