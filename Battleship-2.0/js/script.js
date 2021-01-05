const gameRatioX = 5; 
const gameRatioY = 5;
const $hitLocation = $('#hitLocation');
const $shipLocation= $('#shipLocation');
$('.example').show()
console.log($shipLocation)

// $shipLocation.hide();
// $hitLocation.hide();


const playerBoard = {
    board : []
}

const ships = {
    Cruiser: {
        length : 5 
    },

    aircraftCarrier : {
        length : 2
    }
}



const populateEmptyShipBoard = function(){
    for (let i = 0; i < gameRatioX; i++) {  
        /**
         * Must change cols to match gameratios "row-cols-X" when the game gets larger
         */
        $shipLocation.append(`<div id = "row${i}" class="row row-cols-5 border" style="height: 100px; width:450px;
        background-color: rgba(140, 9, 9, 0.1);">
        `)
        $currentRow = $shipLocation.find('#row'+ i);
        
            for (let j = 0; j < gameRatioY; j++) {
                $currentRow.append(`<div id = "${i}${j}" class="col border-end border-top "> ewrq </div>`)
                
               
            }
    }

}
const populateEmptyAttackBoard = function(){

    for (let i = 0; i < gameRatioX; i++) {  
        /**
         * Must change cols to match gameratios "row-cols-X" when the game gets larger
         */
        $hitLocation.append(`<div id = "row${i}" class="row row-cols-5 border" style="height: 100px; width:450px;
        background-color: rgba(140, 9, 9, 0.1); ">
        `)
        $currentRow = $hitLocation.find('#row'+ i);
        
        playerBoard.board[i]= []
    
            for (let j = 0; j < gameRatioY; j++) {
                $currentRow.append(`<div id = "${i}${j}" class="col border-end border-top "> ${i}${j} </div>`)
                
                playerBoard.board[i][j]= 0;
            }
    }
}

populateEmptyShipBoard();
populateEmptyAttackBoard();
console.log(playerBoard)