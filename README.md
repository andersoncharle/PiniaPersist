
# PiniaPersist 🍍
📢 Introducing "PiniaPersist" - Your Guide to Effortlessly Persist Data in Pinia within the Quasar Framework! 🚀

👋 Hey #Vue and #Quasar enthusiasts! 🔥 Are you eager to harness the full potential of Pinia for state management in your Vue 3 applications powered by the Quasar framework? Look no further! 🌟 "PiniaPersist" is a comprehensive GitHub repository that showcases how to seamlessly persist data in Pinia for Quasar, helping you build robust and user-friendly apps. 📚

🎯 **Scenario**: Imagine you're building a user profile feature for your Quasar app. Users should be able to change their names, and you want to keep the changes persistent, even if they leave and return to the app later.


## Pinia
Pinia is a store library and state management framework for Vue.js. Designed primarily for building front-end web applications, it uses declarative syntax and offers its own state management API.

## Quasar
Quasar (pronounced `/ˈkweɪ.zɑɹ/`) is an MIT licensed open-source Vue.js based framework, which allows you as a web developer to quickly create responsive++ websites/apps in many flavours:

-   SPAs (Single Page App)
-   SSR (Server-side Rendered App) (+ optional PWA client takeover)
-   PWAs (Progressive Web App)
-   BEX (Browser Extension)
-   Mobile Apps (Android, iOS, …) through Cordova or Capacitor
-   Multi-platform Desktop Apps (using Electron)

Quasar's motto is:

> Write code once and simultaneously deploy it as a website, a Mobile App and/or an Electron App.

[Read more](https://quasar.dev/introduction-to-quasar) about why Quasar might be a good choice for your next project.

## steps for installing the Quasar Framework and Pinia in your project.


**Install Quasar CLI.**
```bash
# Node.js >=12.22.1 is required.

$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```
**Let's start creating a new quasar project using the quasar CLI.**
```bash
$ yarn create quasar
# Pick the App with Quasar CLI option

```

![define_quasar_project1.png](public%2Fphotos%2Fdefine_quasar_project1.png)
>for the Latest (v2.12.4)version of Quasar, there is no need to install Pinia separately because it is included in the installation steps.
>When you scaffold a Quasar project folder you can choose to add Pinia. It will create all the necessary configuration for you.

![choose_features.png](public%2Fphotos%2Fchoose_features.png)

**Start the app in development mode by running**

```bash
$ yarn quasar dev
```
**Adding a Pinia store**

Adding a Pinia store is easy with Quasar CLI through the `$ quasar new` command.


```bash
$ quasar new store <store_name> [--format ts]
# eg. quasar new store user
```
It will create a folder in `/src/stores` named by `“store_name”` from the command above. It will contain all the boilerplate that you need.
Example of Pinia store:
![new_store_img.png](public%2Fphotos%2Fnew_store_img.png)

 **Use Pinia Store in Your pages**
![use_pinia_store_in_your_page.png](public%2Fphotos%2Fuse_pinia_store_in_your_page.png)

🌟 There you have it! "PiniaPersist" empowers you to create user-friendly, efficient, and persistent Vue 3 apps with Pinia and Quasar. Give it a try today and elevate your development experience! 🚀

#Vue3 #Quasar #Pinia #DataPersistence #OpenSource #WebDevelopment #FrontEnd

Feel free to expand on these steps, add more detailed explanations, or provide additional examples in the repository. The key is to make it as user-friendly as possible, guiding newcomers on their journey to mastering data persistence with Pinia in Quasar. Best of luck with your "PiniaPersist" repository! 🎉
