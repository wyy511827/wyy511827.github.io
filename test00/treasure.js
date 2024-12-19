// 保存玩家信息按钮点击事件处理
const savePlayerInfoButton = document.getElementById('savePlayerInfoButton');
const startGameButton = document.getElementById('startGameButton');
const saveStatus = document.getElementById('saveStatus');
const gameCanvas = document.getElementById('game-canvas');

savePlayerInfoButton.addEventListener('click', () => {
    const playerId = document.getElementById('playerId').value;
    const playerNickname = document.getElementById('playerNickname').value;
    if (playerId && playerNickname) {
        // 创建玩家信息对象
        const playerInfo = {
            id: playerId,
            nickname: playerNickname,
            gameHistory: []
        };
        // 将玩家信息存储到localStorage中
        localStorage.setItem('playerInfo', JSON.stringify(playerInfo));
        // 显示保存完成信息并启用开始游戏按钮
        saveStatus.textContent = "保存玩家信息完成，可以开始游戏";
        startGameButton.disabled = false;
    } else {
        alert("输入玩家ID和昵称");
    }
});


// 封装加载数据的函数（使用fetch API）
async function loadData(fileName) {
  try {
      const response = await fetch(fileName);
      return await response.text();
  } catch (error) {
      console.error(`加载 ${fileName} 信息失败:`, error);
      return "";
  }
}





// 开始游戏按钮点击事件处理
startGameButton.addEventListener('click', async () => {
    const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
    if (storedPlayerInfo) {
        // 清空画布现有内容（这里简单地移除内部元素来模拟刷新画布）
        while (gameCanvas.firstChild) {
            gameCanvas.removeChild(gameCanvas.firstChild);
        }

        // 重新添加游戏元素到画布（示例中仅添加图书馆图片和线索按钮等基础元素，可根据实际游戏流程完善）
        const libraryImage = document.createElement('img');
        libraryImage.id = 'library';
        libraryImage.src = "library.jpg";
        libraryImage.style.width = "80%";
        libraryImage.style.height = "auto";
        libraryImage.style.opacity = 0.5;
        libraryImage.style.border = "2px solid #ccc";
        libraryImage.style.borderRadius = "10px";
        libraryImage.style.marginBottom = "20px";
        gameCanvas.appendChild(libraryImage);

        // 在这里添加对libraryImage的事件监听，确保元素已经存在于DOM中了
        libraryImage.addEventListener('click', async () => {
            try {
                const clue = await TreasureMap.getInitialClue();
                message.textContent = clue;
                // 获取存储的玩家信息
                const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
                if (storedPlayerInfo) {
                    storedPlayerInfo.gameHistory.push("获取到第一个线索");
                    localStorage.setItem('playerInfo', JSON.stringify(storedPlayerInfo));
                }
            } catch (error) {
                console.error("任务失败:", error);
            }
        });

        const clueButton = document.createElement('button');
        clueButton.id = 'clueButton';
        clueButton.textContent = "线索";
        gameCanvas.appendChild(clueButton);

        const message = document.createElement('p');
        message.id = 'message';
        gameCanvas.appendChild(message);

        // 使用fetch API异步加载图书馆信息并添加到页面
        const libraryInfo = await loadData("library_info.txt");
        const libraryInfoParagraph = document.createElement('p');
        libraryInfoParagraph.textContent = libraryInfo;
        gameCanvas.appendChild(libraryInfoParagraph);

        // 使用fetch API异步加载神庙信息并添加到页面
        const templeInfo = await loadData("temple_info.txt");
        const templeInfoParagraph = document.createElement('p');
        templeInfoParagraph.textContent = templeInfo;
        gameCanvas.appendChild(templeInfoParagraph);

        // 使用fetch API异步加载守卫信息并添加到页面
        const guardInfo = await loadData("guard_info.txt");
        const guardInfoParagraph = document.createElement('p');
        guardInfoParagraph.textContent = guardInfo;
        gameCanvas.appendChild(guardInfoParagraph);

        

        // 根据已有的游戏历史继续游戏（例如，如果有历史记录，可在这里根据记录状态来设置游戏内的相应元素、变量等，此处仅示意恢复线索信息展示，需完善）
        if (storedPlayerInfo.gameHistory.length > 0) {
            const lastHistory = storedPlayerInfo.gameHistory[storedPlayerInfo.gameHistory.length - 1];
            if (lastHistory === "获取到第一个线索") {
                message.textContent = "在古老的图书馆里找到了第一个线索...";
            }
        }
    }
});



// 封装显示游戏历史记录的函数（修改为只有在页面加载且有历史记录时调用才显示游戏历史记录）
function displayGameHistory() {
    const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
    if (storedPlayerInfo && storedPlayerInfo.gameHistory.length > 0 && window.location.pathname === '/') { // 仅在页面初始加载（路径为根路径时）且有历史记录才显示历史记录
        const historyParagraph = document.createElement('p');
        historyParagraph.textContent = "游戏历史记录: " + storedPlayerInfo.gameHistory.join(', ');
        document.body.appendChild(historyParagraph);

        // 设置定时器，10秒后移除显示游戏历史记录的元素
        setTimeout(() => {
            historyParagraph.remove();
        }, 100);
    }
}

// 恢复游戏历史记录（在页面加载时调用一次）
window.onload = function () {
    displayGameHistory();
};

// 控制音乐


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
        // 获取存储的玩家信息
        const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
        if (storedPlayerInfo) {
            storedPlayerInfo.gameHistory.push("获取到第一个线索");
            localStorage.setItem('playerInfo', JSON.stringify(storedPlayerInfo));
        }
    } catch (error) {
        console.error("任务失败:", error);
        message.textContent = "获取线索出现错误，请重试"; // 给用户一个提示信息
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
                // 设置图片居中显示
                templeImage.style.left = "10%";
                templeImage.style.top = "10%";
                document.getElementById('game-canvas').appendChild(templeImage);

                const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
                if (storedPlayerInfo) {
                    storedPlayerInfo.gameHistory.push("解码线索成功，进入神庙");
                    localStorage.setItem('playerInfo', JSON.stringify(storedPlayerInfo));
                }
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
                boxImage.style.top = '50%';
                gameCanvas.style.textAlign = 'center';
                document.getElementById('game-canvas').appendChild(boxImage);
                event.target.style.opacity = 0.5;
                message.textContent = result;

                const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
                if (storedPlayerInfo) {
                    storedPlayerInfo.gameHistory.push("在神庙中找到神秘箱子");
                    localStorage.setItem('playerInfo', JSON.stringify(storedPlayerInfo));
                }
            } else {
                const guardImage = document.createElement('img');
                guardImage.src = "guard.jpg";
                guardImage.style.width = "100px";
                guardImage.style.height = 'auto';
                guardImage.style.position = 'absolute';
                document.getElementById('game-canvas').appendChild(guardImage);
                event.target.style.opacity = 0.5;
                message.textContent = "遇到守卫寻宝失败";

                const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
                if (storedPlayerInfo) {
                    storedPlayerInfo.gameHistory.push("在神庙中遇到守卫，寻宝失败");
                    localStorage.setItem('playerInfo', JSON.stringify(storedPlayerInfo));
                }
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
            treasureImage.style.top = '50%';
            gameCanvas.style.textAlign = 'center';
            document.getElementById('game-canvas').appendChild(treasureImage);
            event.target.style.display = 'none';
            message.textContent = treasure;

            const storedPlayerInfo = JSON.parse(localStorage.getItem('playerInfo'));
            if (storedPlayerInfo) {
                storedPlayerInfo.gameHistory.push("打开宝藏箱，找到宝藏");
                localStorage.setItem('playerInfo', JSON.stringify(storedPlayerInfo));
            }
        } catch (error) {
            message.textContent = error;
        }
    }
});