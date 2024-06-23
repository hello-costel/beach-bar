/*CSS settings by JS*/
const logoMask = document.querySelector('.logo-mask');
const logoBackground = document.querySelector('.logo-background');
const logoContainer = document.querySelector('.logo-container');

/*the following function adjust the video-background size to the logo size, avoiding unwnated overflows*/
const adjustLogoSize = () => {
    const currentSize = getComputedStyle(logoMask);
    const height = currentSize.height;
    const width = currentSize.width;
    console.log(height);
    console.log(width);

    logoBackground.style.width = width;
    logoBackground.style.height = height;

    logoContainer.style.height = height;
}

/*the following function adjust body positioning based on top-fixed header, to avoid header overflow on downloading page*/
const headerElement = document.querySelector('header');
const bodyElement = document.querySelector('body');

const adjustBodyPositioning = () => {
    const currentSize = getComputedStyle(headerElement);
    const height = currentSize.height;
    
    bodyElement.style.top = height;
}

/*The following function adjust the deafult .item height, based on it's width*/
const itemElements = document.querySelectorAll('.item'); //it's an array

const adjustItemHeight = () => {
    itemElements.forEach(element => {
        const currentSize = getComputedStyle(element);
        const width = currentSize.width;

        element.style.height = width;
    })
}

/*The following function adjust the height of .menu element */
const adjustMenuSize = () => {
    const currentSize = getComputedStyle(logoMask);
    const height = currentSize.height;
    const width = currentSize.width;
    console.log(height);
    console.log(width);

    logoBackground.style.width = width;
    logoBackground.style.height = height;

    logoContainer.style.height = height;
}

/*the following function set the header's height based on scroll*/
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
});


//CSS-setter-functions calling
adjustLogoSize();
adjustBodyPositioning();
adjustItemHeight();

window.addEventListener('resize', adjustLogoSize);
window.addEventListener('resize', adjustBodyPositioning); 
window.addEventListener('resize', adjustItemHeight);


