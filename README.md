# Favorite Places v1.0.0

A Single-Page Application that enables a user to search for venues, add them to a list, and view their locations on a map.

## Tech Stack

### Front End

- React
- Redux
- Bootstrap
- React Bootstrap
- React-Map-GL
- Authentication using JWT and local storage

### Back End

- Node.js
- Express
- MongoDB
- Yelp Fusion API
- Mapbox API
- Nodemailer

## Features

- Search for places
- Register account
- Create a list
- Delete a list
- Add places to a list
- Delete places from list
- View places from a list on a map
- Notification toasts for invalid input
- Protected routes
- Tests using Jest, Enzyme, and Puppeteer

## Future Features

- Filter lists by name
- Autocomplete in search bar
- Spell correction for misspelled search terms and location
- Sign up with Facebook
- Sign up with Google
- Password reset using Nodemailer and SendGrid
- Email verification at sign up
- Strong password enforcement
- Settings page for user to change name, email, or password
- styled-components
- Ability to upload a profile pic using Cloudinary API
- User profile page
- Rate limiting
- Protection from HTTP parameter pollution
- Weather report for a location using AccuWeather API
- Admin page and controls
- Webpack
- CI/CD using CircleCI
- Documentation using Swagger
- Storybook
- Next.js
- Turn into a PWA
- Dark mode
- Code splitting using React Suspense
- Chat using Socket.IO
- Two-factor authentication
- Software design document

## Deployed

<https://favorite-places-cn.herokuapp.com/>

## Environmental Variables

### Client

- REACT_APP_MAPBOX_API_KEY
- REACT_APP_MAPBOX_STYLE

### Server

- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- CLOUDINARY_CLOUD_NAME
- YELP_API_KEY
