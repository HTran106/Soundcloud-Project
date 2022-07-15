Soundcloud Clone is a web application for sharing and listening to music that is inspired by Soundcloud.

### Live Link:

[Soundcloud-Clone](https://soundcloud-project.herokuapp.com/)<br></br>
Start listening by clicking on Sign in and Log in as Guest.

### Locally:

User must create your own .env file and an AWS bucket.<br></br>
Inside of the .env file, you will need the following contents:

- PORT
- DB_FILE
- JWT_SECRET
- JWT_EXPIRES_IN
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

## Welcome View:

![welcome-page](https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/welcome.png)

## Home View:

![home-page](https://soundcloud-files-hdt.s3.us-west-1.amazonaws.com/home-page1.png)

## Technical Details:

- Built using React/Redux
- Sequelize
- Node.js
- Express.js
- Csurf.js
- BCrypt
- Amazon AWS S3
- React H5 Audio Player
- Used SQLite3 during Development and Postgres for Production

## Features:

- Guest user Login
- CRUD functionality for Songs
- CRUD functionality for Albums
- Search feature for Songs
- Individual Audio players customized for each page

## TO-DO:

- [ ] Playlists
- [ ] Comments
- [ ] Times played counter
- [ ] Uploaded date
- [ ] Download
- [ ] Likes, followers, followees

[Original Design Docs](https://github.com/HTran106/Soundcloud-Project/wiki/Soundcloud-Clone-Original-Design-Docs)
[Backend README.md](https://github.com/HTran106/Soundcloud-Project/blob/main/backend/README.md)
