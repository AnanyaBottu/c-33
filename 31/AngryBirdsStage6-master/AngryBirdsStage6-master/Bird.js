class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.sam=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
if(this.body.position.x>200&&this.body.velocity.x>15){

    var sun = [this.body.position.x,this.body.position.y ];
   this.sam.push(sun);
  }
   //console.log(this.sam);
   
   
   
   for(var i=0;i<=this.sam.length-1;i++){
     image(this.image1,this.sam[i][0],this.sam[i][1]);
   }
   
   
   
   
   
    super.display();





  }










}



