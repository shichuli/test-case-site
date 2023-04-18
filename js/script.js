let modalWindow, closeButton;
console.log("Сайт загружается 1 ")
/****
 * Функция снизу делает тоже самое что и window.onload, но с использованием библиотеки jQuery
 * которую мы подключили в Html в теге <script>
 */

jQuery(document).ready(($) => {
    console.log("page loaded")
    /****
     * тоже что и
     *
     * document.querySelector('.img').addEventListener("click", ()=>{
     *     какие то действия функции
     * })
     *
     * где $(".image") = document.querySelector('.image')
     * click(()=>{}  =  .addEventListener("click", ()=>{})
     *
     * Мы так же передаем e или event - что означает событие
     * и из события в данном случае из клика
     * достаем элемент на который кликнули
     * используя ключевое слово target
     */
    $("#present").click((e) => {

        //выводим событие
        console.log(e)

        $('.present-top').addClass("bounce-out-top");
        $('.present-light').addClass("present-light-on");


        // $('.present-top').toggle('.puff-out-bottom')

        // let link = e.target.src;
        //
        // //вывоим линк который равен ссылке у элемента на который нажали
        // console.log(link)

        /**
         * Способ смены ссылки через хранилище data-img
         *  e.target.src = $(e.target).data("img");
         *  console.log($(e.target).data("img"))
         *
         *  Если надо в хранилище поменять данные data-img, то используем следующий код
         *   $(e.target).data("img", link);
         */

        // e.target.src = "../images/open-box-head.png";


        // ставим выолнение по таймеру
        setTimeout(() => {
            toggLeModal()
        }, 1300); //время через которое выполнится функция function
    });

    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        speed: 50,
        easing: 'linear',
        cssEase: 'linear',
        arrows: false,
        swipe: false,
        pauseOnFocus: false, //остановка при нажатии
        pauseOnHover: false, //остановка при наведении
    });

    $('.stop-button').click((e) => {
        toggleButton(e.target);
        stopKrutki(e)
    });

    $('.play-button').click((e) => {
        toggleButton(e.target);
        playKrutki()
    });


    modalWindow = document.querySelector('.modal-window');
    $('.close-button').click(() => {
        document.querySelector('.present-top').classList.remove("bounce-out-top")
        document.querySelector('.present-light').classList.remove('present-light-on')
        toggLeModal()
        const redButton = document.querySelector('.redB');
        redButton && redButton.classList.remove('redB')
        shuffleElements()
        stopKrutki();
    });

    $(window).click((e) => {
        if (e.target === modalWindow) {
            document.querySelector('.present-top').classList.remove("bounce-out-top")
            document.querySelector('.present-light').classList.remove('present-light-on')
            toggLeModal();
            const redButton = document.querySelector('.redB');
            redButton && redButton.classList.remove('redB')
            shuffleElements()
            stopKrutki();

        }
    });

    const playKrutki = () => {
        shuffleElements()
        $('.autoplay').slick('slickSetOption', {
            'autoplay': true
        }, true);
    }

    const stopKrutki = () => {
        $('.autoplay').slick('slickSetOption', {
            'autoplay': false
        }, true);
    }

    const shuffleElements = () => {
        log(document.querySelector('.autoplay'))
        const container = document.querySelector('.autoplay').children[0].children[0];
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    }

    const toggleButton = (buttonPressed) => {  // play white
        console.log(buttonPressed);

        const redButton = document.querySelector('.redB'); // stop red  || false

        if (redButton && redButton !== buttonPressed) {
            redButton.classList.remove('redB') // stop white
        }

        buttonPressed.classList.toggle('redB') // play red
    }


    const log = (text) => {
        console.log(text);
    }

    const toggLeModal = () => {
        modalWindow.classList.toggle('show-modal-window');
    }
});




