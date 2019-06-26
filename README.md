# movie-review-cli

# About

A simple basic Linux based CLI to get the "rotten tomatoes" ratings for a given movie name. This can be directly integrated to serve chatbots to provide the required responses.

Many improvements can be done in this. Used powerful CLI library 'inquirer' to achieve this quickly. The menus can be built recursively, highly customizable to user interactions in order to provide better user experience. The omdbapi utilized here has many options, which was not exposed to end user in the initial release. 

The review ratings are provided by 3 sources where applicable, which can be analyzed and even create prdiction models to provide better results to the users.


# Usage 

Clone the repo in your linux machine

Use following commands
1. docker build -t moviebuff .
2. docker run -p 9000:9000 -it --attach STDOUT moviebuff 

Type the movie name, to get the rating.

type 'exit' to exit the application

To run locally without docker use following commands
- npm install
- npm run start
