const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg'];


/* Declaring the alternative text for each image file */
const imageAlt = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img'); // 创建一个新的 img 元素
    newImage.setAttribute('src', 'images/'+imageFilenames[i]); // 设置 img 元素的 src 属性
    newImage.setAttribute('alt', 'cat'+(i+1)); // 设置 img 元素的 alt 属性
    thumbBar.appendChild(newImage); // 添加缩略图到缩略图栏

    /* 为每一个缩略图添加 click 事件监听器 */
    newImage.addEventListener('click', function () {
        displayedImage.src = this.src;
    }); // 当点击缩略图时，将显示的图片更改为相应的图片
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
    let currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});