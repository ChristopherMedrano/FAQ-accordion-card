/* Log vowels first then consenants */
// let s = 'javascriptloops';
// let vowels = 'aeiou';
// const c = [];

// for(let i = 0; i < s.length; i++){
//     if(vowels.includes(s[i])){
//         console.log(s[i]);
//     } else {
//         c.push(s[i]); 
//     }
// }

// for(let k = 0; k < c.length; k++){
//     console.log(c[k]);
// }


/* Get Largest and Second Largest Num in Array */
// const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let num;
// let largeNumber = 0;
// let nextLargest = 0;

// for (let i = 0; i < nums.length; i++) {
//     num = nums[i];

//     if (num > largeNumber) {
//         nextLargest = largeNumber;
//         largeNumber = num;
//     } else if (num < largeNumber && num > nextLargest) {
//         nextLargest = num;
//     } 
// }
// console.log('large: ' + largeNumber);
// console.log('second largest: ' + nextLargest);





// This function toggles the accordian when FAQ is clicked
// function toggleFAQ(e) {
//     // Gets p.answer of section that is clicked
//     let answer = e.getElementsByClassName('answer')[0];

//     // Toggle logic
//     if (answer.style.display === 'block'){
//         answer.style.display = 'none';
//     } else {
//         answer.style.display = 'block';
//     }
// }


const accordions = document.querySelectorAll('.accordion');
const accordionAns = document.querySelectorAll('.answer');

console.log(accordions);
console.log(accordionAns);

// show open by default
accordionAns[1].classList.remove('hidden');

// hide all answers except for target 
accordions.forEach(function (accordion) {
    // target the heading
    const accordionQues = accordion.firstElementChild;

    // add event listener for toggle
    accordionQues.addEventListener('click', toggle);
});

function toggle(e) {
    accordionAns.forEach(function (content) {
        // childNode for e.target is 2 = span.arrow-toggle, children 0 = span arrow-toggle
        const arrows = content.previousElementSibling.firstElementChild;
        // checks if h2 heading was target
        if (content.previousElementSibling === e.target){
            content.classList.remove('hidden');
            content.previousElementSibling.classList.add('active');
            arrows.classList.add('spin');
        } else {
            content.classList.add('hidden');
            content.previousElementSibling.classList.remove('active');
            arrows.classList.remove('spin');
        }
    });
}