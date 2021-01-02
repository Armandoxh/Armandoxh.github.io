const gameRatioX = 5; 
const gameRatioY = 5;
const $fleetlocation = $('#fleetLocation');


const ships = {
    Cruiser: {
        length : 5 
    },
    aircraftCarrier : {
        length : 2
    }
}
const cell = `<div class="col border"> X </div>`


for (let i = 0; i < gameRatioX; i++) {  
    
    $fleetlocation.append(`<div id = "row${i}" class="row row-cols-5" style="height: 100px; 
    background-color: rgba(20, 9, 9, 0.1);">
    `)

    $currentRow = $fleetlocation.find('#row'+ i)

    console.log($currentRow)

        for (let j = 0; j < gameRatioY; j++) {

            $currentRow.append(cell)
}
    
}



console.log($fleetlocation)