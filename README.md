# Start Here

Clone this repository and once opened, install its dependencies with your preferred package manager: npm install or yarn

Depending on the chosen manager, run npm start or yarn start to start the application on its default port (localhost: 3000).

In order for calls to the Google API to be made, it is necessary to insert a key in the environment variable called "apiKey" present in "App.js" inside the "src" folder. Since the CRA does not have a secure way to store security keys, you will need to create one. This link contains step-by-step information on how to proceed: https://developers.google.com/books/docs/v1/using

## Attention

This application is just a concept that is not ready to be sent to production. Its layout is not responsive and was created specifically for the Iphone X standard (375 x 812). So open your devtools and adjust to that pattern.

### Home

You can click on the two example books to access your information. Other than that, only the search bar and the "home" button at the bottom are dynamic.

### Search

This component is completely dynamic, allowing the search for books not only by name. A plus icon indicates when more results can be loaded, just click it. Each item of the result is also clickable and allows you to navigate to the details screen of what was clicked. Click on the "home" option in the footer to return to the home screen.

### Detalhes do Livro

The footer on this page is just a concept and none of the options are dynamic. To return to the search screen, just click on the arrow icon in the upper left corner.
