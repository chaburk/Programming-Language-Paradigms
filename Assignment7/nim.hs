-- Author: Chase Burkdoll
-- KUID: 3082972
-- Date: 11/22/2022
-- Assignment: Assignment 4
-- Last modified: 11/29/2022
-- Purpose: nim game in haskell

import Data.Char

-- Board utilities:

type Board = [Int] --Initalizes a type called Board that is a list of integers

initial :: Board --define functions for initial helper function
initial = [5,4,3,2,1] --helper function that contains a Board

finished :: Board -> Bool --define functions for finished helper function
finished b = all (== 0) b --helper function that checks if the board if empty for all rows in board

valid :: Board -> Int -> Int -> Bool --define function for valid helper function
valid b row num = b !! (row - 1) >= num --helper function that checks if the move is valid

move :: Board -> Int -> Int -> Board --define function for move helper function
move b row num = [adjust r n | (r,n) <- zip [1..5] b] --list comprehension that returns new board based on user inpu
                 where --conditional to put item inot the list comprehension
                    adjust r n = if r == row then n-num else n --adjust helper function that checks if it is the correct row and remove stars

-- I/O utilities:

newline :: IO () --define function for newline helper function
newline = putChar '\n' --adds a new line charcter to IO

stars :: Int -> String --define funciton for stars helper function
stars n = concat (replicate n "* ") --builds a list of strings of stars

putRow :: Int -> Int -> IO () --define function for putRow helper function
putRow row num = do putStr (show row) --displays the row number as a string
                    putStr ": " --displays a colon
                    putStrLn (stars num) --displays the number of stars

putBoard :: Board -> IO () --define function for putBoard helper function
putBoard [a,b,c,d,e] = do putRow 1 a --displays the row for row 1
                          putRow 2 b --displays the row for row 2
                          putRow 3 c --displays the row for row 3
                          putRow 4 d --displays the row for row 4
                          putRow 5 e --displays the row for row 5

getDigit :: String -> IO Int --define function for getDigit helper function
getDigit prompt = do putStr prompt --takes user inputs to ask how many digits
                     x <- getChar --gets the user answer
                     newline --newline helper function to add space
                     if isDigit x then --checks if their answer is a digit
                        return (digitToInt x) --returns the digit after turning it into an Int
                     else --If the answer is not a digit
                        do newline --newline helper function to add space
                           putStrLn "ERROR: Invalid Digit!" --print string tell them that it is an eror
                           getDigit prompt --recursively call function again

-- Nim game:

nim :: IO () --function declaration to play the game
nim = play initial 1 --calls the play function with the initial board and player one

next :: Int -> Int --function declaration for next helpe function
next 1 = 2 --if player is 1 then go to player 2
next 2 = 1 --if player is 2 then go to player 1

play :: Board -> Int -> IO () --function declaration for main game function
play board player = --takes input of a board and the player
  do newline --newline helper function to add space
     putBoard board --displays the board
     if finished board then --checks if the board is finished
        do newline --newline helper function to add space
           putStr "Player " --print statement to display player who won
           putStr (show (next player)) --print statement to display player who won
           putStrLn " wins!" --print statement to display player who won
     else --if the game is not yet finished
        do newline --newline helper function to add space
           putStr "Player " --print statement to display player whose turn it is
           putStrLn (show player) --print statement to display player whose turn it is
           r <- getDigit "Enter a row number: " --get user input and put it in var r
           n <- getDigit "Enter stars to remove: " --get user input and put it in var n
           if valid board r n then --check if it is a valid move
              play (move board r n) (next player) --if it's a valid move then play it and switch player
           else --if it is not a valid move
              do newline --newline helper function to add space
                 putStrLn "ERROR: Invalid Move!" --print statement to tell them to try again
                 play board player --recursive call to try again

