class umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
    this.r=r
    this.body = Bodies.circle(x,y,this.r,options)
    
    this.image = loadImage("images/Walking Frame/walking_1.png")
    World.add ( world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);

        pop();
        
    }
}