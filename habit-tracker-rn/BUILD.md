# Building the App

## Android

Step 1: Go to the root of the project in the terminal and run the below command:

```sh
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

Step 2: Go to android directory:

```sh
cd android
```

Step 3: Now in this android folder, run this command

```sh
./gradlew assembleDebug
```

There! you’ll find the apk file in the following path:
`android/app/build/outputs/apk/debug/app-debug.apk`