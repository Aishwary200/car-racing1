class Form {
  constructor() {
    this.input=createInput("name");
    this.button=createButton("play");
    this.greeting=createElement("h2");
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-20,0);
    
    // var input = createInput("Name");
    // var button = createButton('Play');
    
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name=this.input.value()
      playerCount+=1
      player.index=playerCount
      player.update()
      player.updateCount(playerCount)
      this.greeting.html("Hello "+player.name)
      this.greeting.position(displayWidth/2-70,displayHeight/4)
      
      // var name = input.value();
      
      // playerCount+=1;
      // player.update(name)
      // player.updateCount(playerCount);
      // var greeting = createElement('h3');
      // greeting.html("Hello " + name )
      // greeting.position(130, 160)
    });

  }
 hide(){
   this.greeting.hide()
   this.button.hide()
   this.input.hide()
 }
}
