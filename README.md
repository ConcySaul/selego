# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ?
    - first, when we create a new user, the input has no type, which lead to display the whole password. We can fix that by simply add `type="password"` in app/src/scenes/list.js
    - When creating a user, the provided name isn't saved. Our API waits for an object with multiple properties, and one should be named "name" with the user's name as value. Just change the value of the property in the specific input from "username" to "name".
    - The update button to update users doesn't work. Change the event from onChange to onClick.
    - When we created a project, if we clicked on it, the app will crash saying "undefined is not an object (evaluating 'project.name.toString') which is normal. Delete the
    ".toString" line 73 in scene/project/view.
- Which feature did you develop and why ?
- i decided to develop a real time availabality status when you check for your mates in the specific component. I think real time event are always a good user experience. Nothing perfect, you'll only be qble to see it you and the other user are both connected and on the mounted specific mounted component /scene/user/list
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? Had a hard time to develop the socket server in nodejs since i usually use nestjs. Also, haven't touched react since a while, so i had to understand again how work useEffect and useState, but overall, the code is clean and pretty easy to understand.

