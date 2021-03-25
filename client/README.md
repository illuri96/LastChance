# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


####
Notes :

# LastChance
# LastChance
# LastChanceTue Mar 16 : 

	'bodyParser' is included in express itself from the latest version of node. No need to import again. call it from 'express'.
	
Wed Mar 17:

Steps for MERN stack application : 

1. Create client(React) and server(node) folders separately in the project. 

server : 

	1. Create the index.js file. 
	2. npm init -y to create the package.json.
	3. Install cors, express, mongoose and nodemon with npm. 
	4. create the 'type variable equals 'module'and change the start value to nodemon 		index.js.
	5. connect to mongodb using mongoose.connect() in index.js and initialize cors and other necessary objects(app.use()) in the express. 
	6. create Routes folder and creates posts file and create router from express.Router().
	7. create controllers folder and add the backend functionality for the posts. 
	
client : 

	1. npx create-react-app ./ to create the basic structure of the react application. 
	2. install axios, moment, react-file-base 64 redux and redux-thunk using npm. 
	3. Create an index.js to call the app by id(ReactDOM.render()).
	4. Create reusable 'components' folder in the src folder which has all the components in each separate folders and each component containing its own .js and styles. 
	5. Create index.js in src/api folder to connect api's to posts.   
	6. To use redux create two folders actions(posts.js) and reducers(index.js and posts.js) and add boiler plate code to index.js of the app. 
	7. In posts.js(actions), create actioncreators such as getPosts and createPost with a dispatch object which is then retrieved by posts.js in reducers to return an action.
	8. dispatch function is then used in app.js using useEffect by react.
	9. In post in posts connect to redux using useSelector by react-redux. 