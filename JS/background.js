const lunarBackgroundImg = document.createElement('img');
lunarBackgroundImg.src = '/styles/resources/280531.jpg';

class LunarBackground{
    constructor(canvasContext){
        (this.ctx = canvasContext),
            (this.x = 0),
            (this.y = 0),
            (this.width = 1358),
            (this.height = 1358);
    }
    draw(){
        this.ctx.drawImage(lunarBackgroundImg, this.x, this.y, this.width, this.height);
    }
}