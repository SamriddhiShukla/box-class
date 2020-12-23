class Ground {
    constructor(){
 var options ={
    isStatic : true 
 }
this.body=Bodies.rectangle(200,380,400,20,options);
World.add(world,this.body);
}
display(){
rectMode(CENTER);
rect(200,380,400,20);

}
}
