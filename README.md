<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](https://github.com/moenassar0/autodiet#user-stories) • [WIREFRAMES](https://github.com/moenassar0/autodiet#wireframes) • [TECH STACK](https://github.com/moenassar0/autodiet#stacks) • [IMPLEMENTATION](https://github.com/moenassar0/autodiet#implementation) • [HOW TO RUN?](https://github.com/moenassar0/autodiet#prerequisites)**

</div>

<br><br>

<img src="./readme/title2.svg"/>

> AutoDiet is an automatic meal planner that is customized to the user's needs. The web app generates a daily plan for the user with dynamic recipes with the user's overall nutrition and health in mind.
> The app will also allow the user to log in data like his own diet/meals and weight.
> The web app prompts the user to input his physical details first, the user can then generate his own mealplans. The user can also surf all the avaiable meals and their recipes.

### User Stories
- As a user, I want to organize my daily mealplan, so that I be more efficient
- As a user, I want to know my daily nutrition goals, so that I can become healthier
- As a user, I want to browse recipes, so that I use them or be inspired by them

<br><br>

<img src="./readme/title3.svg"/>

> This design was first made on Figma as wireframes then formed into mockups. You will see the design of the website changing along the way as better color palettes and design patterns were used. First let's see the wireframes:

### Wireframes

| Landing  | Browse Foods/Meals  |
| -----------------| -----|
| ![Landing](https://github.com/moenassar0/autodiet/blob/main/demo/wireframes/Landing_Page.png) | ![Browse Foods/Meals](https://github.com/moenassar0/autodiet/blob/main/demo/wireframes/BrowseFoods_Page.png) |

| User's Profile  | User's Mealplan  |
| -----------------| -----|
| ![Profile](https://github.com/moenassar0/autodiet/blob/main/demo/wireframes/UserDetails_Page.png) | ![Homepage](https://github.com/moenassar0/autodiet/blob/main/demo/wireframes/Home_Page.png) |

### Mockups

| Landing  | Browse Foods/Meals  |
| -----------------| -----|
| ![Landing](https://github.com/moenassar0/autodiet/blob/main/demo/mockups/Landing_Page.png) | ![Browse Foods/Meals](https://github.com/moenassar0/autodiet/blob/main/demo/mockups/BrowseFoods_Page.png) |

| User's Profile  | User's Mealplan  |
| -----------------| -----|
| ![Profile](https://github.com/moenassar0/autodiet/blob/main/demo/mockups/UserDetails_Page.png) | ![Homepage](https://github.com/moenassar0/autodiet/blob/main/demo/mockups/Home_Page.png) |


<br><br>

<img src="./readme/title4.svg"/>

### Stacks

Let us briefly mention the tech stack and technologies the application used:

- This application was built using the ReactJS library. ReactJS [React](https://www.reactjs.org) helps us move from the daunting task of writing vanilla JavaScript by offering its rich library that builds single page applications using components.
- For the backend we used the framework built for web artisans [Laravel](https://laravel.com). Laravel was used purely for the api calls, database management, and mailing. For the database we used MySQL.
- An admin panel was developed to perform CRUD operations and receive feedback/questions from users.
- Firebase was also used as part of our backend. Firebase helped the application send push notifications to the user as well as help build our chatting system using real-time databases.
- The app uses the font ["Poppins"](https://fonts.google.com/specimen/Poppins) as its main font.
- The app utilizes ChartJs for its multiple uses of pie charts and line charts to display data such as nutrition to the user.



<br><br>
<img src="./readme/title5.svg"/>

### Implementation

> Utilizing our wireframes and mockups built using Figma, along with the tech stacks and user stories we have, the implementation of the app is shown as below. The following images and gifs are screenshots from the actual deployed application.

| Landing  | Meals Page  |
| -----------------| -----|
| ![Landing](https://github.com/moenassar0/autodiet/blob/main/demo/Landing_Page.gif) | ![Browse Foods/Meals](https://github.com/moenassar0/autodiet/blob/main/demo/Browse_Page.gif) |


| User's Profile  | User's Mealplan  |
| -----------------| -----|
| ![Profile](https://github.com/moenassar0/autodiet/blob/main/demo/UserDetails_Page.png) | ![Homepage](https://github.com/moenassar0/autodiet/blob/main/demo/Home_Page.gif) |



| User's Weightlog  | User's Dietlog  |
| -----------------| -----|
| ![Weight](https://github.com/moenassar0/autodiet/blob/main/demo/WeightLog_Page.png) | ![Diet](https://github.com/moenassar0/autodiet/blob/main/demo/DietLog_Page.png) |



| Dark/Light modes  | Live chat  |
| -----------------| -----|
| ![Browse](https://github.com/moenassar0/autodiet/blob/main/demo/Multitheme.gif) | ![Chat](https://github.com/moenassar0/autodiet/blob/main/demo/Chat_Page.gif) |

Sample Email Sent to User (meal plan) | Meal Recipe  |
| -----------------| -----|
| ![Email](https://github.com/moenassar0/autodiet/blob/main/demo/SampleEmail.png) | ![Recipe](https://github.com/moenassar0/autodiet/blob/main/demo/ShowingMeal.gif) |

<h2> Admin Panel Screenshots/gifs </h2>

| Admin CRUD  | Admin Chat  |  Admin create/link recipes  |  
| -----------------| -----|-----|
| ![CRUD](https://github.com/moenassar0/autodiet/blob/main/demo/Admin_CRUD.gif) | ![Chat](https://github.com/moenassar0/autodiet/blob/main/demo/AdminChat_Page.gif) | ![Chat](https://github.com/moenassar0/autodiet/blob/main/demo/Admin_Recipes.gif) |


<br><br>
<img src="./readme/title6.svg"/>


> This following chapter and steps will give you insight on how to get a local version of the application successfully running.

### Prerequisites

You are going to need the following installers/package managers to run the app.
* NodeJS
  ```sh
  https://nodejs.org/en/download/
  ```
* composer
  ```sh
  (https://getcomposer.org/)
  ```
* PHP 8.1 or higher development environment (application originally used XAMPP)
  ```sh
  (https://www.apachefriends.org/)
  ```

### Installation

_The following steps should help you successfully run the application and install or setup any dependencies._

1. Clone the repo
   ```sh
   git clone https://github.com/moenassar0/autodiet/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install composer packages
   ```sh
   composer install
   ```
4. Setup your .env file in the frontend and backend folders. Connect your MySQL database and Firebase app using the .env.example files.
5. Run the migrations (inside your laravel project)
   ```sh
   php artisan migrate
   ```
6. Setup JWT authentication. You might have to run other commands. Visit the [docs](https://laravel-jwt-auth.readthedocs.io/en/latest/)
   ```sh
   php artisan jwt:secret
   ```
### Important Notes
For the application to properly function, you will need a already populated database with meals, foods, and recipes added.
You will find an example of food items and meals in example.sql found in the backend folder.
To setup an admin account, you have to insert the account info using your database.
