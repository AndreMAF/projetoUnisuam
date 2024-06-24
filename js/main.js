const container = document.querySelector('.numeros');
const counters = document.querySelectorAll('.numero');

let activated = false;




window.addEventListener('scroll', () => {

    if (
        pageYOffset > container.offsetTop - container.offsetHeight - 200
        && activated === false
    ) {

        counters.forEach(counter => {
            counter.innerHTML = 0;

            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count)

                if (count < target) {
                    count++;

                    counter.innerHTML = count;

                    setTimeout(updateCount, 10);
                } else {
                    counter.innerHTML = target;
                }
            }
            updateCount();

            activated = true;
        })
    } else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 500
        || pageYOffset === 0
        && activated === true
    ) {
        counters.forEach(counter => {
            counter.innerHTML = 0
        })
        activated = false;
    }

})



