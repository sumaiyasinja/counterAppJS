document.querySelector('#plus_button').addEventListener('click', function(){
    counterConvert();
    counterNumber += 1;
    document.querySelector('#counter').innerText = counterNumber;
});
document.querySelector('#minus_button').addEventListener('click', function(){
    counterConvert();
    counterNumber -= 1;
    document.querySelector('#counter').innerText = counterNumber;
});

function counterConvert() {
    let counter = document.querySelector('#counter');
    counter = counter.textContent;
    counterNumber = parseInt(counter);
    return counterNumber;
}
function counterReset(){
    counterConvert()
    counterNumber =0;
    document.querySelector('#counter').innerText = counterNumber;

}