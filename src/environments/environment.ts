// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, // es falso pq es de desarrollo
  url: 'http://localhost:5000/firestore-grafica-cdc61/us-central1',
  firebase: {
    apiKey: 'AIzaSyCxyk_X2FDXeIXumvsUVT9VftkL5Ns-4Rc',
    authDomain: 'firestore-grafica-cdc61.firebaseapp.com',
    databaseURL: 'https://firestore-grafica-cdc61.firebaseio.com',
    projectId: 'firestore-grafica-cdc61',
    storageBucket: 'firestore-grafica-cdc61.appspot.com',
    messagingSenderId: '943690705862',
    appId: '1:943690705862:web:480ffc3cf93bd55787e0c7'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
