# MERNstack Lab

## Introduction

Using your newfound knoweldge of how to utilize the MERN stack to create fullstack JavaScript applications, your task is to create a book application that allows users to perform full CRUD functionality on their favorite books.

## Setup Steps

1. Spin up a node `express.js` server that leverages mongoose to creat your API (If you need help, reference our Game of Thrones example from class).
	* **TIP** - Remember to use a port other than 3000 since that is create-react-app's default.
2. Test your endpoints in Postman and make sure they are working correctly.
3. Install `create-react-app` as your client by running the following command in the root of your project directory: `craete-react-app client`.
	* **TIP** - Remember to add a `nodemon.json` if your using nodemon to your project root and add the folling command so that it will stop watching the client directory!
	 
	```js
		"ignore": ["./client"]
	``` 	
	
4. `cd` into the new client directory, and add the `proxy` option in create-react-app's `package.json`.
5. Code Away!


## Routes

The routes for your application should be as follows:

**API (Node + Express):**

```js
get => '/api/books'
get => '/api/books/:id'
post => '/api/books'
patch => '/api/books/:id'
delete => '/api/books/:id'
```

**Frontend (React + React Router):**

```js
/books => Index
/books/:id => Show
/books/new => New
/books/:id/edit => Edit
```

## Model

Your app should leverage a `Book` model with the following fields:

```js
title: String
author: String
description: String
```
