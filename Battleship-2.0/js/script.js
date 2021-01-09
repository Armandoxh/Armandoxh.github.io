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
const $shipPlacementError = $("#invalidShipPlacement")

// ___________player data__________
let shipCount = [0,0,3,2,1,1]
let rotated = false; 
let currentShip = null;
let offset =0;
let hitTracker = [];
let playerBoard = {
    board : []
};

//__________game data_____________
let turn =1;

//________action card data________
const playerAttackOptions =[
    clicksAvailalable = 1,
    carpetBomb = 0,
    shipsProtected = false, 
    diceRoll = false
]
const computerAttackOptions = [
    clicksAvailalable = 1,
    carpetBomb = 0,
    shipsProtected = false, 
    diceRoll = false
]

// ___________computer data___________
// let enemyBoard = [];
let enemyHitTracker = [];
let enemyCards = [];
let enemyShipCount = [3,2,2,1]



const enemyBoard = [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]



function generateComputerdata  (){
    let placedCoordinates = []
    for (let i = 0; i<50; i++){
        // enemyBoard[i] = 0; 
        enemyHitTracker[i] = 0;
    }

    // console.log("enemyshipcount checksum" + checkSum(  enemyShipCount))
    // while(checkSum(enemyShipCount)>0){
    //     let temp =0;
    //     let placementIndex=0;
    //     for(let i = 0; i <=8; i++){
    //         temp = randomNumber(0,49);
    //         enemyBoard[temp] = 1; 
    //         placedCoordinates.push(temp); 
    //         // console.log(placedCoordinates)
    //         if(enemyShipCount[placementIndex]>0){
    //             enemyShipCount[placementIndex]--;
    //         }  else{
    //             placementIndex++;
    //         }
    //     }
    // }
}


generateComputerdata();

function checkSum(arr){
    let sum = 0; 
    for(let i = 0; i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let clicksrendered=0;
const attackComputer = function(e){
    
    
    let missleDropLocation = parseInt(e.target.id)
    $this = $(this)
    console.log(e.target.id)
    // while(clicksrendered< playerAttackOptions.clicksAvailalable){
        
    if(clicksrendered>=1){
        console.log(clicksAvailalable+ " " + clicksrendered)
        turn*=-1
        $hitLocation.unbind('click')
        clicksrendered=0;
        return
    }

    if(!hitTracker.includes(missleDropLocation)){
        clicksrendered++;
        hitTracker.push(missleDropLocation);
        console.log(clicksrendered , clicksAvailalable)

        if(enemyBoard[missleDropLocation] > 0 ){
            $hitLocation.find(`#${missleDropLocation}`).css({"background-color":"red"});
            enemyBoard[missleDropLocation]--;
        }

        if(checkSum(enemyBoard)<=0){
            console.log(checkSum(enemyBoard))
        }
    }
    
};


function play(){
    if(turn>0){
        $hitLocation.on('click',"*", attackComputer)
    }
    else {
        console.log("no")
    }
}
play();



// const buttons = [2,3,4,5]
// buttons.forEach(button => {
//     const template = `                        
//     <li> 3 : Cruiser (2) <button id = "cruiser" data-value="${button}"> Place (3) </button></li>`
//     $shipSelector.append(template)
// });


// const Ships = {
//     cruiser: {
//         health: [1,1] ,
        
//     },
 
//     submarine: {
//         health: [1,1,1]
//     },
 
//     battleship: {
//          health: [1,1,1,1]
//     },
 
//     aircraftCarrier : {
//         health: [1,1,1,1,1]
//     }
//  }
 


 const placeShipClick = function(ev){

    currentShip = ev.target.id;
    const ship = $(`#${currentShip}`)
    offset = parseInt(ship.attr("data-value"));
};

/*
*/

$btnAircraftCarrierAdd.on('click', placeShipClick)
$btnCruiserAdd.on('click', placeShipClick)
$btnBattleShipAdd.on('click', placeShipClick)
$btnSubmarineAdd.on('click', placeShipClick)



window.onkeyup = function(event) {
    let key = event.key.toUpperCase();
    if ( key == 'R' ) {
        rotated = !rotated   
    }
}

const addShips = function(){
    
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
                playerBoard.board[counter2-1]= 0;
            }
    }
    counter2 = 0; 
}






populateEmptyShipBoard();
populateEmptyAttackBoard();




for(let i = 0; i <gameRatioX;i++){
  $shipLocation.find(`#row${i}`).on('mouseover',"*", function(e){
    const $this = $(this)
   
    

    switch(offset) {
            case 2: 
                 nextTo = parseInt(e.target.id)+ offset-1;
                 $shipLocation.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                 break;
            
            case 3: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $shipLocation.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                nextThree = parseInt(e.target.id)+ offset-2;
                $shipLocation.find(`#${nextThree}`).css("background-color" ,"#62BA39")
                break;
            case 4: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $shipLocation.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                nextThree = parseInt(e.target.id)+ offset-2;
                $shipLocation.find(`#${nextThree}`).css("background-color" ,"#62BA39")
                nextFour = parseInt(e.target.id)+ offset-3;
                $shipLocation.find(`#${nextFour}`).css("background-color" ,"#62BA39")
                break;
            case 5: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $shipLocation.find(`#${nextTo}`).css("background-color" ,"#62BA39")
                nextThree = parseInt(e.target.id)+ offset-2;
                $shipLocation.find(`#${nextThree}`).css("background-color" ,"#62BA39")
                nextFour = parseInt(e.target.id)+ offset-3;
                $shipLocation.find(`#${nextFour}`).css("background-color" ,"#62BA39")
                nextFive = parseInt(e.target.id)+ offset-4;
                $shipLocation.find(`#${nextFive}`).css("background-color" ,"#62BA39")
                break;
            
    };
    $this.css("background-color" ,"#6EFA2C") 
       
});

$shipLocation.find(`#row${i}`).on('mouseout',"*", function(e){
        const $This = $(this)
    
        switch(offset) {
            case 2: 
                 nextTo = parseInt(e.target.id)+ offset-1;
                 $shipLocation.find(`#${nextTo}`).css("background-color" ,"blue")
                 break;
            
            case 3: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $shipLocation.find(`#${nextTo}`).css("background-color" ,"blue")
                nextThree = parseInt(e.target.id)+ offset-2;
                $shipLocation.find(`#${nextThree}`).css("background-color" ,"blue")
                break;
            case 4: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $shipLocation.find(`#${nextTo}`).css("background-color" ,"blue")
                nextThree = parseInt(e.target.id)+ offset-2;
                $shipLocation.find(`#${nextThree}`).css("background-color" ,"blue")
                nextFour = parseInt(e.target.id)+ offset-3;
                $shipLocation.find(`#${nextFour}`).css("background-color" ,"blue")
                break;
            case 5: 
                nextTo = parseInt(e.target.id)+ offset-1;
                $shipLocation.find(`#${nextTo}`).css("background-color" ,"blue")
                nextThree = parseInt(e.target.id)+ offset-2;
                $shipLocation.find(`#${nextThree}`).css("background-color" ,"blue")
                nextFour = parseInt(e.target.id)+ offset-3;
                $shipLocation.find(`#${nextFour}`).css("background-color" ,"blue")
                nextFive = parseInt(e.target.id)+ offset-4;
                $shipLocation.find(`#${nextFive}`).css("background-color" ,"blue")
                break;            
    }
    $This.css("background-color" ,"blue") 

    })



    function place(pos, offset){
        let j = pos; 
      for (let i = 0; i < offset; i++) {
         playerBoard.board[j] = 1;
         j++;   
      } 
    }

    function countShips(ship){
        if(ship==="cruiser"){
            
            shipCount[2]--;
            if(shipCount[2]>0){
            $("#cruisersLeft").text(`${shipCount[2]} cruisers left `)
            } else {
                $("#cruisersLeft").text(`${0} cruisers left `)
            }
            } 
             if (ship ==="battleship"){
                 shipCount[4]--;
             if(shipCount[4]>0){
                $("#battleshipsLeft").text(`${shipCount[4]} battleships left `)
            } else {
                $("#battleshipsLeft").text(`${0} battleships left `)
            }
        }
             if (ship ==="submarine"){
                 shipCount[3]--;
                 if(shipCount[3]>0){
                $("#submarinesLeft").text(`${shipCount[3]} submarines left `)
            } else {
                $("#submarinesLeft").text(`${0} submarines left `)
            }
        }

             if (ship ==="aircraftcarrier"){
                 shipCount[5]--;
                 if(shipCount[5]>0){
                $("#aircraftcarriersLeft").text(`${shipCount[5]} aircraft carriers left `)
            } else {
                $("#aircraftcarriersLeft").text(`${0} aircraft carriers left `)
            }
        }
        }
        
    



$shipLocation.find(`#row${i}`).on('click', function(e){

    let shipLocations ;
    const $this = $(this);
    ship = $(`#${currentShip}`)
    let currentTile = parseInt(e.target.id)
    let lastTile = parseInt(e.target.id) + offset-1
    let count=0
    
    
    if((lastTile%5===0)){
        $shipPlacementError.hide();
        
        console.log()
        // console.log($((`#${currentShip}`).attr("data-value")))
        console.log(shipCount[parseInt(ship.attr("data-value"))])
        if(shipCount[parseInt(ship.attr("data-value"))] > 0){
            place(currentTile,offset)
            while(count<offset){
                $this.unbind('mouseover').unbind('mouseout')
                count++;
            }
            countShips(currentShip)

        }
        console.log(playerBoard)
        
       
        
    } else if(((currentTile % gameRatioY) > (lastTile % gameRatioY)) || (currentTile%5===0) ){
        $shipPlacementError.show();
        
    } else {
        if(shipCount[parseInt(ship.attr("data-value"))] > 0){
            place(currentTile,offset)
            while(count<offset){
                $this.unbind('mouseover').unbind('mouseout')
                count++;
            }
            countShips(currentShip)

        }
        console.log(playerBoard)
    }

    

 
  
});
}

