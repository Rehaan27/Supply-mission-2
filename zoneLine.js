class ZoneLine{
constructor(x,y,width,height){

this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
this.width = width;
this.height = height;

World.add(world, this.body);

}

display(){

    Engine.update(engine);

    var pos = this.body.position;
    rectMode(CENTER);
    fill(255,0,0);
    rect(pos.x, pos.y, this.width, this.height);
}

};