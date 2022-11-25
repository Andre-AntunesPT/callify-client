# Project Name
Callify
<br>

# Quick Compo

<br>

## Description

This is a full-stack application that helps to organize and manage video calls. The users can create an event, in which they choose the theme- classroom, medical call, webinar; after they choose the date and the settings they want for that especific call. 


## User Stories

-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing my events/calls.
-  **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing events/calls.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of events I have created.
-  **Create Event:** As a logged in user I can access the events page so that I can choose and create a new event.
-  **Edit Event:** As a logged in user I can access the edit event page so that I can edit the event/room I created.
-  **Add Participants:** s a user I can add other participants to the event/room.
-  **Room:** As a user I want to enter room and start the call.




## Backlog


<br>


# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | LoginPage            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | SignupPage           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | HomePage             | public `<Route>`           | Home page.                                                |
| `/user-profile`              | ProfilePage          | user only `<PrivateRoute>` | User and player profile for the current user.             |
| `/user-events`              | UserEventsPage          | user only `<PrivateRoute>` | Events created. |
| `/user-profile/edit`         | EditProfilePage      | user only `<PrivateRoute>` | Edit user profile form.                                   |
| `/events`               | EventsListPage   | public `<Route>` | Events list.                                         |
| `/events/event`               | EventsDetails   | public `<Route>` | Event details.                                         |
| `/events/event/create` | CreateEventPage | user only `<PrivateRoute>` | Page where the user can create the events |
| `/events/event/room/:id`    | RoomDetails    | user only `<PrivateRoute>` | Room details and edit.                                    |
| `/room`    | RoomPage         | user only `<PrivateRoute>` | Page where the call happens.                                 |




## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- EditProfilePage

- EventsListPage

- EventsDetails

- CreateEventPage

- RoomDetails 

- RoomPage

  

Components:

- Private
- Footer
- Navbar
- Anon
- Create Event






## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Event Service**

  - `tournamentService` :
    - `.addEvent(eventData)`
    - `.getEvent()`
    - `.getOneEvent(id)`
    - `.deleteEvent(id)`



<br>


# Server / Backend


## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: String,
  createdEvent: [ { type: Schema.Types.ObjectId, ref:'Event' } ]
}
```



**Event model**

```javascript
 {
   title: { type: String, required: true },
   description: String,
   type: {type: String, enum: [eventOne, eventTwo, eventThree]}
   user: {type: Schema.Types.ObjectId, ref:'User'}
 }
```



**Room model**

```javascript
{
  title: { type: String, required: true },
  event: {type: Schema.Types.ObjectId, ref:'Event'},
     user: {type: Schema.Types.ObjectId, ref:'User'}

}
```




<br>


## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `    | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                            |
| GET         | `/api/`     |                              |                | 400          | Show all tournaments                                         |
| GET         | `/api/tournaments/:id` |                              |                |              | Show specific tournament                                     |
| POST        | `/api/tournaments`     | { name, img, players }       | 201            | 400          | Create and save a new tournament                             |
| PUT         | `/api/tournaments/:id` | { name, img, players }       | 200            | 400          | edit tournament                                              |
| DELETE      | `/api/tournaments/:id` |                              | 201            | 400          | delete tournament                                            |
| GET         | `/api/players/:id`     |                              |                |              | show specific player                                         |
| POST        | `/api/players`         | { name, img, tournamentId }  | 200            | 404          | add player                                                   |
| PUT         | `/api/players/:id`     | { name, img }                | 201            | 400          | edit player                                                  |
| DELETE      | `/api/players/:id`     |                              | 200            | 400          | delete player                                                |
| GET         | `/api/games`           |                              | 201            | 400          | show games                                                   |
| GET         | `/api/games/:id`       |                              |                |              | show specific game                                           |
| POST        | `/api/games`           | {player1,player2,winner,img} |                |              | add game                                                     |
| PUT         | `/api/games/:id`       | {winner,score}               |                |              | edit game                                                    |


<br>

## API's
Whereby
<br>

## Packages

<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your *public* presentation slides

### Contributors

Raiza Garcia - <Raiza-Garcia>> - <linkedin-profile-link>

André Antunes - <Andre-AntunesPT> - <linkedin-profile-link>