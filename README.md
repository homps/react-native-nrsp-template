# React-Native-NRSP-Template
Quick start barebones template with React-Navigation, React-Redux, Redux-Saga and Redux-Persist.

I aim to keep this up to date with the 'current' way of linking these together.

This doesn't use redux for the navigation store, it allows React-Navigation to use it's prefered internal store instead.

## Getting Started
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone This Repo: `git clone https://github.com/homps/react-native-nrsp-template.git`
- From the repo folder
  - `npm install`
  - (optionally) rename the app by replacing all instances of `NRSPTemplate` in app.json, index.js and package.json
  - `react-native upgrade`
  - `react-native link react-native-fetch-blob`
- You should be ready to go! Launch with `react-native run-android` or `react-native run-ios`

# React-Native Version
At the time of writing, this has been tested with the most recent major version, 0.54.
[Check for a later version](https://facebook.github.io/react-native/versions.html)

## Need a hand / have a suggestion?
Feel free to open an issue or contribute. Thanks!
