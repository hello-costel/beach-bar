const headerElement = document.querySelector('header');
const bodyElement = document.querySelector('body');
const logoMask = document.querySelector('.logo-mask');
const logoBackground = document.querySelector('.logo-background');
const logoContainer = document.querySelector('.logo-container');

/*the following function adjust the video-background size to the logo size, avoiding unwnated overflows*/
const adjustSize = () => {
    const currentSize = getComputedStyle(logoMask);
    const height = currentSize.height;
    const width = currentSize.width;
    console.log(height);
    console.log(width);

    logoBackground.style.width = width;
    logoBackground.style.height = height;

    logoContainer.style.width = width;
    logoContainer.style.height = height;
}

const adjustBodyPositioning = () => {
    const currentSize = getComputedStyle(headerElement);
    const height = currentSize.height;
    
    bodyElement.style.top = height;
}

//function callings
adjustSize();
adjustBodyPositioning();
window.addEventListener('resize', adjustSize);
window.addEventListener('resize', adjustBodyPositioning); 