# neighborhood-map-react
This application is a `Mapping Application` built with `React` that allows users to enter a location and returns businesses in the area. `Google Maps API` is used for mapping functions while the `Yelp Fusion API` to retrieve business information.

The application demonstrates: `responsiveness`, `accessibility`, and `caching`. `Responsiveness` is demonstrated using `media queries` to manage the display of certain components at different media sizes. `Accessibility` is demonstrated by changing the default focus ring properties to make current elements more visible, managing focus flow, and by adding appropriate `aria` attributes. `Caching` is provided via a `service worker` by default via the `create-react-app` module that was used to initialize our `React` application. The only caveat is that it is only activated when the web application is in production mode.

In addition to demonstrating the aforementioned concepts, the application demonstrates various key `React` concepts to include: `lifecycle events`, `state management`, and `composition`. `Lifecycle events` are used to simplify the mapping functions. The `componentDidMount` is used to add the Google Maps script to the web page while the `componentDidUpdate` is used to zoom the map and update the markers. `State management` is used to ensure that the most up to date data is being reflected on the page; when we make a new search, the page is updated to display the new results. Using `composition`, the application was able to be split up into separate smaller components that perform more specialized actions. The `Navbar` component is the banner of the application and allows for the toggling of the `Sidebar`. The `Sidebar` component is the mechanism to query for data and to display the data in a tabular format while the `Map` component allows us to visualize the data on the map via `markers`.

## Getting Started
These instructions will get you a copy of the project on your local machine for development and/or testing purposes.

### Prerequisites

To view the webpage correctly an internet connection is required.

To get the dependencies and run the servers the user will require [`npm`](https://www.npmjs.com/get-npm) JavaScript package manager.

To run the servers the user will require the latest version (`8.11.4 LTS`) of [`Node.js`](https://nodejs.org/en/download/).

### Installing
To get a copy of the project to work on locally, the user can either `download the zip` and extract the files or `clone the repository`.

To install:
1) Open command line interface.
2) Navigate to the `neighborhoodmap` directory within the project.
3) Install dependencies via command: `npm install`.

## Run the Project
In order to run the project in `development` mode:
1) Open command line interface.
2) Navigate to the `neighborhoodmap` directory within the project.
4) Run development server via command: `npm start`.

In order to run the project in `production` mode:
1) Open command line interface.
2) Navigate to the `neighborhoodmap` directory within the project.
3) Build production build via command: `npm run build`.
4) Install `serve` via command: `npm install -g serve`.
5) Run production server via command: `serve -s build`.
6) Open browser and connect to `localhost:5000`.

## Built with
* HTML5
* CSS
* JavaScript
* React
* Bootstrap

## APIs used
* `Google Maps`
* `Google Geocoding`
* `Yelp Fusion`

## Authors
* Ricardo Rivera