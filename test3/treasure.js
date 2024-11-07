// 模拟宝藏地图 API
class TreasureMap {
  static async getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  static async decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中...");
      }, 1500);
    });
  }

  static async searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          reject("糟糕!遇到了神庙守卫!");
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static async openTreasureBox() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("恭喜!你找到了传说中的宝藏!");
      }, 1000);
    });
  }
}

// 初始化游戏
let libraryImage = document.getElementById('library');
let clueButton = document.getElementById('clueButton');
let message = document.getElementById('message');

libraryImage.addEventListener('click', async () => {
  try {
    const clue = await TreasureMap.getInitialClue();
    message.textContent = clue;
  } catch (error) {
    console.error("任务失败:", error);
  }
});

clueButton.addEventListener('click', async () => {
  if (message.textContent === "在古老的图书馆里找到了第一个线索...") {
    try {
      const location = await TreasureMap.decodeAncientScript(message.textContent);
      message.textContent = location;
      if (location === "解码成功!宝藏在一座古老的神庙中...") {
        const templeImage = document.createElement('img');
        templeImage.src = "temple.jpg";
        templeImage.style.width = "400px";
        templeImage.style.height = "400px";
        //设置图片居中显示
        templeImage.style.left = "10%";
        templeImage.style.top = "10%";
        document.getElementById('canvas').appendChild(templeImage);
      }
    } catch (error) {
      message.textContent = error;
    }
  } else {
    message.textContent = "没有线索解码";
  }
});

document.addEventListener('click', async (event) => {
  if (event.target.tagName === 'IMG' && event.target.src.includes('library.jpg')) {
    event.target.style.pointerEvents = 'none';
  }
  if (event.target.tagName === 'IMG' && event.target.src.includes('temple.jpg')) {
    message.textContent = "探索中...";
    try {
      const result = await TreasureMap.searchTemple();
      if (result === "找到了一个神秘的箱子...") {
        const boxImage = document.createElement('img');
        boxImage.src = "box.jpg";
        boxImage.style.width = "200px";
        boxImage.style.height = 'auto';
        boxImage.style.textAlign = 'center';
        document.getElementById('canvas').appendChild(boxImage);
        event.target.style.opacity = 0.5;
        message.textContent = result;
      } else {
        const guardImage = document.createElement('img');
        guardImage.src = "guard.jpg";
        guardImage.style.width = "100px";
        guardImage.style.height = 'auto';
        guardImage.style.position = 'absolute';
        document.getElementById('canvas').appendChild(guardImage);
        event.target.style.opacity = 0.5;
        message.textContent = "遇到守卫寻宝失败";
      }
    } catch (error) {
      message.textContent = error;
    }
  } else if (event.target.tagName === 'IMG' && event.target.src.includes('box.jpg')) {
    try {
      const treasure = await TreasureMap.openTreasureBox();
      const treasureImage = document.createElement('img');
      treasureImage.src = "treasure.jpg";
      treasureImage.style.width = "200px";
      treasureImage.style.height = 'auto';
      canvas.style.textAlign = 'center';
      document.getElementById('canvas').appendChild(treasureImage);
      event.target.style.display = 'none';
      message.textContent = treasure;
    } catch (error) {
      message.textContent = error;
    }
  }
});