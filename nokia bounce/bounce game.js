//module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Events = Matter.Events;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
              background: '#7fb3d5',
              wireframes: false
            }
});
var abc = 150;
var def = 600;
var topwall = Bodies.rectangle(10,10,10000,30, {isStatic: true});
var circle = Bodies.circle(abc,def,25, {label: 'match'});
var ground = Bodies.rectangle(10,610,10000,50, {isStatic: true});
var leftwall = Bodies.rectangle(10,10,10,5000, {isStatic: true});
var brick1 = Bodies.rectangle(200,525,100,50, {isStatic: true});
var brick2 = Bodies.rectangle(320,525,100,50, {isStatic: true, label:'mint'});
var brick3 = Bodies.rectangle(380,405,100,50, {isStatic: true});
var brick4 = Bodies.rectangle(500,350,100,50, {isStatic: true});
var brick5 = Bodies.rectangle(625,245,100,50, {isStatic: true});
var brick6 = Bodies.rectangle(900,200,100,50, {isStatic: true , label: 'match'});
var brick7 = Bodies.rectangle(200,300,100,50, {isStatic:true,label:'mint'});
var game = Bodies.rectangle(0,0,100000,1000000, {isStatic:true});
var blocker = Bodies.rectangle(900,310,100,0.01,{isStatic: true});             
var coin1 = Bodies.circle(400,300,10,{label: 'coin1', isStatic: true, isSensor:true, inertia: -100});
var coin2 = Bodies.circle(130,500,10,{label: 'coin2', isStatic: true, isSensor:true});
var coin3 = Bodies.circle(600,100,10,{label: 'coin3', isStatic: true, isSensor:true });

//document.write(coinscore);
console.log(circle);

//adding colours
circle.render.fillStyle = "purple";
ground.render.fillStyle = "black";
topwall.render.fillStyle= "black";
leftwall.render.fillStyle= "black";
brick1.render.fillStyle="red";
brick2.render.fillStyle="pink";
brick3.render.fillStyle="red";
brick4.render.fillStyle="red";
brick5.render.fillStyle="red";
brick6.render.fillStyle="#00ff77";
brick7.render.fillStyle="pink";
coin1.render.fillStyle="#ffbc03";
coin2.render.fillStyle="#ffbc03";
coin3.render.fillStyle="#ffbc03";

var coinscore = 0;

//ADDING EVENTS
         document.addEventListener("keypress",test);
function test(e)
        {
         
            console.log(e);
            if(e.key == "w")
            {
                 Body.applyForce( circle, {x: circle.position.x, y: circle.position.y}, {x: 0, y: -0.035});

            }
            if(e.key == "a"){
               Body.setPosition(circle,{x:abc,y:circle.position.y});

                Body.setPosition( ground,{x: ground.position.x+4, y:ground.position.y});
     Body.setPosition( topwall,{x: topwall.position.x+4, y:topwall.position.y});      
             Body.setPosition( leftwall,{x: leftwall.position.x+4, y:leftwall.position.y});   
                            Body.setPosition( brick1,{x: brick1.position.x+4, y:brick1.position.y});   
                                           Body.setPosition( brick2,{x: brick2.position.x+4, y:brick2.position.y});  
                                           Body.setPosition( brick3,{x: brick3.position.x+4, y:brick3.position.y}); 
                                           Body.setPosition( brick4,{x: brick4.position.x+4, y:brick4.position.y}); 
                                           Body.setPosition( brick5,{x: brick5.position.x+4, y:brick5.position.y}); 
                                           Body.setPosition( brick6,{x: brick6.position.x+4, y:brick6.position.y}); 
                                                          Body.setPosition( brick7,{x: brick7.position.x+4, y:brick7.position.y});
                                                          Body.setPosition( game,{x: game.position.x+4, y:game.position.y});
                                                              Body.setPosition( coin1,{x:coin1.position.x+4, y:coin1.position.y});
                                                         Body.setPosition( coin2,{x:coin2.position.x+4, y:coin2.position.y});
                                                            Body.setPosition( coin3,{x:coin3.position.x+4, y:coin3.position.y});

            }
            if(e.key == "s"){
                Body.applyForce( circle, {x: circle.position.x, y: circle.position.y}, {x: 0, y: 0.035});

            }
           if(e.key == "d"){
Body.setPosition( ground,{x: ground.position.x-4, y:ground.position.y});
     Body.setPosition( topwall,{x: topwall.position.x-4, y:topwall.position.y});      
             Body.setPosition( leftwall,{x: leftwall.position.x-4, y:leftwall.position.y});   
                            Body.setPosition( brick1,{x: brick1.position.x-4, y:brick1.position.y});   
                                           Body.setPosition( brick2,{x: brick2.position.x-4, y:brick2.position.y});  
                                           Body.setPosition( brick3,{x: brick3.position.x-4, y:brick3.position.y}); 
                                           Body.setPosition( brick4,{x: brick4.position.x-4, y:brick4.position.y}); 
                                           Body.setPosition( brick5,{x: brick5.position.x-4, y:brick5.position.y}); 
                                           Body.setPosition( brick6,{x: brick6.position.x-4, y:brick6.position.y}); 
                                                          Body.setPosition( brick7,{x: brick7.position.x-4, y:brick7.position.y});
                                                          Body.setPosition( game,{x: game.position.x-4, y:game.position.y});
                                                              Body.setPosition( coin1,{x:coin1.position.x-4, y:coin1.position.y});
                                                         Body.setPosition( coin2,{x:coin2.position.x-4, y:coin2.position.y});
                                                            Body.setPosition( coin3,{x:coin3.position.x-4, y:coin3.position.y});
               Body.setPosition(circle,{x:abc,y:circle.position.y});








           }

           }
            
            
            
World.add(engine.world,[ground,circle,topwall,leftwall,brick1,brick2,brick3,brick4,brick5,brick6,brick7,coin1,coin2, coin3,blocker]);

//run the engine
Engine.run(engine);

//run the renderer
Render.run(render);

// console the render
console.log(render.options);

function handleCollision(e) {
  e.pairs.forEach(pair => {
    const { label: labelA } = pair.bodyA;
    const { label: labelB } = pair.bodyB;
    if (labelA == 'match' && labelB == 'mint') {
        alert("You lose");
        location.reload();
    }
      if (labelA == 'match' && labelB == 'match' && coinscore == 3) {
        alert("You win");
          location.reload();
    }
      
      if(labelA =='match' && labelB == 'coin1'){
Matter.Composite.remove(engine.world,coin1);
          coinscore++;
          alert(coinscore + 'coins');
      }
      
      if (labelA == 'match' && labelB == 'match' && coinscore < 3){
          alert('collect more coins');
      }
      
      if(labelA =='match' && labelB == 'coin2'){
Matter.Composite.remove(engine.world,coin2);
           coinscore++;
          alert(coinscore + 'coins');
      }
      
      if(labelA =='match' && labelB == 'coin3'){
Matter.Composite.remove(engine.world,coin3);
           coinscore++;
          alert(coinscore);
      }
      
  });
}
                Events.on(engine, 'collisionStart', handleCollision);
