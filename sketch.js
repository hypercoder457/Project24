const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, stone;


function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600, height, 1200, 20);
    hammer = new Hammer(10, 100);
    stone = new Stone(550, 550, 50, 50);
    rubber = new Rubber(530, 550, 30);
    iron = new Iron(570, 550, 50, 50);
}

function draw() {
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
}