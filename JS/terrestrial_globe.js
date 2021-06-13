const terrGlobeImg = document.createElement("img");
terrGlobeImg.src = "/styles/resources/pngwing.com.png"

class TerrGlobe{
    constructor(canvasContext){
        (this.ctx = this.canvasContext),
        (this.x = 0),
        (this.y = 0),
        (this.width = 200),
        (this.height = 200);
    }
    draw(){
        this.ctx.drawImage(terrGlobeImg, this.x, this.y, this.width, this.height);
    }
}