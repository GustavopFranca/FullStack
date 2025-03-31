let canvas = document.getElementById('canvas');
let ctx = canvas.getContex('2d')

// retangulos

ctx.beginPaath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokerect(0,0,70,70);
ctx.closePath();