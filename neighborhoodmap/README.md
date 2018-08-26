# neighborhood-map-react
This application is a `Mapping Application` built with `React` that allows users to enter a location and returns businesses in the area. `Google Maps API` is used for mapping functions while the `Yelp Fusion API` to retrieve business information.

The application demonstrates: `responsiveness`, `accessibility`, and `caching`. `Responsiveness` is demonstrated using `media queries` to manage the display of certain components at different media sizes. `Accessibility` is demonstrated by changing the default focus ring properties to make current elements more visible, managing focus flow, and by adding appropriate `aria` attributes. `Caching` is provided via a `service worker` by default via the `create-react-app` module that was used to initialize our `React` application. The only caveat is that it is only activated when the web application is in production mode.

In addition to demonstrating the aforementioned concepts, the application demonstrates various key `React` concepts to include: `lifecycle events`, `state management`, and `composition`. `Lifecycle events` are used to simplify the mapping functions. The `componentDidMount` is used to add the Google Maps script to the web page while the `componentDidUpdate` is used to zoom the map and update the markers. `State management` is used to ensure that the most up to date data is being reflected on the page; when we make a new search, the page is updated to display the new results. Using `composition`, the application was able to be split up into separate smaller components that perform more specialized actions. The `Navbar` component is the banner of the application and allows for the toggling of the `Sidebar`. The `Sidebar` component is the mechanism to query for data and to display the data in a tabular format while the `Map` component allows us to visualize the data on the map via `markers`.

## Getting Started
These instructions will get you a copy of the project on your local machine for development and/or testing purposes.

### Prerequisites

To view the webpage correctly an internet connection is required.

To get dependencies and run the server the user will require `npm` JavaScript package manager.

### Installing
To get a copy of the project to work on locally, the user can either `download the zip` or `clone the repository`.

## Run the Project
In order to run the project:
1) Open command line interface.
2) Navigate to the directory where the project exists.
3) Install dependencies via command: `npm install`.
4) Run development server via command: `npm start`

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