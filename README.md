# udeme

an open source citizen-oriented solution for tracking government projects.

----------

# Getting started

## Installation

### JS

Install npm packages

	npm install

Compiler .vue files

	npm run dev
    
### Laravel

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/5.4/installation#installation)


Clone the repository

    git clone https://github.com/frknasir/udeme.git

Switch to the repo folder

    cd udeme

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Generate a new JWT authentication secret key

    php artisan passport:install

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

## Database seeding

**Populate the database with seed data**

Run the database seeder and you're done

    php artisan db:seed

***Note*** : It's recommended to have a clean database before seeding. You can refresh your migrations at any point to clean the database by running the following command

    php artisan migrate:refresh


----------





# API(V1) Documentation

Read about the API Documentation [here](https://github.com/frknasir/udeme/blob/master/docs/api_1_0_spec.md)

# Contributing

Sleeves folded, ready to dive in? Read [this](https://github.com/frknasir/udeme/blob/master/docs/contributing.md)
