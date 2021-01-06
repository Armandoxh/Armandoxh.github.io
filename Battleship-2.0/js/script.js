const gameRatioX = 10; 
const gameRatioY = 5;
const $gameWindow = $('#gamedisplays')
const $hitLocation = $('#hitLocation');
const $shipLocation= $('#shipLocation');
let rotated = false; 


window.onkeyup = function(event) {
    let key = event.key.toUpperCase();
    if ( key == 'R' ) {
        rotated = !rotated   
    }
}


$shipLocation
.on('mouseover', function(e){
    nextTo = parseInt(e.target.id)+1;
    const $this = $(this)
    
    $this.find(`#${e.target.id}`).css("background-color" ,"orange")
    $this.find(`#${nextTo}`).css("background-color" ,"red")
})
.on('mouseout', function(ev){
    nextTo = parseInt(ev.target.id)+1;
    const $This = $(this)
    $This.find(`#${ev.target.id}`).css("background-color" ,"blue")

    $This.find(`#${nextTo}`).css("background-color" ,"blue")
});

$shipLocation

// $shipLocation.hide();
// $hitLocation.hide();


const playerBoard = {
    board : []
}




const Ships = {
   cruiser: {
       health: [1,1] 
   },

   submarine: {
       health: [1,1,1]
   },

   battleship: {
        health: [1,1,1,1]
   },

   aircraftCarrier : {
       health: [1,1,1,1,1]
   }
}


/**
 * Populate empty ship board to place ships 
 */
const populateEmptyShipBoard = function(){
    let counter = 0; 
    for (let i = 0; i < gameRatioX; i++) {  
        /**
         * Must change cols to match gameratios "row-cols-X" when the game gets larger
         */
        $shipLocation.append(`<div id = "row${i}" class="row row-cols-10 border" style="height: 50px; width:600px;
        background-color: blue;">
        `)
        $currentRow = $shipLocation.find('#row'+ i);
        
            for (let j = 0; j < gameRatioY; j++) {
                counter++;
                $currentRow.append(`<div id = "${counter}" class="col border-end border-top "> ${counter} </div>`)
            }
    }

    counter = 0; 
}


/**
 * Populate A board that shows the players hits and misses.
 * 
 */

const populateEmptyAttackBoard = function(){

let counter2 = 0; 

    for (let i = 0; i < gameRatioX; i++) {  
        /**
         * Must change cols to match gameratios "row-cols-X" when the game gets larger
         */
        $hitLocation.append(`<div id = "row${i}" class="row row-cols-10 border" style="height: 40px; width:250px;
        background-color: "blue"); ">
        `)
        $currentRow = $hitLocation.find('#row'+ i);
        
     
            for (let j = 0; j < gameRatioY; j++) {
                counter2++;
                $currentRow.append(`<div id = "${counter2}" class="col border-end border-top "> ${counter2} </div>`)
                playerBoard.board.push(0)
                playerBoard.board[counter2]= 0;
            }
    }
    counter2 = 0; 
}

populateEmptyShipBoard();
populateEmptyAttackBoard();
console.log(playerBoard)