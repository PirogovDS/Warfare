/*

1. Сделать движение игрока вверх и вниз(стрелочка вверх и вниз)
2. Сделать выстрел, нажатием на пробел
3. Сделать полет пули
4. Сделать проверку попала ли пуля в цель( у меня муха)
5. Если попала по мухе, то сделать взрыв
6. Удалять пулю, когда она вышла запределы игрового поля

*/

//выбираю блок с игроком 
player = document.querySelector("#player");

// Добавляю события нажатия клавиши

document.addEventListener('keydown', function (event) {

    switch (event.keyCode) {

        //нажали вниз(s)
        case 83:
            player.style.top = player.offsetTop + 50 + "px";
            break;

        // нажали вверх(w)
        case 87:
            player.style.top = player.offsetTop - 50 + "px";
            break;

        //нажали пробел 
        case 32:
            createBullet();
            break;
    }
});

// Создание пули 
//<div class="bullet"></div>
function createBullet() {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
    bullet.style.top = player.offsetTop + 150 + "px";
    document.body.appendChild(bullet);

    setInterval(function () {

        bullet.style.left = bullet.offsetLeft + 10 + "px";

    }, 10);

}