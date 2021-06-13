const earthlingImg = document.createElement("img");
earthlingImg.src = "/styles/resources/1000_F_245899118_jVKW1pcJTOWp8LraFPTwUaWFjdSkrX9Q.jpg"
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