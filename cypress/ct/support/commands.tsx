/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-namespace */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { mount } from "@cypress/vue"
import { IonicVue, IonPage } from '@ionic/vue'

Cypress.Commands.add('ionPageMount', (comp, options) => {
  options = options || {}
  options.global = options.global || {}
  options.global.plugins = options.global.plugins || []
  options.global.plugins.push(IonicVue)
  const data = options.data ? options.data() : {}

  return mount(<IonPage><comp { ...data } /></IonPage>, options)
})

declare global {
  namespace Cypress {
    interface Chainable {
      ionPageMount: typeof mount;
    }
  }
}


