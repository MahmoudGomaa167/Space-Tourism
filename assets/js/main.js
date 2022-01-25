let destPage = document.getElementById('destination');
let crewPage = document.getElementById('crew');
let technologyPage = document.getElementById('technology');


const removeClass = (array) => {
    array.forEach(item => item.classList.remove('active'));
}

const addClass = (array, index) => {
    array[index].classList.add('active');
}

if (destPage) {
    document.addEventListener('DOMContentLoaded', function () {
        const imageContainer = document.querySelector('.image-container');
        const listItems = document.querySelectorAll('.list-item');
        const descContainer = document.querySelector('.desc-container');
        let carouselHeight = document.querySelector('.carousel').offsetHeight;
        let descContainerWidth = descContainer.offsetWidth;



        listItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                removeClass(listItems)
                item.classList.add('active');

                imageContainer.style.transform = `translateY(${-index * carouselHeight}px)`

                descContainer.style.transform = `translateX(${-index * descContainerWidth}px)`
            })
        })
    })
}

if (crewPage) {
    document.addEventListener('DOMContentLoaded', function () {
        let descriptions = document.querySelectorAll('.description');
        let descriptionContainer = document.querySelector('.desc-container');
        let descriptionContainerWidth = descriptionContainer.offsetWidth;
        let dotList = document.querySelector('.dot-list');
        let images = document.querySelectorAll('.image');
        let imageContainer = document.querySelector('.crew-info__image');
        let list;
        let index = 0;
        let interval;


        // Create Dotted Indicators
        for (let i = 0; i < descriptions.length; i++) {
            list = document.createElement('li');
            list.classList.add('dot-list-item');
            dotList.appendChild(list);
        }

        let dotListItems = document.querySelectorAll('.dot-list-item');
        dotListItems[0].classList.add('active')


        // Run Slider Function        
        const run = () => {
            index++;
            changeDesc();
            changeImages();
        }


        // Change Description Function
        const changeDesc = () => {
            if (index > descriptions.length - 1) {
                index = 0;
            } else if (index < 0) {
                index = descriptions.length - 1
            }

            removeClass(dotListItems);
            addClass(dotListItems, index);
            descriptionContainer.style.transform = `translateX(${-index * descriptionContainerWidth}px)`
        }


        // Change Images Function
        const changeImages = () => {
            if (index > images.length) {
                index = 0;
            } else if (index < 0) {
                index = images.length - 1;
            }

            imageContainer.style.backgroundImage = `url(${images[index].getAttribute('src')})`;
        }


        // Reset Interval Function 
        const reset = () => {
            clearInterval(interval);
            interval = setInterval(run, 10000)
        }

        interval = setInterval(run, 10000)


        // Click on Dotted Indicators and get info        
        dotListItems.forEach((item, itemIndex) => {
            item.addEventListener('click', function () {

                index = itemIndex
                removeClass(dotListItems);
                addClass(dotListItems, index);
                descriptionContainer.style.transform = `translateX(${-index * descriptionContainerWidth}px)`;
                imageContainer.style.backgroundImage = `url(${images[index].getAttribute('src')})`
                reset()
            })
        });

    })
}

if (technologyPage) {
    document.addEventListener('DOMContentLoaded', function () {
        let listItems = document.querySelectorAll('.list-item');
        let itemContainer = document.querySelector('.item-container');
        let itemContainerHeight = itemContainer.offsetHeight;
        let imageContainer = document.querySelector('.image-container');
        let imageContainerHeight = imageContainer.offsetHeight;




        listItems.forEach((item, index) => {
            item.addEventListener('click', () => {

                removeClass(listItems);
                addClass(listItems, index);

                itemContainer.style.transform = `translateY(${-index * itemContainerHeight}px)`;
                imageContainer.style.transform = `translateY(${-index * imageContainerHeight}px)`;
            })
        })
    })
}

