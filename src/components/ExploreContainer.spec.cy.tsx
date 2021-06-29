import { IonPage } from '@ionic/vue'
import ExploreContainer from "./ExploreContainer.vue"

describe('<ExploreContainer />', () => {
    it('Playground', () => {

        cy.mount(() => <IonPage><ExploreContainer
            name="ExploreContainer title"
        /></IonPage>)

        cy.get('ion-title').contains('ExploreContainer title')
      cy.get('ion-toggle').should('attr', 'modelValue', 'false')
      cy.get('ion-toggle').click().then((t) => expect(t).attr('modelValue', 'true'))

    /* cy.get('ion-toggle').should('attr', 'modelValue', 'false')
  cy.get('ion-toggle').click().then(() => {
* cy.get('ion-toggle').should('attr', 'modelValue', 'true')
  }) */
    })
})
