const terrGlobeImg = document.createElement("img");
terrGlobeImg.src = "/styles/resources/terrestrialGlobe.png"

class TerrGlobe{
    constructor(canvasContext){
        (this.ctx = this.canvasContext),
        (this.image = terrGlobeImg)
        (this.x = 0),
        (this.y = 0),
        (this.width = 200),
        (this.height = 200);
    }
    draw(){
        this.ctx.drawImage(terrGlobeImg, this.x, this.y, this.width, this.height);
    }
}

const bookOneImg = document.createElement("img");
bookOneImg.src = "/styles/resources/oldBook1.png"
class BookOne{
    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = bookOneImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 50
    }
    draw(){
        this.ctx.drawImage(bookOneImg,this.x, this.y, this.width, this.height);
    }
};

const bookTwoImg = document.createElement("img");
bookTwoImg.src = "/styles/resources/oldBook2.png"
class BookTwo{
    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = bookTwoImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 50
    }
    draw(){
        this.ctx.drawImage(bookTwoImg,this.x, this.y, this.width, this.height);
    }
};

const bookThreeImg = document.createElement("img");
bookThreeImg.src = "/styles/resources/oldBook3.png"
class BookThree{
    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = bookThreeImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 50
    }
    draw(){
        this.ctx.drawImage(bookThreeImg,this.x, this.y, this.width, this.height);
    }
};

const pithaRightImg = document.createElement("img");
pithaRightImg.src = "/styles/resources/pithagoras OK.png"

class Pitha{
    constructor(canvasContext){
        (this.ctx = this.canvasContext),
        (this.image = pithaRightImg)
        (this.x = 0),
        (this.y = 0),
        (this.width = 200),
        (this.height = 200);
    }
    draw(){
        this.ctx.drawImage(pithaRightImg, this.x, this.y, this.width, this.height);
    }
}

const pithaLeftImg = document.createElement("img");
pithaLeftImg.src = "/styles/resources/pithagoras OK2.png.png"

class Pitha{
    constructor(canvasContext){
        (this.ctx = this.canvasContext),
        (this.image = pithaLeftImg)
        (this.x = 0),
        (this.y = 0),
        (this.width = 200),
        (this.height = 200);
    }
    draw(){
        this.ctx.drawImage(pithaLeftImg, this.x, this.y, this.width, this.height);
    }
}