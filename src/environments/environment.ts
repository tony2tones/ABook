// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
  firebaseConfig = {
    apiKey: "AIzaSyDwZ0vNZ9U4LSzUxOKEVRja36tVSj2ruN0",
    authDomain: "abook-9199a.firebaseapp.com",
    databaseURL: "https://abook-9199a.firebaseio.com",
    projectId: "abook-9199a",
    storageBucket: "abook-9199a.appspot.com",
    messagingSenderId: "62091966073",
    appId: "1:62091966073:web:733a57374e6a46c05606a8",
    measurementId: "G-L3QNR5HJ0R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
