# Ionic-Vue & Cypress e2e + component testing

[Discord conversation that prompted this repo]( https://discord.com/channels/755913899261296641/755921440359841852/858967171689611275)

To use the new Cypress 7+ CT ([Component Testing](https://docs.cypress.io/guides/component-testing/introduction)) feature with Ionic-Vue you currently (as of 2021-06-30) need to provide `IonicVue` from `@ionic/vue` in `options.global.plugins`. It is configured in this repo by adding a [Cypress Command](https://docs.cypress.io/api/cypress-api/custom-commands).

## Using Ionic components in your test

The structure of Ionic-Vue expects your components to at least have a `<IonPage>` wrapped around them. The easiest way to support this right now is to leverage `JSX/TSX` to provide `mount` with the `<IonPage>` inside the new command.

## How to use it all

In addition to the `cypress` directory, you will need at least these files: 

- `cypress.json`
- `tsconfig.json`
- Probably `babel.config.js`

Once you have the files set up, you can run `npx cypress open-ct` to open the component tests. 

Only files in `src/` ending with `.spec.cy.ts` will be picked up by the test. 

**You have to use `cy.ionPageMount` and not `mount` from `@cypress/vue`.**


After that you can mount your components in the tests like this: 

``` typescript

cy.ionPageMount(YourComponent, {
  data: () => ({
    yourPropKey: 'yourPropValue'
  })
})

```

## To try this repo

1. Clone the repo
1. `npm i`
2. `npm run test:ct` for component tests
3. `npm run test:e2e` for e2e tests
