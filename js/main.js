// 
// DUPLICATE ELEMENTS
// 
// duplicates the inner HTML for a parent element a quantity of times
// so we don't have to paste the same thing over and over again
// also means we only have to change something once if we want
// to apply it to all of the same elements
const duplicateHtml = (element, quantity) => {
  // takes an element as input and duplicates it's innerHTML into an array
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  // then sets the innerHTML of the element to be the new array content
  element.innerHTML = newContent
}



// 
// CONVEYOR BELT ANIMATION
// 
anime({
  targets: '.conveyor',
  // moves the element left by half it's width
  translateX: '-50%',
  duration: 1500,
  loop: true,
  autoplay: true,
  // removes the default easing to keep it consistantly smooth
  easing: 'linear'
})

// 
// WAVE ANIMATION
// 
// grabs the wave path from the page
const wavePath = document.querySelector('#wave path')
// get the length of the path
const waveOffset = anime.setDashoffset(wavePath)
// set the length of the path
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wavePath,
  // animate from the full length to 0
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// 
// ROTATING CROSSES
// 
const crossesContent = document.querySelector('#crosses')
duplicateHtml(crossesContent, 10)

anime({
  targets: '#crosses path',
  // rotates each cross 1 full 360 rotation
  rotate: '1turn',
  delay: anime.stagger(100),
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// 
// SQUARE DOTS
// 
duplicateHtml(document.getElementById('dots'), 40)
const allDots = document.querySelectorAll('.dot')

// runs through the dots and for each applies a random
// rotation, delay and duration 
allDots.forEach(dot => {
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    delay: (el, i) => anime.random(0, 500),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  })
})


// 
// TUNNEL ANIMATION
// 
anime({
  // just a regular CSS selector
  targets: '#tunnel circle',
  // a CSS transform, scaling up by 10%
  scale: 1.1,
  // runs the animation over 250ms
  duration: 250,
  // this alternates the direction, so runs from 
  // beginnng to end back to the beginning
  direction: 'alternate', 
  // runs an infinite loop
  loop: true,
  // easing gives us some more character to our animation
  // rather than it just being linear
  easing: 'easeInOutSine',
  // this staggers the start of the animation based on the index
  delay: anime.stagger(50)
})

// 
// ZIG-ZAG ANIMATION
// 
// grabs the zig-zag path from the page
const zigZagPath = document.querySelector('#zig-zag path')
// get the length of the path
const zigZagOffset = anime.setDashoffset(zigZagPath)
// set the length of the path
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset)
anime({
  targets: zigZagPath,
  // animate from the full length to 0
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// 
// FLASHING RECTANGLES
// 
anime({
  targets: '#flashes .flash',
  // this runs through the below array assigning a new background color
  // based on the index of the div
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  // this randomises the delay on each div
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true, 
  direction: 'alternate',
  easing: 'easeInOutSine'
})


// 
// SCALING CIRCLES
// 
duplicateHtml(document.getElementById('circles'), 20)

anime({
  targets: '.circle',
  scale: [0, 1.2],
  delay: anime.stagger(100),
  duration: 250,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// 
// ROTATING SQUARES
// 
anime({
  targets: '#squares rect',
  // we need to force the translate again otherwise it will get overwritten
  // when the animation runs, returning the top left corner to the center of the div
  translateX: ['-50%', '-50%'],
  translateY: ['-50%', '-50%'],
  rotate: [45, 0 , -45],
  delay: anime.stagger(100),
  duration: 1500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})