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
const $actioncard1 = $("#actioncard1")
const $actioncard2 = $("#actioncard2")
const $actioncard3 = $("#actioncard3")

$('#main').css('background-image', 'url("https://www10.lunapic.com/do-not-link-here-use-hosting-instead/16101910443455714?6166146")');
$('#body').css('opacity', "50%");


// ___________player data__________
hitCount=0;
if(hitCount>=2){
    hitCount=0;
}
let shipCount = [0,0,3,2,1,1]
let rotated = false; 
let currentShip = null;
let cardActivated = false; 
let offset =0;
let playerCards = ["proximityMine", "protection", "carpetbomb"];
let hitTracker = [];
let playerBoard = {
    board : []
};

//__________game data_____________
let turn =1;
let winner ="";

//________action card data________
const actioncards = ["proximityMine", "carpetbomb", "protection"]
const playerAttackOptions =[
    clicksAvailalable = 1,
    carpetBomb = false,
    shipsProtected = false,
    proximityMine = false
]
const computerAttackOptions = [
    hitsAvailalable = 1,
    carpetBomb = false,
    shipsProtected = false, 
    proximityMine = false
]
let boostSelected = false;

// ___________computer data___________
// let enemyBoard = [];
hitCount=0;
let enemyHitTracker = [];
let enemyCards = ["proximityMine", "carpet_bomb", "protection"];
let enemyShipCount = [3,2,2,1]



const enemyBoard = [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]


function actionCardHandler(e){
    if ( cardActivated = false){
        cardActivated = true;
    }  
    let clicked = jQuery(this).attr("id").toString();
    
    $this = $(this)
    
    
    
    console.log(jQuery(this).attr("id"))
    console.log(boostSelected)
    
    
    if((clicked === "actioncard1")){
        playerAttackOptions[1] = true;
        console.log(playerAttackOptions[1])
        $("#card-info").text(`CARPET BOOOOOMB`)
        boostSelected = true
    } else if ((clicked === "actioncard2") ){
        console.log(playerAttackOptions[2])
        playerAttackOptions[2] = true;
        console.log(playerAttackOptions[2])
        boostSelected = true;
        $("#card-info").text(`You are Protected This Turn!`)
    } else if (((clicked === "actioncard3") )){
        playerAttackOptions[3] = true;
        $("#card-info").text(`It'd be a shame if you missed now`)
        console.log(playerAttackOptions[3])
        boostSelected = true;
    }


    
    // if(($this.find(".card-title").text)==="proximityMine"){
    //     proximityMine = true;
    //     console.log("hello world")
    // }
    // if(($this.find(".card-title").text)==="Protection"){
    //     console.log("protection")
    // }

}

// $cardsButtons = $('#cardsbuttons')
// $cardsButtons.on('click',"*",actionCardHandler)
// console.log($cardsButtons)
// $actioncard1.on('click', actionCardHandler)
// $actioncard2.on('click', actionCardHandler)
// $actioncard3.on('click',actionCardHandler)

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

generateComputerdata();

function findNotUsed(){
    rand = randomNumber(0,50)
    if(enemyHitTracker[rand]>0){
       return findNotUsed()
    }else {

     return rand;
    }
}
let hitsrendered=0
function attackHuman (){
    let rand = findNotUsed();
    console.log(rand)
    if(playerAttackOptions[2] ===true){
        hitsrendered +=2

        
        playerAttackOptions[2]=false;
        boostSelected = false;
    }
  
    for( hitsrendered; hitsrendered<hitsAvailalable;hitsrendered++){

        // if((randomNumber(0,100)) < 40){
        //     let nextind = rand+1
        //     console.log(nextind)
        //     console.log("enemy carpet bomb")
        //     $("#card-info").text(`GET CARPET BOMBED `)
        //     console.log("hello")
        //     let prevind = rand-1;
        //     console.log(prevind + " " + "prevind")
        //     if(playerBoard.board[nextind]>0){
        //         playerBoard.board[nextind]--
        //         enemyHitTracker[nextind] =1
        //         $shipLocation.find(`#${nextind}`).css("background-color" ,"red")
        //         hitsrendered++
        //     }
        //     else{
        //         $shipLocation.find(`#${nextind}`).css("background-color" ,"orange")
        //         enemyHitTracker[nextind]=1
        //         hitsrendered++
        //     }
            
            
        //     if(playerBoard.board[prevind]>0){
        //         playerBoard.board[prevind]--
        //         console.log(playerBoard.board[prevind]+ " prev index")
        //         enemyHitTracker[prevind] =1
        //         $shipLocation.find(`#${prevind}`).css("background-color" ,"red")
        //         console.log($shipLocation.find(`#${prevind}`))
        //         hitsrendered++
        //     } else {
        //         $shipLocation.find(`#${prevind}`).css("background-color" ,"orange")
        //         enemyHitTracker[prevind]=1
        //         hitsrendered++
        //     }
        // } else {
            if((randomNumber(0,100) < 60) &&  (randomNumber(0,100) > 40)){
                computerAttackOptions[2] = true;
                $("#card-info").text(`Enemy is protected `)
            }
        
        console.log("Hits rendered" + hitsrendered)
        
        
        if(playerBoard.board[rand]>0){
            console.log("else if")
            playerBoard.board[rand]--;
            enemyHitTracker[rand]=1
            $shipLocation.find(`#${rand}`).css("background-color" ,"red")
            hitsrendered++;
            hitCount++;
            
        } else {
            console.log("else")
            $shipLocation.find(`#${rand}`).css("background-color" ,"orange")
            enemyHitTracker[rand]=1
            hitsrendered++;
            hitCount++
        }
    }
        hitsrendered=0;
    
    console.log("Computer Hits Rendered, Avail " + hitsrendered+ " " + hitsAvailalable)
    
    play(1)
}



    // }

        

// }


let clicksrendered=0;
const attackComputer = function(e){

    $("#card-info").text(``)
    let missleDropLocation = parseInt(e.target.id)
    $this = $(this)

    if(computerAttackOptions[2]===true){
        clicksrendered++;

        computerAttackOptions[2]=false;

    }

    if((playerAttackOptions[1]=== true) && (!hitTracker.includes(missleDropLocation+1))) {
      
        
        playerAttackOptions[1]=false;
        if(enemyBoard[missleDropLocation+1]>0){
            hitTracker.push(missleDropLocation+1)
            $hitLocation.find(`#${missleDropLocation+1}`).css({"background-color":"green"});    
            enemyBoard[missleDropLocation+1]--
        } else {
            $hitLocation.find(`#${missleDropLocation+1}`).css({"background-color":"red"}); 
        }
       

        if(enemyBoard[missleDropLocation-1]>0){
            hitTracker.push(missleDropLocation-1)
            $hitLocation.find(`#${missleDropLocation-1}`).css({"background-color":"green"});
            
        enemyBoard[missleDropLocation-1]--
        }
        else{
            $hitLocation.find(`#${missleDropLocation-1}`).css({"background-color":"red"});

        }
       
    }
  
    if((playerAttackOptions[3]===true) && (!hitTracker.includes(missleDropLocation))){
        playerAttackOptions[3] = false;
        
        if(enemyBoard[missleDropLocation]>0){
            hitTracker.push(missleDropLocation)
            $hitLocation.find(`#${missleDropLocation}`).css({"background-color":"green"});    
            enemyBoard[missleDropLocation]--
        }
       
            if(enemyBoard[missleDropLocation+5]>0){
                hitTracker.push(missleDropLocation+5)
                $hitLocation.find(`#${missleDropLocation+5}`).css({"background-color":"green"});    
                enemyBoard[missleDropLocation]--
        } else  if(enemyBoard[missleDropLocation-5]>0){
            hitTracker.push(missleDropLocation-5)
            $hitLocation.find(`#${missleDropLocation-5}`).css({"background-color":"green"});    
            enemyBoard[missleDropLocation]--
    } else if(enemyBoard[missleDropLocation+1]>0){
        hitTracker.push(missleDropLocation+1)
        $hitLocation.find(`#${missleDropLocation+1}`).css({"background-color":"green"});    
        enemyBoard[missleDropLocation]--
}

    clicksrendered++;
    }
    // while(clicksrendered< playerAttackOptions.clicksAvailalable){
        
    if(clicksrendered>=clicksAvailalable){
        console.log("Player clicks avail, rendered " + clicksAvailalable+ " " + clicksrendered)
        $hitLocation.unbind('click')
        clicksrendered=0;
    }

    if(!hitTracker.includes(missleDropLocation)){
        clicksrendered++;
        hitTracker.push(missleDropLocation);

        if(enemyBoard[missleDropLocation] > 0 ){
            $hitLocation.find(`#${missleDropLocation}`).css({"background-color":"green"});
            enemyBoard[missleDropLocation]--;
            hitsrendered++
           
        } else{
            $hitLocation.find(`#${missleDropLocation}`).css({"background-color":"red"});
           hitsrendered++;
        }

        
    }
    
    play(-1)
    
};

function checkWinner(){
    if ((checkSum(playerBoard.board))===0){
        winner = "computer"
       
        alert("COMPUTER WINS")
    }
    if ((checkSum(enemyBoard))===0){
       alert(("PLAYER WINS"))
        winner = "player"
    }
}
//put this after the player paces their ships

function play(whosturn){
 checkWinner();
    if(winner != ""){
        console.log(winner)
        return
    }
    let i=0;
  
     

    //    checkWinner()
    //    console.log(winner)

        
     if(whosturn>0){
        $hitLocation.on('click',"*", attackComputer)
            
        }else 
        if(whosturn<0) {
            
            attackHuman();
            console.log(boostSelected)
        
    }
   
    // if(turn>0){
    //     $hitLocation.on('click',"*", attackComputer)
    // }
    // else {
    //     attackHuman();
    // }

}



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
                console.log(counter2)
                // playerBoard.board[counter2]= 0;
                console.log(playerBoard.board)
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
    $this.css("background-color" ,"#62BA39") 
       
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
        let j = pos-1; 
      for (let i = 0; i < offset; i++) {
          console.log(j)
         playerBoard.board[j] = 1;
         console.log(playerBoard)
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

        if((checkSum(shipCount))===0){
            $actioncard1.on('click', actionCardHandler)
    $actioncard2.on('click', actionCardHandler)
    $actioncard3.on('click',actionCardHandler)
            play(1)
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
