# FYP

A virtual try room provides the service to customers to try on clothes without touching them and wearing them physically. VTR works by taking the live video feed of the user standing infront of the camera and measures their dimensions like height, shoulders, waist, facial features, etc to generate their realistic looking 3D model.
The user further selects the clothes and the size they want to try on. These 3D clothes are mapped onto the person's model resulting in an output which can be viewed 360 degrees by the user.
	The 3D cloth model is an essential part because just mapping the texture on the model will not enable the user to make a good decision. Also, making the clothes look natural on the model is important for the success of the project.





## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
