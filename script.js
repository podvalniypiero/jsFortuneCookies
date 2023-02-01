gsap .from("#btn", { x: 1000, delay:1, duration: 2, ease: "cos"})


const click = document.querySelector("#btn");

const par = document.querySelector("#par");
const quote = [
    "Стать твоим другом дано не каждому, но каждому дано стать чьим-то учителем.",
    "Определитесь с конечной целью – и у вас появится шанс на победу.",
    "Стоя на месте, двигаться можно только назад.",
    "Лучше сделать и пожалеть о сделанном, чем не сделать и сожалеть о не сделанном.",
    "Вот и пришел завтрашний день, который так беспокоил вас вчера.",
    "Не ищите врагов вокруг себя, а начните с поисков внутри самого себя.",
    "Самое время расстаться с отжившим старым ради нового.",
    "Не забывайте о здоровье, оно – основа всего.",
    "Ожидайте неожиданного предложения."

]

click.addEventListener("click",function(){
    document.querySelector("#jazz").play();
    let randomQuote = quote[Math.floor(Math.random()*quote.length)];

    console.log(randomQuote);
    par.textContent = randomQuote;
    par.style.display = "block";

})

