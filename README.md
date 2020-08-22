# Social App
This is a fully-featured social media application using React, Firebase, Redux, Express, and Material-UI. User can signup and post as much as screams, like other screams, put a comment in any scream and can update self user profile.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
As I have deployed the backend on firebase itself so there is no need to install backend(functions) dependencies to run on local machine.
Only fronend(Client) need to install into local machine.

### Prerequisites

What things you need to install the app and how to install them:

```
Clone this repo into your local machine: git clone <url> or download zip
```
### Installing

A step by step series of examples that tell you how to get a development env running

Install client dependencies: cd client 

```
npm install
```
It will install all dependencies from client(package.json)

```
npm start
```
### Backend

As Backend(functions) is deployed on https://console.firebase.google.com/ then there is no need to install backend dev-dependencies on local system.

### Installing backend on local

To install backend as well on local system:

Install backend dependencies: cd functions 

```
npm install
```
End with an example of getting some data out and then
```
firebase init
```
Select project title(link shared) and then

```
firebase serve
```
Change the url in proxy(package.json)(client) with your local portno. generated after firebase serve

## Built With

* React and Redux - The web framework used
* Express and Node - Used to created Rest API
* Firebase - Database

### Project structure (Client)
 * Routes defined in folder Pages
 * Components defined in folder components
 * State management defined in folder redux
 * Authentication defined in folder util
 
### Project structure (function)
* API Functions defined in folder handlers
* Authentication and validation defined in folder util

## Project user details
| Role | Email | Password |
| :---         |     :---:      |          ---: |
| Admin   | admin@email.com     | 123456    |
| user1     | shashank@email.com       | 123456      |
| user2     | shivam@email.com       | 123456      |
| user3     | rickey@email.com       | 123456      |

