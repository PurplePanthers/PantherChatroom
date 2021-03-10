# PantherChatroom

**--------------------------------------------------------------CONTRIBUTORS--------------------------------------------------------------**

Said Mghabghab

Jack Murphy

Mischa Dabrowski

Jose Espinoza

**---------------------------------------------------------DEPLOYED HEROKU LINK-------------------------------------------------------------**

https://panther-chatroom.herokuapp.com/
 
 
 **--------------------------------------------------------------USER STORY-----------------------------------------------------------------**

As a user I would like to use a live chat to meet new people and make new friends 

When 
I go to the web page, I can register or login

Then
I can go to my profile and input a short bio and a photo

When
I enter a random chat, I can talk to the person on the other end
 
If 
I enjoy talking to the person, I can add them as a friend

Else
I can leave the chat and start a new one

When
I view my friends list, I can see who is online and who is offline

Then
I can search through my friends and choose a friend to start chatting with


**-------------------------------------------------------------PROJECT 2---------------------------------------------------------------**
                                                             ===========

                           front-end    +    RESTful API calls    +    backend     +     database
                              | |                   | |                  | |                | |
                           Bootstrap 5       GET\POST\DELETE\PUT     Use Node+Express     MySQL (ORM)
                                          ___________
                        \\\\\\\\\\\\\    |           |    ( https://socket.io/docs/v3/index.html ) ::::::::\
                         |NEW LIBRARY :: | Socket.IO | :: ( https://socket.io/docs/v3/client-api ) :::::::::}~~>
                        /////////////    |___________|    ( https://socket.io/docs/v3/server-api ) ::::::::/

                                 
**---------------------------------------------------------Future Development-----------------------------------------------------------**
                                              
-Upload local pictures
-Make a General channel
-Add Video Call feature
-Insert Emojis or pictures in text
-Add “{user} is typing” functionality.
-Allow users to create rooms and add their friends to it
-Increased Security
                                               
**---------------------------------------------------------------------------------------------------------------------------------------**

**---------------------------------------------LogIn/SignUp      -     Chatting Room-----------------------------------------------------**
                                                   | |                      | |
                                            __MYSQL(Heroku)__           __SOCKET.IO__
                             _______________________|________________________|_____________________________________________________
    ________________________|______________________________________________      _____________|_________________________           |
   |_________________________________USERS_________________________________|    |_________________chats_________________|          |
   |--|----|---|-----|-------|--------|---|--------|--------|-----|---|----|    |--|---------|----|------------|--------|          |
   |ID| FN | LN| Age | Gendre|img_path|BIO|username|login_pw|email|S_Q|S_A |    |id|chat_name|time|chat_members|messages|          |
   |__|____|___|_____|_______|________|___|________|________|_____|___|____|    |__|_________|____|____________|________|          |
                                                                                                              _____________________|
                                                                                                         ____|__________________________
                                                                                                        |___________matches_____________|
                                                                                                        |--|--------|-------|-----------|
                                                                                                        |id|username|friend |friend_room|
                                                                                                        |__|________|_______|___________|
**-------------------------------------------------------------Structure-----------------------------------------------------------------**      
      
* Structured at least loosely MVC:
 /project2
  -/public (all the html, the ‘view’ component)
  -/public/assets (all the images, css, js)
  -/app (all the server-side logic)
  -/app/orm.js (the ‘model’ component)
  -/app/routes (for the routing logic, or ‘controller’ component)
  -server.js
  
**---------------------------------------------------------Additional tools---------------------------------------------------------------**

* LINT Tool* ==> automated checking of the source code for programmatic and stylistic errors.          
* NPM package dotenv* ==> Wont expose sensitive API key information on the server.    

**------------------------------------------------------------References ----------------------------------------------------------------**

picture uploading  :  https://github.com/c0dehot/node-picture-upload
               
**------------------------------------------------------------Screenshots-----------------------------------------------------------------**
* Screenshots are available inside ./assets/ for more details
![GitHub Logo](/public/assets/main-room.JPG)
![GitHub Logo](/public/assets/random-chat.JPG)
![GitHub Logo](/public/assets/profile.JPG)
![GitHub Logo](/public/assets/friends.JPG)

**------------------------------------------------------------License-----------------------------------------------------------------**
 