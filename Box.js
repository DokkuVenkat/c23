class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1.0
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle
        //captures the new settings 
        push()
        //remaps the position on the screen,hence put 0 and 0 with rect
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        //gets back to the old settings
        //use push and pop so that changes do not apply to the entire game
        pop()
    }
}