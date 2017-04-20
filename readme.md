# NSS Project SetUp 5

### Project Description 
This assignment is the last of five, to walk through the Project Setup process that will now become routine for all future projects. Included in the setup is installing `jQuery`, `Bootstrap`, and `Grunt` code in local application `lib` directory. In addition to the set-up process, this application prints ten images to the DOM upon the button click, three per row. 


#### printArray Project SetUp Launch
![printArray Project SetUp Launch](https://raw.githubusercontent.com/SMITHsharon/projectSetup5/screens/screens/printArray%20on%20Launch.png)


#### printArray on Click
![printArray on Click](https://raw.githubusercontent.com/SMITHsharon/projectSetup5/screens/screens/printArray%20on%20Click.png)


### Project Specs
#### Project Set-Up
- Installed `jQuery` in the `lib` directory
- Installed `Bootstrap` in the `lib` directory
	```
	bower install jquery --save
	bower install bootstrap --save
	```
- Added the `<script></script>` and `<link>` tags to the `index.html` file.
- Created a `.gitignore` file
- Created `Gruntfile.js`
- Committed all to GitHub, and merged in the Project SetUp
- Ran `Grunt` in the background in a separate terminal window while developing the printArray application

#### `Bootstrap` and `jQuery`
- Uses Bootstrap to define the row and column structure to output the images to the DOM. 
- Writes the event handlers using `jQuery`. 
- After building the `html` string using `JavaScript`, writes the images to the DOM using `jQuery`. 


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `Bootstrap`
- `jQuery` 
- `Grunt`


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/projectSetup5.git
cd projectSetup5
cd lib
bower install
npm install
npm install http-server -g
http-server -p 8080
This will show in your browser at: http://localhost:8080
```


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
