/* 定义控制小球的常量 */
const BALLS_COUNT = 30;
const BALL_SIZE_MIN = 10;
const BALL_SIZE_MAX = 20;
const BALL_SPEED_MIN = 1;
const BALL_SPEED_MAX = 7;

class Shape{
    constructor(x, y, velX, velY, exists){
        this.x = x;
        this.y = y;
        this.velX = velX; /* 小球在x轴上的移动速度 */
        this.velY = velY;
        this.exists = exists; /* 用来判断小球是否还存在 */
    }
}

class Ball extends Shape{
    constructor(x, y, velX, velY, color, size, exists){
        super(x, y, velX, velY, exists);
        this.color = color;
        this.size = size;
    }

    draw(){
        ctx.beginPath(); /* 开始绘制一条路径 */
        ctx.fillStyle = this.color; /* 设置填充颜色为对象的color属性 */
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); /* 绘制一个圆，参数依次为：圆心的x坐标、圆心的y坐标、半径、结束角度为2π */
        ctx.fill(); /* 填充颜色 */
    }

    update(){
        if((this.x + this.size) >= canvas.width || (this.x - this.size) <= 0){
            this.velX = -(this.velX);
        } /* 判断小球左右边缘是否碰到画布的左右边界，如果碰到则改变小球在x轴上的移动方向 */

        if((this.y + this.size) >= canvas.height || (this.y - this.size) <= 0){
            this.velY = -(this.velY);
        } /* 判断小球上下边缘是否碰到画布的上下边界，如果碰到则改变小球在y轴上的移动方向 */

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect(){
        for(let j = 0; j < balls.length; j++){
            if(this != balls[j]){
                /* 计算小球之间的x轴与y轴上的距离 */
                const dx = this.x - balls[j].x; 
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                /* 判断小球之间的距离是否小于两小球的半径之和，如果小于则说明小球之间发生了碰撞 */
                if(distance < this.size + balls[j].size){
                    balls[j].color = this.color = randomColor(); /* 改变发生碰撞的小球的颜色 */
                }
            }
        }
    }
}

class EvilCircle extends Shape{
    constructor(x, y, exists){
        super(x, y, exists);
        this.color = "white";
        this.size = 10;
        this.velX = BALL_SPEED_MAX;
        this.velY = BALL_SPEED_MAX;
        this.setControls();
    }

    draw(){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
    }

    checkBounds(){
        /* 判断小球是否碰到画布的边界，如果碰到则改变小球在x轴或y轴上的移动方向 */
        if((this.x + this.size) >= width){
            this.x -= this.size;
        }
        if(this.x - this.size <= 0){
            this.x += this.size;
        }
        if((this.y + this.size) >= height){
            this.y -= this.size;
        }
        if(this.y - this.size <= 0){
            this.y += this.size;
        }
    }

    setControls(){
        /* 设置一个事件监听器，当用户按下键盘上的任意键时，都会触发这个事件监听器 */
        window.onkeydown = e => {
            switch(e.key){
                case "a":
                case "A":
                case "ArrowLeft":
                    this.x -= this.velX;
                    break;
                case "d":
                case "D":
                case "ArrowRight":
                    this.x += this.velX;
                    break;
                case "w":
                case "W":
                case "ArrowUp":
                    this.y -= this.velY;
                    break;
                case "s":
                case "S":
                case "ArrowDown":
                    this.y += this.velY;
                    break;
            }
        };
    }

    collisionDetect(){
        /* 遍历数组中的每一个球 */
        for(let j = 0; j < balls.length; j++){
            /* 只检查存在的球 */
            if(balls[j].exists){
                /* 计算恶魔圈与小球之间的距离 */
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                /* 如果距离小于半径之和，表示发生了碰撞，标记小球为不存在，减少剩余球的数量 */
                if(distance < this.size + balls[j].size){
                    balls[j].exists = false;
                    count--;
                    para.textContent = "还剩" + count + "个球";
                }
            }
        }
    }
}

const para = document.querySelector("p"); /* 获取页面中的p元素 */
const canvas = document.querySelector("canvas"); /* 获取页面中的canvas画布元素 */
const ctx = canvas.getContext("2d"); /* 获取canvas元素的绘图上下文 */

const width = (canvas.width = window.innerWidth);   /* 设置画布的宽度为浏览器窗口的宽度 */
const height = (canvas.height = window.innerHeight); /* 设置高度 */

const balls = []; /* 初始化一个空数组存储小球 */
let count = 0; /* 初始化一个变量用于记录剩余球的数量 */

/* 调用EvilCircle随机生成小球 */
const evilBall = new EvilCircle(
    random(0, width),
    random(0, height),
    true,
    );

loop(); /* 调用循环函数 开始动画循环*/

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(){
    return "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
}

function loop(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; /* 设置填充颜色为半透明的黑色 */
    ctx.fillRect(0, 0, width, height); /* 使用填充颜色填充整个画布 */

    /* 当数组中的球的数量小于25时，生成新的球 */
    while(balls.length < 25){ 
        const size = random(BALL_SIZE_MIN, BALL_SIZE_MAX);
        /* 调用Ball构造函数生成小球 */
        const ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
            randomColor(),
            size,
            true, /* exists 属性被设置为 true，表示这个对象是存在的 */
        );
        balls.push(ball); /* 将生成的小球添加到数组中 */
        count++; /* 增加剩余球的数量 */
        para.textContent = "还剩" + count + "个球"; /* 更新页面中的p元素显示剩余球的数量 */
    }
    /* 遍历数组中的每一个球 */
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exists) { /* 只处理存在的小球 */
        balls[i].draw(); /* 绘制小球 */
        balls[i].update(); /* 更新小球的位置 */
        balls[i].collisionDetect(); /* 检测小球与其他小球的碰撞 */
        }
    }
        
        evilBall.draw(); /* 绘制恶魔圈 */
        evilBall.checkBounds(); /* 检测恶魔圈是否越界 */
        evilBall.collisionDetect(); /* 检测恶魔圈与小球之间的碰撞 */
        
        requestAnimationFrame(loop); /* 请求下一帧动画 */
}


