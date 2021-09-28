const { Engine, Render, World, Bodies, Body, Events } = Matter;

// engine
const engine = Engine.create();

// size of the canvas and the nested player
const width = 500;
const height = 500;
const size = 50;
const w = 30;
const padding = 10;

// renderer
var render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: false,
    background: '#F2F2F2',
    width,
    height,
  },
});

// border around the canvas
const borderTop = Bodies.rectangle(width / 2, 0, width, size, {isStatic: true});
const borderRight = Bodies.rectangle(width, height / 2, size, height, {isStatic: true});
const borderBottom = Bodies.rectangle(width / 2, height, width, size, {isStatic: true});
const borderLeft = Bodies.rectangle(0, height / 2, size, height, {isStatic: true});
const goal = Bodies.rectangle(250,500, size, size, {isStatic: true, render: {fillStyle: '#D14747',},label: 'match'});
const player = Bodies.circle(width / 2, height / 2, size / 2, {label: 'match'});

// add the elements to the world
Matter.World.add(engine.world, [borderTop,borderRight,borderBottom,borderLeft,goal, player]);

// run the engine
Engine.run(engine);

// run the render
Render.run(render);


// following a collisionStart event, check if the collision occurs between the player and the goal post
function handleCollision(e) {
  e.pairs.forEach(pair => {
    const { label: labelA } = pair.bodyA;
    const { label: labelB } = pair.bodyB;
    if (labelA == labelB) {
        alert("You win succer");
    }
  });
}
Events.on(engine, 'collisionStart', handleCollision);