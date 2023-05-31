# learn_quasar

A series of articles and interactive examples explaining how to use the Quasar framework https://quasar.dev to develop applications that can run on a variety of devices.

This instructional app is aimed at beginners starting with preparation, including how to use Visual Studio Code.

The app is hosted here:
https://learn-quasar-p764s.ondigitalocean.app

and here:
https://paladyne-io.github.io/learn_quasar/

I recently registered the domain www.makeaweb.app which is linked to the github pages domain.

Features of interest:
* Collapsible side panel menus
* A slider using vue3-carousel https://ismail9k.github.io/vue3-carousel/

https://www.makeaweb.app/#/images

* Dark mode (Try it in app preferences. Article to come soon.)
* Sending emails with emailjs
https://www.makeaweb.app/#/sendemail
* A simple animated game (Rocket man). Can you get the craft to the moon?
https://www.makeaweb.app/#/gameapp/rm_game
* How to use the Quasar LocalStorage plugin to save and read data
https://www.makeaweb.app/#/dummyapp/da_local_storage
* An image grid example using Colcade,
https://www.makeaweb.app/#/examples/imagegrid
based on this article:
  https://dalezak.medium.com/reusable-component-for-responsive-grid-of-cards-in-quasar-using-colcade-e2636247b0b


  ![Card Grid screenshot](/public/images/learn_quasar_examples_screenshot.png)

* An example of a simple app with visual transitions
https://www.makeaweb.app/#/dummyapp/

After downloading or cloning this repository...
Open a terminal and <b>'cd'</b> into the directory (type 'cd' followed by a space, then drag the folder onto the terminal window and press Enter.) Then type the commands below.

After typing 'quasar dev', your default web browser should open to display the app.
Press Control + C to exit the development environment. Type 'code .'' in the terminal and press Enter to open Visual Studio with the project folder displayed in the panel on the left.

Type 'quasar dev' again to renter the dev environment. Changes you make in the <b>src</b> folder should be updated in the browser without manually reloading the page.

Prepare your app for hosting on a web server by running 'quasar build'.

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Build the app for production
```bash
quasar build
```

