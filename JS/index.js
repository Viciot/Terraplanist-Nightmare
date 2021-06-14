window.onload = ()=>{//cuando cargue la pagina ...
    
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
    earthlingImg.src = "/styles/resources/earthlingrighttrim.png";
    
    const earthling = {
        image : earthlingImg,
        x: canvas.width / 2 - 150,
        y: canvas.height / 2 - 100,
        height: 350,
        width: 90,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }        
    }

    let terrGlobeImg = new Image();
    terrGlobeImg.src = "/styles/resources/terrestrialGlobe.png"

    const terrGlobe = {
        image : terrGlobeImg,
        x: canvas.width / 5 - 160,
        y: canvas.height / 2 - 780,
        height: 200,
        width: 200,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move: function() {
            if (this.y > canvas.height) {
                objects.splice(this, 1);
                this.y = canvas.height / 2 - 780
                this.x = Math.floor(Math.random()*canvas.width) 
            } else {
                this.y += 2;
            }
        }
    }

    let bookOneImg = new Image();
    bookOneImg.src = "/styles/resources/oldBook1.png"

    const bookOne = {
        image : bookOneImg,
        x: canvas.width / 4 - 180,
        y: canvas.height / 2 - 780,
        height: 200,
        width: 200,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move: function() {
            if (this.y > canvas.height) {
                objects.splice(this, 1);
                this.y = canvas.height / 2 - 780
                this.x = Math.floor(Math.random()*canvas.width) 
            } else {
                this.y += 2;
            }
        }
    }

    let bookTwoImg = new Image();
    bookTwoImg.src = "/styles/resources/oldBook2.png"

    const bookTwo = {
        image : bookTwoImg,
        x: canvas.width / 2 - 160,
        y: canvas.height ,
        height: 300,
        width: 300,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move: function() {
            if (this.y > canvas.height) {
                objects.splice(this, 1);
                this.y = canvas.height / 2 - 780
                this.x = Math.floor(Math.random()*canvas.width) 
            } else {
                this.y += 2;
            }
        }
    }

    let bookThreeImg = new Image();
    bookThreeImg.src = "/styles/resources/oldBook3.png"

    const bookThree = {
        image : bookThreeImg,
        x: canvas.width / 1 - 600,
        y: canvas.height / 2 - 830,
        height: 400,
        width: 300,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move: function() {
            if (this.y > canvas.height) {
                objects.splice(this, 1);
                this.y = canvas.height/2 - 830
                this.x = Math.floor(Math.random()*canvas.width) 
            } else {
                this.y += 2;
            }
        }
    }

    let pithaRightImg = new Image();
    pithaRightImg.src = "/styles/resources/pithagoras OK.png"

    const pithaRight = {
        image : pithaRightImg,
        x: canvas.width / 1- 400,
        y: canvas.height / 2 - 800,
        height: 300,
        width: 300,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move: function() {
            if (this.y > canvas.height) {
                objects.splice(this, 1);
                this.y = canvas.height / 2 - 800
                this.x = Math.floor(Math.random()*canvas.width) 
            } else {
                this.y += 2;
            }
        }
    }

    let pithaLeftImg = new Image();
    pithaLeftImg.src = "/styles/resources/pithagoras OK2.png"

    const pithaLeft = {
        image : pithaLeftImg,
        x: canvas.width / 1 - 500, //  2100/1-500
        y: canvas.height / 2 - 800,
        height: 300,
        width: 300,
        draw: function(){
            
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        move: function() {
            if (this.y > canvas.height) {
                objects.splice(this, 1);
                this.y = canvas.height / 2 - 800//resetear posicion vertical
                this.x = Math.floor(Math.random()*canvas.width)  //randomizar horizontal
            } else {
                this.y += 5;
            }
            
            
        }
    }

    //function drawFallingObjects() {
    //    gameInterval = requestAnimationFrame(drawFallingObjects);
    //    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //    randomObject.draw();
    //}
    

    let randomObject
    let objectArr = [];
    let objects =[]

    setInterval(function() {   //cada intervalo dado se ejecuta lo que este dentro de este bloque.
    
        objectArr = [terrGlobe, bookOne, bookTwo, bookThree, pithaLeft, pithaRight]//array donde tenemos los objetos.
        
        randomObject = objectArr[Math.floor(Math.random() * objectArr.length)]//asignamos los objetos de manera aleatoria a un array vacio, randomObject.
        objects.push(randomObject);//vamos metiendo objetos en el array objects.
        
    }, 500);
    
    
    function startGame(){
        gameInterval = requestAnimationFrame(startGame);
        console.log = ("Game Started!!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lunarBackground.draw();
        earthling.draw();
        objects.forEach(object=>{//loopeamos el array donde se van metiendo los objetos y los dibujamosy movemos.
            object.draw()
            object.move() 
        })
        //console.log(objects);
        //terrGlobe.draw();
        //bookOne.draw();
        //bookTwo.draw();
        //bookThree.draw();
        //pithaRight.draw();
        //pithaLeft.draw();
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
                        earthling.y += 25;
                    } else {
                        earthling.y = canvas.height-earthling.height;
                    }

                    
                    break
                case 39: //right
                    if (earthling.x < canvas.width - earthling.width) {
                        earthling.x += 35;
                    } else {
                        earthling.x = canvas.width - earthling.width;
                    }
                    break;
                case 37: //left
                    if (earthling.x > 0){
                        earthling.x -= 35;
                    } else {
                        earthling.x = 0;
                    }
                    break;
            }
        }
    }

    startGame()
}

