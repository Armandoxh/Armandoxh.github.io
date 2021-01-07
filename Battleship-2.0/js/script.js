const gameRatioX = 10; 
const gameRatioY = 5;
const $gameWindow = $('#gamedisplays')
const $hitLocation = $('#hitLocation');
const $shipLocation= $('#shipLocation');

const $shipSelector =  $('#shipSelector')
const $btnCruiserAdd = $('#cruiser');
const $btnBattleShipAdd = $('#battleship')
const $btnSubmarineAdd = $('#submarine')
const $btnAircraftCarrierAdd = $('#aircraftcarrier')


let rotated = false; 
let currentShip = null;
let offset =0;

// const buttons = [2,3,4,5]
// buttons.forEach(button => {
//     const template = `                        
//     <li> 3 : Cruiser (2) <button id = "cruiser" data-value="${button}"> Place (3) </button></li>`
//     $shipSelector.append(template)
// });


const Ships = {
    cruiser: {
        health: [1,1] ,
        
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
 


 const placeShipClick = function(ev){

    currentShip = ev.target.id;
    const ship = $(`#${currentShip}`)
    offset = parseInt(ship.attr("data-value"));
    console.log(offset);
};

/*
*/

$btnAircraftCarrierAdd.on('click', placeShipClick)
$btnCruiserAdd.on('click', placeShipClick)
$btnBattleShipAdd.on('click', placeShipClick)
$btnSubmarineAdd.on('click', placeShipClick)

 //just grab the data value of the ship thats clicked and change offset in the click

// const calculatePlacementOffset = function(){
//     
// }





window.onkeyup = function(event) {
    let key = event.key.toUpperCase();
    if ( key == 'R' ) {
        rotated = !rotated   
    }
}

const addShips = function(){
    
}




$shipLocation
.on('mouseover', function(e){
       
    const $this = $(this)

    switch(offset) {
            case 2: 
                 nextTo = parseInt(e.target.id)+ offset-1;
                 $this.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                 break;
            
            case 3: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $this.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                nextThree = parseInt(e.target.id)+ offset-2;
                $this.find(`#${nextThree}`).css("background-color" ,"#62BA39")
                break;
            case 4: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $this.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                nextThree = parseInt(e.target.id)+ offset-2;
                $this.find(`#${nextThree}`).css("background-color" ,"#62BA39")
                nextFour = parseInt(e.target.id)+ offset-3;
                $this.find(`#${nextFour}`).css("background-color" ,"#62BA39")
                break;
            case 5: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $this.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                nextThree = parseInt(e.target.id)+ offset-2;
                $this.find(`#${nextThree}`).css("background-color" ,"#62BA39")
                nextFour = parseInt(e.target.id)+ offset-3;
                $this.find(`#${nextFour}`).css("background-color" ,"#62BA39")
                nextFive = parseInt(e.target.id)+ offset-4;
                $this.find(`#${nextFive}`).css("background-color" ,"#62BA39")
                break;
            
    };
    $this.find(`#${e.target.id}`).css("background-color" ,"#6EFA2C")    
})
.on('mouseout', function(e){
    const $This = $(this)

    switch(offset) {
        case 2: 
             nextTo = parseInt(e.target.id)+ offset-1;
             $This.find(`#${nextTo}`).css("background-color" ,"blue")
             break;
        
        case 3: 
            nextTo = parseInt(e.target.id)+ offset-1;
            $This.find(`#${nextTo}`).css("background-color" ,"blue")
            nextThree = parseInt(e.target.id)+ offset-2;
            $This.find(`#${nextThree}`).css("background-color" ,"blue")
            break;
        case 4: 
            nextTo = parseInt(e.target.id)+ offset-1;
            $This.find(`#${nextTo}`).css("background-color" ,"blue")
            nextThree = parseInt(e.target.id)+ offset-2;
            $This.find(`#${nextThree}`).css("background-color" ,"blue")
            nextFour = parseInt(e.target.id)+ offset-3;
            $This.find(`#${nextFour}`).css("background-color" ,"blue")
            break;
        case 5: 
            nextTo = parseInt(e.target.id)+ offset-1;
            $This.find(`#${nextTo}`).css("background-color" ,"blue")
            nextThree = parseInt(e.target.id)+ offset-2;
            $This.find(`#${nextThree}`).css("background-color" ,"blue")
            nextFour = parseInt(e.target.id)+ offset-3;
            $This.find(`#${nextFour}`).css("background-color" ,"blue")
            nextFive = parseInt(e.target.id)+ offset-4;
            $This.find(`#${nextFive}`).css("background-color" ,"blue")
            break;
        
};
    $This.find(`#${e.target.id}`).css("background-color" ,"blue")
    
    // $This.find(`#${nextTo}`).css("background-color" ,"blue")
}) 
.on('click', function(e){
    const $this = $(this);
    let currentTile = 0;

    for (let index = 0; index < offset; index++) {
        let temp = parseInt(e.target.id)+index;
        $this.find((`#${temp}`))
    }
    
});



$shipLocation

// $shipLocation.hide();
// $hitLocation.hide();


const playerBoard = {
    board : []
};


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
        $hitLocation.append(`<div id = "row${i}" class="row row-cols-10 border"  ">
        `)
        $currentRow = $hitLocation.find('#row'+ i);
        
     
            for (let j = 0; j < gameRatioY; j++) {
                counter2++;
                $currentRow.append(`<div id = "${counter2}" class="col border-end border-top "> ${counter2} </div>`)
                playerBoard.board.push(0)
                playerBoard.board[counter2-1]= 0;
            }
    }
    counter2 = 0; 
}


populateEmptyShipBoard();
populateEmptyAttackBoard();
console.log(playerBoard)