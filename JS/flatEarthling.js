const earthlingImg = document.createElement("img");
earthlingImg.src = "/styles/resources/earthlingRightOK.png"
class flatEarthling{
    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = earthlingImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 50
    }
    draw(){
        this.ctx.drawImage(earthlingImg,this.x, this.y, this.width, this.height);
    }
};