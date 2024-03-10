# Remember-it

# Expo GO App Guide

This guide will walk you through the steps to compile an Expo app for Android and iOS platforms.

## Prerequisites

- Make sure you have latest Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- Install Expo Go on your machine. You can install it from [here](https://reactnative.dev/docs/environment-setup?guide=quickstart).

## Getting Started

### Download apk (Android)

1. Download apk [here](https://uniandes.sharepoint.com/:u:/s/UX614/ETsQvjutnflIpRtOzIbg5gsB9vobsXGNT9Tom6HL768fHA?e=lV95Kn) (Just for Uniandes community)
- You can also use this public [link](https://expo.dev//accounts/jorcasca/projects/Recordamelo/builds/182972d4-1409-48b7-81e9-b26907e05ce0) or scanning this QR:
<img width="269" alt="Screenshot 2024-03-10 at 6 44 39 PM" src="https://github.com/jorcasca/remember-it/assets/31069035/f02f0468-1d81-4584-a248-d8206a227cf6">

2. Move apk to your Android device.

3. Install apk.

4. Google may not allow installation of the apk because it is an unknown source. To do this, click on the install option anyway. Some providers require an additional step which is "Activate unknown source" for this I can refer to [this tutorial.](https://www.xatakandroid.com/tutoriales/como-instalar-aplicaciones-en-apk-en-un-movil-android)

### Compile project

1. Clone this repository to your local machine:
`git clone <repository-url>`

2. Navigate to the project directory:
`cd <project-directory>`

3. Install dependencies:
`yarn install`

4. Connect your device using USB. If you have an Android device, it is important to enable Develop mode [here](https://developer.android.com/studio/debug/dev-options).

5. To run the app on your local machine, use the following command:
`npx expo start`

6. Press a to open Android or i to open iOS.

## Build apk

1. Execute next command to build locally:
`eas build -p android --profile preview --local`

- -p define the platform (android/ios)
- --profile define the flavor (development/preview/production)
- --local allow build the apk locally in your machine instead of Expo platform.

# References

* [Install expo](https://reactnative.dev/docs/environment-setup?guide=quickstart)
* [Enable develop mode](https://developer.android.com/studio/debug/dev-options)
* [Expo build apk](https://docs.expo.dev/build-reference/apk/)
