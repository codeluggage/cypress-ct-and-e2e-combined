# Ionic-Vue & Cypress e2e + component testing

Reproduction repo to identify how to have `"pluginsFile": ` for Cypress e2e and Cypress component testing separated in the same `cypress.json`. 

Based on Ionic-Vue starter with 
```
npm install -g @ionic/cli
ionic start --type=vue
```

And then 

```
npm install --save-dev cypress @cypress/vue @cypress/webpack-dev-server webpack-dev-server
```

And then attempting to set up the `cypress/` folder for both e2e and component testing. 

Discord thread: https://discord.com/channels/755913899261296641/755921440359841852/858967171689611275
