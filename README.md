# TIC TAC TOE

## Description

This tic-tac-toe game can be played with postman,
allows two players to play against each other in real-time.



## How to play?
* You start the game by sending GET request to the route /start-game, you will get the board and who's turn it is (X or O) as a response.
* To make move you can send POST request to the route /play, the body should contain the property number which will contain the place where you want to place your sign. As a response you will get the updated board and who's turn it is.
* To check if your opponent made his move you can use the route /view-board to see the current board and who's turn it is. 

## Explanation of the project
* I structured my project with server folder, which contains the server and the routes, and helpers which contains useful functions to the game

* The router handles the request in the following method:
    * If it is GET/start-game request, it initializes the board and sends it and who's turn it is as response.
    * If it is GET/view-board requset, it sends the current board and who's turn it is as a response.
    * If it is POST/play request, it takes the number from the req.body and place the player sign instead of the chosen number. Then it will check for a win, if there is it will send response about it, and if not it will send the updated board the who's turn is it. If there is a problem with the request body (such as wrong number or does not contain the number property) it will send as a response to try again.

## Technologies 
* For the server I used Express

## Example


* To start I will send GET/start-game request, I will get the following response:  

It's O's turn:  
|1| |2| |3|  
|4| |5| |6|  
|7| |8| |9|  

send number to place your sign

* Then to put my sign- O in the place of the number 3 I will send POST/play request: 
{
    "number": "3"
}  
As a response I will get:  It's X's turn:  
|1| |2| |O|  
|4| |5| |6|  
|7| |8| |9|  

send number to place your sign

* Then I will check the board with the GET/view-board requset and when it my turn I will make another move.

* The game will over if someone wins or the board is full- draw

