
[![LinkedIn][linkedin-shield]][linkedin-url]
[![github][github-shield]][github-url]
[![Twitter][twitter-shield]][twitter-url]
[![Linktree][linktree-shield]][linktree-url]
[![Instagram][instagram-shield]][instagram-url]
[![GMail][gmail-shield]][gmail-url]

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/vishnu-suresh-perumbavoor/
[twitter-shield]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/in/vspeeeeee
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/vishnusureshperumbavoor/
[linktree-shield]: https://img.shields.io/badge/linktree-39E09B?style=for-the-badge&logo=linktree&logoColor=white
[linktree-url]: https://linktr.ee/vishnusureshperumbavoor2.0
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/vishnusureshperumbavoor
[gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:vishnusureshperumbavoor@gmail.com
# vsp-bot NPM Package

## Description

This npm package provides the details of [Vishnu Suresh Perumbavoor](https://vishnusureshperumbavoor.github.io/V-S-P/)

## Prerequisites
* NodeJS  
* VSCode 

## Installation
Open a directory and run command
```
npm install vsp-bot
```
Create file app.js and copy paste the code
```sh
const vspbot = require('vsp-bot');
console.log(vspbot);
```
Run command
```
node app.js
```

### Example Output
```
{
  "name": "Vishnu Suresh Perumbavoor",
  "occupation": "Hardware and material science engineer",
  "location": "Perumbavoor, Kerala, India",
  "twitter": "https://twitter.com/vspeeeeee"
}
```

# How to create an NPM package like this
## Prerequisits 
NodeJS, VSCode and an account on [npmjs.com](https://www.npmjs.com/)

### let's create a package like this
Open a directory and run command
```sh
npm init
```
Create a file called index.js and write the code
```sh
const biodata = {
  name: "VSP Bot",
  creator: "Vishnu Suresh Perumbavoor",
  founderOf: "VSP Enterprises",
};

module.exports = biodata;
```
Create a file called test.js and test the code 
```sh
const vspbot = require('./index');
console.log(vspbot);
```
Run test file
```sh
node test.js
```
Publish the package 
you should have an account on [npmjs.com](https://www.npmjs.com/) for this.
```sh
npm login
```
Provide your NPM username, password, and email when prompted. <br><br>
Publish the package
```sh
npm publish
```
Your publish package will be now visible at the profile section of your npm account 
 
Updating the package 
* Make the desired changes to the code in index.js.
* Update the version number in package.json.
* Publish the updated package using npm publish.

## Contact

For any inquiries or support, you can reach out to [Vishnu Suresh Perumbavoor](https://vishnusureshperumbavoor.github.io/V-S-P/). <br><br>
[![GMail][gmail-shield]][gmail-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![github][github-shield]][github-url]
[![Twitter][twitter-shield]][twitter-url]
[![Linktree][linktree-shield]][linktree-url]
[![Instagram][instagram-shield]][instagram-url]
