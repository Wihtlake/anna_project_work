let bascket_id = document.getElementById('burger_button');
let close = document.getElementById('close');
let bascket = document.getElementsByClassName('burger_show');


bascket_id.addEventListener('click', index);
close.addEventListener('click', closed);


function index() {
	bascket[0].classList.add("active");
	
}
function closed() {
	bascket[0].classList.remove("active");
}


// Берём кнопку вперёд
let btnRight = document.querySelector(".btnRight");
let btnleft = document.querySelector(".btnleft");
// Берём слайды
let slides = document.querySelectorAll(".gallery_card");
// Объявляем переменную i 
let i = 0;
 
// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})
btnleft.addEventListener("click", function () {
    // Увеличиваем переменную i
    --i
    // Условие если переменная i больше или равна количеству слайдов
    if (i <= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i+1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i+1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})














