// Author: Addison Farley
// Date: 10/10/2022
// Program: Seattle Skylines
// Description: Use the canvas feature of HTML to create a city skyline program

// constants
const WATER_HEIGHT = 400;
const GROUND_POSITION = 390;
const GROUND_HEIGHT = 25;
const BUILDING_WIDTH = 100;
const BUILDING_HEIGHT = 200;
const MIN_BUILDING_HEIGHT = 120;
const BORDER_BUFFER = 100;
const WINDOW_COUNT = 4;
const WINDOW_SIZE = 10;
const WINDOW_MIN_HEIGHT = 430;
const WINDOW_BUFFER = 12;
const TEXT_X_COORD = 750;
const TEXT_Y_COORD = 50;
const BUILDINGS = 15;

// creating the canvas constants
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

// creating random int function
function getRandomInt(min, max) {
    return Math.random() * (max - min + 1) + min;
}

// creating the background
function drawBackground()
{
    ctx.fillStyle = "rgb(51,153,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawWater()
{
    ctx.fillStyle = "rgb(0,21,102)";
    ctx.fillRect(0, WATER_HEIGHT, canvas.width, canvas.height);
}

function drawGround()
{
    ctx.fillStyle = "black";
    ctx.fillRect(0, GROUND_POSITION, canvas.width, GROUND_HEIGHT);
}

// add the city name
function addCityName()
{
    ctx.fillStyle = "white";
    ctx.font = '48px serif';
    ctx.fillText('Seattle', TEXT_X_COORD, TEXT_Y_COORD);
}

// buildings function
function drawBuilding()
{
    let x = getRandomInt(BORDER_BUFFER, canvas.width - BORDER_BUFFER - BUILDING_WIDTH);
    let y = GROUND_POSITION;
    let w = BUILDING_WIDTH;
    let h = getRandomInt(MIN_BUILDING_HEIGHT, BUILDING_HEIGHT);

    ctx.fillStyle = "black";
    ctx.fillRect((x),(y-h),w,h);

    drawWindows(x,y,h);
}

// windows function
function drawWindows(x,y,h)
{
    let newY = y + WINDOW_BUFFER;

    for(let i = 0; i < Math.floor(h / (WINDOW_SIZE+WINDOW_BUFFER)) - 1; i++)
    {
        console.log((h / (WINDOW_SIZE+WINDOW_BUFFER) - 1))
        let newX = x + WINDOW_BUFFER;

        for(let i = 0; i < WINDOW_COUNT; i++)
        {
            ctx.fillStyle = "white";
            ctx.fillRect(newX, newY - h, WINDOW_SIZE, WINDOW_SIZE); 
            newX += WINDOW_SIZE+WINDOW_BUFFER;  
        }
        newY += WINDOW_SIZE+WINDOW_BUFFER;
    }
}

// draw the skyline
function drawSkyline()
{
    for(let i = 0; i <= BUILDINGS; i++)
    {
        drawBuilding();   
    }
}

// draw the background
drawBackground();
drawWater();
drawGround();
addCityName();
drawSkyline();