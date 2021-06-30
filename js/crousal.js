// CROUSAL 1

const caseStudy = document.querySelectorAll('.case-study');
let l = 0;
let numberOfClicks = 0
let movePer = 100;

const moveRight = () => {
    if(numberOfClicks <= caseStudy.length - 2){ // if slides are less than total slides
        numberOfClicks++
        l = l + movePer;
        caseStudy.forEach(el => {
            el.style.transform = `translateX(-${l}%)`
        })
    }else if (numberOfClicks === caseStudy.length - 1){  // when the last slide come
        numberOfClicks = 0;
        l = 0;
        caseStudy.forEach(el => {
            el.style.transform = `translateX(0%)`
        })
    }
}

const moveLeft = () => {
    if(numberOfClicks > 0){
        numberOfClicks--
        l = l - movePer;
        caseStudy.forEach(el => {
            el.style.transform = `translateX(-${l}%)`
        })
    }else if(numberOfClicks === 0){
        l = caseStudy.length - 1 + '00';
        numberOfClicks = caseStudy.length - 1
        caseStudy.forEach(el => {
            el.style.transform = `translateX(-${l}%)`
        })
    }
}

// CROUSAL 2


const images = document.querySelectorAll('.crousal-card');
let x = 0;
let imageNumberOfClicks = 0
let imageMovePer = 100;



const imageMoveRight = () => {
    console.log('its is working')
    if(imageNumberOfClicks < 1){
        imageNumberOfClicks++
        x = x + imageMovePer;
        images.forEach(el => {
            el.style.transform = `translateX(-${x}%)`
        })
    }else if (imageNumberOfClicks === 1){
        console.log('not working')
        imageNumberOfClicks = 0;
        x = 0;
        images.forEach(el => {
            el.style.transform = `translateX(0%)`
        })
    }
}

const imageMoveLeft = () => {
    console.log('its is working')
    if(imageNumberOfClicks > 0){
        imageNumberOfClicks--
        x = x - movePer;
        images.forEach(el => {
            el.style.transform = `translateX(-${x}%)`
        })
    }else if(imageNumberOfClicks === 0){
        x =  1 + '00';
        imageNumberOfClicks =  1
        images.forEach(el => {
            el.style.transform = `translateX(-${x}%)`
        })
    }
}

// CROUSAL 3


const testimonials = document.querySelectorAll('.testimonial-card');
let z= 0;
let testNumberOfClicks = 0
let testMovePer = 100;



const testMoveRight = () => {
    console.log('its is working')
    if(testNumberOfClicks <= caseStudy.length - 2){
        testNumberOfClicks++
        z= z+ testMovePer;
        testimonials.forEach(el => {
            el.style.transform = `translateX(-${z}%)`
        })
    }else if (testNumberOfClicks === caseStudy.length - 1){
        console.log('not working')
        testNumberOfClicks = 0;
        z= 0;
        testimonials.forEach(el => {
            el.style.transform = `translateX(0%)`
        })
    }
}

const testMoveLeft = () => {
    console.log('its is working')
    if(testNumberOfClicks > 0){
        testNumberOfClicks--
        z= z- movePer;
        testimonials.forEach(el => {
            el.style.transform = `translateX(-${z}%)`
        })
    }else if(testNumberOfClicks === 0){
        z=  caseStudy.length - 1 + '00';
        testNumberOfClicks =  caseStudy.length - 1
        testimonials.forEach(el => {
            el.style.transform = `translateX(-${z}%)`
        })
    }
}
