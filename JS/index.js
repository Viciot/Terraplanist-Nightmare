window.onload = ()=>{
    //cuando cargue la pagina 
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    //referenciamos el elemento html, le asignamos un contexto y lo asignamos a la constante ctx(contexto por convencion).

    let gameInterval= null;//

    let lunarBackgroundImg = new Image();
    lunarBackgroundImg.src = "/styles/resources/280531.jpg"

    const lunarBackground = {
        image: lunarBackgroundImg,
        x: 0,
        y: 0,
        height: canvas.height,
        width: canvas.width,
        draw: function(){
            // console.log("DRAWING BACKGROUND");
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    };

    let earthlingImg = new Image();
    earthlingImg.src = "/styles/resources/1000_F_245899118_jVKW1pcJTOWp8LraFPTwUaWFjdSkrX9Q.jpg";
    
    const earthling = {
        image : earthlingImg,
        x: canvas.width / 2 - 150,
        y: canvas.height / 2 - 100,
        height: 500,
        width: 300,
        draw: function(){
            // console.log("DRAWING EARTHLING!");
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }        
    }

    function startGame(){
        gameInterval = requestAnimationFrame(startGame);
        console.log = ("Game Started!!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lunarBackground.draw();
        earthling.draw();
    }
    
    window.addEventListener("keydown", moveEarthling);

    function moveEarthling(event){
        if (event.target.localName != 'input') {//this prevents for the default use of the up/down arrows to affect the use when in game.
            switch (event.keyCode) {
                
                case 38: //up
                    event.preventDefault();//this prevents the default arrow key behavior
                    if (earthling.y > 0) {
                        earthling.y -= 25;
                    } else {
                        earthling.y = 0; 
                    }
                    break
                case 40: //down
                    event.preventDefault();//this prevents the default arrow key behavior
                    if (earthling.y < canvas.height-earthling.height) {
                        earthling.y += 5;
                    } else {
                        earthling.y = canvas.height-earthling.height;
                    }
                    break
                case 39: //right
                    if (earthling.x < canvas.width - earthling.width) {
                        earthling.x += 20;
                    } else {
                        earthling.x = canvas.width - earthling.width;
                    }
                    break;
                case 37: //left
                    if (earthling.x > 0){
                        earthling.x -= 20;
                    } else {
                        earthling.x = 0;
                    }
                    break;
            }
        }
    }

startGame()
}

