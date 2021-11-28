# Todoist Clone with React-TS-Firebase

[![Netlify Status](https://api.netlify.com/api/v1/badges/0215b2a5-8596-4e5c-8664-6ad3a2d585bd/deploy-status)](https://app.netlify.com/sites/simple-todoist-clone/deploys)

Live Site: [https://simple-todoist-clone.netlify.app](https://simple-todoist-clone.netlify.app/).

Welcome to my first big project. I choose to do a todoist clone because there are a lot of videos on youtube on todoist clone, but there are no implementation with stack that I want to lern with.

## Tools used

- React + Typescript
- Chakra UI
- Firebase Authentication
- Firebase Cloud Firestore
- React Router
- React Helmet
- React Calendar
- Formik

## Features

- Login and signup page using Firebase Authentication and Formik for form handling. Login can be done anonymously.
- Store users signup data, tasks, and projects in Cloud Firestore.
- Create projects with all the tasks associated with it.
- Schedule task due date utilizing react-calendar.
  -Dynamically change page head metadata with react-helmet.

## Challenges

### Biggest Challenges

1. Properly connecting my React frontend with Firestore is difficult because there are many ways to do it. Also, there are not that many explanation on firestore events.
2. As this is the first time building relatively big project by my own, finding a way to handle datas in frontend is challenging.
3. Modeling and connecting datas for Firestore is challenging, ex. correlating task with its project.
4. Managing state and passing datas to components.

### Other Challenges

There are many other challenges, but a couple notable ones are file architecture, utilizing Chakra UI, and Routing with the new React-router v6.

## Solutions

### Solution for biggest challenge

1. I came up with the solutions after hours of researching docs, blogs, and videos. I finally able to grasp the concept of firestorre and connect my Firestore with React using the snapshot event from firestore that re-fetch data dynamically after every changes made to underlying data.
2. It was a dilemma for me to choose the way of handling the datas from firestore, such as Redux or Context API. I settled with context API because it was simpler to get going with firestore. So, I attach the event listener to context, then keep all global datas like user state, todos, and projects in context to make a centralized data management.
3. As a first-timer dealing with data modeling, I have to research about data modeling and realizes that I have to plan ahead. I decided to create a relation by giving each data an Id.
4. Now, the next big challenge is I didn't really know the best practices to when passing datas to components. Eventually, I go with some research and got myself do my best to create code that is readable.

### Other solutions

I decided to implement the Bulletproof-React architecture in my project. Although it is still not perfect, but it utilized as a guide for me and my learning. Styling with Chakra is now easier after getting the concept from the docs. Routing with the V6 React-Router is tricky but definitely more readable and easier to grasp its new concept.

## What I have learned

1. Utilizing Firebase for Authentication and Database.
2. Using Formik to handle form.
3. Simple data modeling.
4. Building complex app with a lot of third party dependencies.
5. Structuring a big app.
6. Styling using component library with Chakra UI that made developing a lot faster and easier.

## Next steps

I am going to study more to finally do some refactoring in this app and then implementing more featuresm. So, it can be closer to Todoist App
