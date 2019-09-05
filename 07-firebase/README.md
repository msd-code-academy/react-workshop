# React and Firebase

## Setup

Please clone the repo to your personal computer and install dependencies.

```
git clone https://github.com/msd-code-academy/react-workshop.git
cd react-workshop/07-firebase/excersise/
yarn (or npm install)
```

Run application on `localhost:3000`

```
yarn start (or npm start)
```

## Introduction

Firebase is used for `authentication`, `authorization`, and `managing a realtime database` - these operations make up the fundamentals real business applications need.

[Firebase introduction video on Youtube](https://youtu.be/iosNuIdQoy8)

List of primary libraries:

- React 16.9.0
- React Router 5
- Firebase 6
- Material UI 4

## Application

It is a starter project to display information with React and Material UI, to navigate from URL to URL with React Router and to store and retrive data with Firebase.

For help you can find final solution in its folder.

## Exercise 1 - Firebase Project Setup

Sign up on the official [Firebase website](https://firebase.google.com/). Get started > Add Firebase project > Choose any name > Skip Google Analytics for now > Finish project creation

Add Firebase to our web app. Project Settings > Add Firebase to your web app > Don't set up hosting > Register app

Create `.env` file located in project root and copy there Firebase configuration from Firebase SDK snippet. Similarly to:

```
REACT_APP_API_KEY=XXXXxxxx
REACT_APP_AUTH_DOMAIN=xxxxXXXX.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxxXXXX.firebaseio.com
REACT_APP_PROJECT_ID=xxxxXXXX
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=xxxxXXXX
```

Option of `env.development` and `.env.production` files for both kinds of environment variables.

Restart server.

## Exercise 2 - Provide Firebase in React

Use React's Context API to provide a Firebase instance once at the top-level of your component hierarchy. `FirebaseContext.Provider` wraps `App` component in root index.js.

Create an Higher Order Component (HOC) `withFirebase` in `Firebase/context.js` which wraps Component into `FirebaseContext.Consumer` and pass `firebase` instance as a prop.

`withFirebase` is then available via Firebase module in `src/components/Firebase/index.js` file.

## Exercise 3 - Firebase's authentication API

Now, we have to implement the interface of Firebase class that enables communication between the class and the Firebase authentication API.

Activate one of the availbale authentication providers on Firebase's websiate. Go to Authentication > Sign-in method > Enable Email/Password Provider > Allow users to sign up using their email address and password > Leave Email link disabled > Save

Let's implement the authentication API for our Firebase class. Go to `src/components/Firebase/firebase.js` and define all the authentication functions as class methods.

- Registration function takes email and password parameters for its function signature and uses an official Firebase API endpoint to create a user:

```
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
```

- Login/sign-in function takes email and password parameters:

```
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
```

- Sign out function, you don't need to pass any argument to it, because Firebase knows about the currently authenticated user

```
  doSignOut = () => this.auth.signOut()
```

- Reset a password for an authenticated user:

```
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email)
```

- Change a password for an authenticated user

```
  doPasswordUpdate = (password) => this.auth.currentUser.updatePassword(password)
```

[Manage Users in Firebase docs](https://firebase.google.com/docs/auth/web/manage-users)

## Exercise 4 - Sign Up with React and Firebase

Let's create registration page! It consists of the page, a form and a link. The form is used to sign up a new user to your application with username, email, and password. The link will be used on the sign in page (login page) later if a user has no account yet.

Firstly, enable SignUp and Home route in `App/index.js`. Then in Sign Up form `SignUp/index.js` add another input fields for `email`, `passwordOne` and `passwordTwo`. Finally, call Firebase authnetication API via our authentication interface in the Firebase class. Copy following snippet to `onSubmit` method.

```
this.props.firebase
  .doCreateUserWithEmailAndPassword(email, passwordOne)
  .then((user) => {
    this.setState({...INITIAL_STATE})
    this.props.history.push(ROUTES.HOME)
  })
  .catch((error) => {
    this.setState({error})
  })
```

## Exercise 5 - Sign In with React and Firebase

We have Sign Up page but we need Sign In page as well. It will be very similar to Sign Up but less complex.

Again, enable SignIn route in `App/index.js`. Implement Sign In form `SignIn/index.js` with two input fields for `email` and `password`. Add `onChange` and `onSubmit` logic very similar to Sign Up implementation. Use `doSignInWithEmailAndPassword(email, password)` method for Signing In.

## Exercise 6 - Sign Out with React and Firebase

To complete the authentication loop, implement the sign out component. In `SignOut/index.js` is needed to add logic to `onSignOut` handler. Use `doSignOut()` method for Singing Out and redirect landing page.

## Exercise 7 - Session handling with Firebase/React

We will keep track of authenticated user (session). If a user is authenticated, store it in the local state and pass the authenticated user object down to all components that are interested in it. Otherwise, pass the authenticated user down as `null`. On session state we can use conditional rendering like in Navigation bar.

Export `App` wrapped to `withAuthentication` HOC which provides context with authenticated user. Then in `Navigation/index.js` render proper Navigation based on information about authenticated user.

## Exercise 8 - Password Reset and Password Change with Firebase

Like in all other forms before, enable route for Password Forget and Account pages in `App/index.js`.

Implement `onSubmit` method in `PasswordForget/index.js`, use `doPasswordReset(email)` for password reset and then similarly `onSubmit` in `PasswordChange/index.js` using `doPasswordUpdate(passwordOne)`.

## Exercise 9 - Protected Routes in React with Authorization

For now, all routes are accessible by everyone. It doesn't matter whether the user is authenticated or not authenticated. There is no reason to show a non authenticated user the account or home page, because these are the places where a user accesses sensitive information.

`withAuthorization` is HOC used on pages where is neccesarily to check whether user is authenticated or not. Have a look on `Home/index.js` and `Account/index.js` where is defined condition. User is redirected to Log In page if is not authenticated and want to access those pages directly by change of URL.

## Exercise 10 - Firebase Realtime Database in React

So far, only Firebase knows about your users. There is no way to retrieve a single user or a list of users for your application from their authentication database. They are stored internally by Firebase to keep the authentication secure.

But we would like to also store information about registered users in our realtime database in Firebase. First, extend the interface for Firebase class for the user entity, in `Firebase/firebase.js`

- To get a reference to a user by `uid`:

```
  user = uid => this.db.ref(`users/{uid}`)
```

- To get a reference to all users:

```
  users = () => this.db.ref('users')
```

Then in Firebase open Database view > click on Create database > Start in test mode > Select location of Cloud

After creation of Database select Realtime Database and choose Rules tab. Change read and write rules to true to enable adding of record even for not verified users. Publish changes.

```

".read": true,
".write": true

```

User record will be added to databes when he is Signed Up. Therefore update `onSubmit` method in `SignUp/index.js` by following snippet.

```

then(authUser => {
  return this.props.firebase
    .user(authUser.user.uid)
    .set({
      username,
      email,
    })
  })

```

Place it in a chain of functions calls after `doCreateUserWithEmailAndPassword(email, passwordOne)`.

Finally, enable last Admin route in `App/index.js`.

## Sources

- https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
- https://soundcloud.com/czpodcast-1/cz-podcast-214-google-firestore-a-real-time-databaze
