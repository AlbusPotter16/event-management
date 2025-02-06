# Event-Management-App
Created a App for Event Management using MERN , uses concept of react-router-dom library and created different different routes like Home, Events , Newsletter , and Authentication in top header bar , and user can add any New Event , Update Existing Event , Remove Existing Event and they can do all after user is authenticated from backend and every route is authenticated based on **JWT Token** concept.

<img width="941" alt="front" src="https://github.com/user-attachments/assets/9efb7595-d0a6-4191-9ad8-70c7702dcc1c" />

Top header bar contains navigation bar , which has some options like Home, Events, Newsletter and Authentication , Home Page is the index page. If user is new to application they can signup by going to Authentication Page and on successfully signup and successfully login we will get authentication token from backend so that on every request to backend we will append token value with Authentication Header.

**Authentication Action on UI**

**1)User successfully login/signup**

If user is authenticated then will see Logout Button on top Navigation bar in place of Authentication Link , and on token expire from backend user automatically Logout and again Authentication Link will come.
<img width="944" alt="login" src="https://github.com/user-attachments/assets/64d9c499-d18d-468f-b23d-03319519d036" />

<img width="937" alt="rsgiter" src="https://github.com/user-attachments/assets/93082c12-2261-4c78-b501-455c43ccf7dc" />


On Events Page , If user is authenticated then we are allowing users to perform some actions:-

1)User can add new Events , where we are taking some details from user like Image, Event Name , Description and Date, and on Save we will send all this details to backend with access token value and if all things are valid then we will get Events added to Events list as we will retrieve all Events from backend.

<img width="948" alt="create" src="https://github.com/user-attachments/assets/6c10ca8b-35ae-44c0-a121-a7a02d134ee3" />



3) User can remove any existing Event, on removing we are confirming from user for deletion


**2)User not login or signup**

If user is not authenticated then we are blocking some actions from application, like not allowing user to Add new Event , Update any Event and Remove any Event we are hiding all this features from app.

**Tech Used**

**FrontEnd**:- React, react-router-dom , react-router,HTML , CSS , Javacript,  handling all route errors in Error Wrapper Component and using concepts of loaders , action etc in routers and hooks like useSubmit, useLoaderData, useActionData, useRouterError, ReactRouter etc from react-router-dom.

**BackEnd:**:- NodeJs, ExpressJs, JWT , File handling , Express Router, validating event data and user related data at backend and on successful validations creating a token through JWT at login or signup api and sending to frontend.

**DataBase**:- Using JSON files like events.json etc at backend.
