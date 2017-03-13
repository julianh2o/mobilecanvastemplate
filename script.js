$(document).ready(function() {
    main();
});

function main() {
    console.log("hello world");

    var canvas = document.getElementById('main');
    var ctx = canvas.getContext('2d');

    var i = 0;
    setInterval(function() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        i++;
        ctx.strokeStyle = 'red';
        ctx.strokeRect(10, 10+i, 50, 50);
    },50);;
}
