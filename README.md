# Discovery UI Assessment

* Installation steps (in terminal from the project folder):
	1. npm install
	2. react-native link
	3. npm run start
	4. react-native run-ios (in a separate terminal tab)
Usually step 3 is not necessarily but for current RN version Metro Bundler not starting automatically

* Alternative installation
	1. npm install
	2. react-native link
	3. npm run start
	4. open /ios/discovery.xcodeproj in XCode and build for some simulator
	
* I did not test the app for android 

* Some screen recordings (just in case)
	1. iPhone SE 
		https://drive.google.com/open?id=1w-cPe81STRwQAUQLlgF0lCcSF_BZefmv
	2. iPhone XS Max
		https://drive.google.com/open?id=1h26jPHpg619BTId7A098WhsqR9_fqh4s
	3. iPad Air
		https://drive.google.com/open?id=1Fo_Bzdrtv28chdyDNNvwF2XOio1JV7kX		
		

* Project structure:
	1. The component code is located in
		/src/components/SignUpForm
	2. Component's container (connected to Redux store)
		/src/containers/SignUp.js
	3. Actions and Reducer
		/src/reducers/main
	4. App messaging system	
		/src/containers/Confirmation.js

* Here I would like to describe the difference between the specification and the implementation
	1. Instead of implementing error messages as a part of the component the component sends messages to global application messaging system via Redux. 
	So the messaging/confirmation system and the signup form are different components which can communicate through action dispatching
	2. After entering an email and validation it sends the email address to the server to make sure it is not already subscribed. If the email is already in the list the component state won't be changed. If you see "This email address is already in the list" message just try another email address. Of course it's just simulation
	3. The SignUpForm component does not make any API calls. It dispatches requests for API and it changes its state ONLY in accordance with global app state changes (depending on API call responses). So the component is updated as a part of Redux data/event flow


