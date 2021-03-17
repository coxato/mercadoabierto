![mercadoabierto logo](https://i.ibb.co/z4yKrhw/full-logo.png)
# Mercadoabierto, the Mercadolibre clone
This project is a clone of [mercadolibre](https://www.mercadolibre.com/) website called by me as "mercadoabierto". It's one of the best clones out there.

# Live project
**see the project here: [mercadoabierto](https://mercadoabierto.vercel.app/)**

## Why?
The purpose of this project was to practice what was learned in the [nextjs](https://platzi.com/cursos/next/) and [nodejs](https://platzi.com/cursos/practico-node/) courses. Of course, you learn even more along the way than the courses teach, which is normal and reasonable.


## Backend for this project
this is the [backend repo](https://github.com/carlosEdua/mercadoabierto-backend)

# Instalation
with yarn

```yarn install```

with npm

`npm install`

### Firebase
This project only uses firebase cloud storage for store images. So you have to init a firebase project in https://console.firebase.google.com/ it's very simple. If you've never used firebase, no problem, I only use firebase to store images, nothing more. So you just have to start a project and copy a configuration file, it is not mandatory to have previous experience with firebase
Here is a video to init a [firebase project](https://www.youtube.com/watch?v=-3GkNz1lfCE&ab_channel=R3HABMEDIA)

If you want to know why I use firebase just for store images the answer is very simple: [vercel](https://vercel.com/) does not allow save files, yep, that's it. I have this project (frontend and backend) in [vercel](https://vercel.com/) 

### config.js
Once you have created a project in the firebase console, please open the file `config.example.js` (in the root directory) and rename it to `config.js`
just fill the right data like your firebase configuration and the [rest API url](https://github.com/carlosEdua/mercadoabierto-backend) (in this case is something like http://localhost:5000/api)

### Install backend server and run project
The last step is install the [backend for this project](https://github.com/carlosEdua/mercadoabierto-backend)
Then: 
- In the [backend](https://github.com/carlosEdua/mercadoabierto-backend) root directory:
`yarn dev` or `npm run dev`

- In the frontend root directory (this repo)
`yarn dev` or `npm run dev`


If you don't want to install anything and just want to see the project online just check it out https://mercadoabierto.vercel.app/

# Contribution
If you want to add or modify something fork the repo, and if you see a bug, write an issue.

And if you want to give me a star, I appreciate it.