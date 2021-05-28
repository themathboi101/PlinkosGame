class Particle{
     constructor(x,y){
         var options={
             isStatic:false,
             restitution:0.5,
         }
         this.r=10;
         this.body=Bodies.circle(x,y,this.r,options);
         this.color= color(random(0,255),random(0,255),random(0,255));

         World.add(world,this.body);

     }
     display(){
         var pos=this.body.position
         var angle = this.body.angle

         push();
         translate(pos.x,pos.y);
         rotate(angle);
         fill(this.color);
         ellipse(pos.x,pos.y,this.r,this.r);
         pop();
     }
}