class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
       // this.image = loadImage("heart.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //imageMode(CENTER);
        rect(0,0,this.width, this.height);
      // image(this.image,0,0,150,100);
        pop();
      }
}
