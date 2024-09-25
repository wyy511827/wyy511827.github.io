const canvas = document.querySelector("canvas"); //获取canvas元素
const ctx = canvas.getContext("2d");  //获取canvas的2D绘图上下文

// 设置画布的宽高为浏览器窗口的宽高
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// 随机生成函数
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
    }

// 随机颜色函数
function randomColor() {
    const color =
      "rgb(" +
      random(0, 255) +
      "," +
      random(0, 255) +
      "," +
      random(0, 255) +
      ")";
    return color;
}

// 定义小球类，包含属性小球的位置、速度、颜色、大小
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX; // 小球在x轴上的速度
    this.velY = velY;  // 小球在y轴上的速度
    this.color = color; // 小球的填充颜色
    this.size = size;  // 小球的大小
}

// 定义小球的方法，包括绘制小球、更新小球位置、检测小球碰撞
Ball.prototype.draw = function () {
    ctx.beginPath(); // 开始绘制路径
    ctx.fillStyle = this.color;  // 设置填充颜色
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);  // 绘制圆形
    ctx.fill();  // 填充圆形
};

// 更新小球位置，并处理小球碰到边界时的碰撞
Ball.prototype.update = function () {
    if (this.x + this.size >= width) {
        this.velX = -this.velX;
    }
    if (this.x - this.size <= 0) {
          this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
        this.velY = -this.velY;
    }

        this.x += this.velX;
        this.y += this.velY;
    };

// 检测小球碰撞，如果小球之间距离小于小球半径之和，则改变它们的颜色
Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (this !== balls[j]) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
            }
        }
    }
};

let balls = [];

while (balls.length < 25) {
    const size = random(10, 20);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomColor(),
        size,
    );
    balls.push(ball);
}

// 循环调用绘制、更新、碰撞检测函数
function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();