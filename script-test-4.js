let canvas = document.getElementById("myCanvas");

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render() {
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }
}

let circle1 = new Circle(10, 10, 100, '#000000');
circle1.render();