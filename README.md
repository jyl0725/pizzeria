# Pizzeria

I took inspiration from Domino's website to design Hunter Digital's Pizzeria.

## How to run

Run `npm start` and go to localhost:3000 on your browser.

## Implementation

I utilized react router dom to provide the outcome of a single page application with react. I decided that the information regarding the pizzas needed to be centralized so I created a mock api. I attached two functions to allow me to grab all pizzas or just one. I generated the Pizza list on componentDidMount. Each Pizza on the list I attached a Link to an endpoint for each individual pizza to create restful endpoint. In terms of design, I chose to mock Domino's as it is one of my favorite take out fast-food pizza chain and their ux/ui is also a reason for it.

##  Tools Used

* **React Router Dom**: Create RESTful Routes for individual endpoint and history.

* **Custom API EndPoint**: Transfer pizza image and description to PizzaAPI.js endpoint

* **Custom NavBar**: Allow user to navigate through React Router Dom components.

* **External CSS**: I know the popularity of CSS in JS for React(I am a fan too), but it still have certain issue when it come to certain such as hover.

## Improvement with time permitted

* **Redux**: If application were to grow, I will manage the state in a global redux store.

* **Testing**: Will add unit testing through enzyme/jest.
# movies
