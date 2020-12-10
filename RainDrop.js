class RainDrops{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.velocityY  = random(2,5);
        this.color=color("blue")
        World.add(world, this.body);
        this.fiction=0.4;
    }
     fall(speed){
        this.y +=speed;
    }
  
    display(){
        
        push();
        colorMode(HSB);
        noStroke();
        //translate(pos.x,pos.y);
       
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }