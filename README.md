# Battleship 2.0 
## Concept: 
An adapted version of Hasbro's popular game "Battleship". Players who played the normal battleship will recognize the basic gameplay mechanics. However, there's a twist when "action-cards" get added to the mix. Players will now have the ability to gather powerups for their moves, giving them more control over the turn-based classic. 
## Wireframes:

## Technologies Used:
    - HTML
    - CSS 
    - FontAwesome 
    - Bootstrap
    - JQuery
    - JavaScript

## Approach: 
First, a standard battleship game will need to be built. This consists of two 5x10 and the players will have the option to place their ships on any row or column on their field. There are 6 ships with varying lengths spanning from 2 to 5.  Players then take turns choosing a square at random on the opponent's grid to choose to shoot a missile at. If the player hits an enemy ship one time on each square it takes up on the grid, the ship is destroyed. Players take turns until one player loses all of their ships. 

The twist: Players will begin their turn with 3 action - cards (see above). These action cards will be usable before the player makes their choice of where to attack. Every time a player scores a "HIT", the player recieves an action card at random. 

## Challenges: 
programming a computer to play against
keeping track of what dom element does what

Known Bugs: 

clicking to fast when choosing the tile to place the missile on causes a memory leak and will break the game
clicking in between divs will sometimes cause the same memory leak 
mouseover is not removed after all ships are placed and unhighlights them if they were selected to be "attacked" by the computer
