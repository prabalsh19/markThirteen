const dateInput = document.querySelector('#date');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const reverseString = (str)=>{
    const split = str.split('')
    const reverse = split.reverse()
    const join = reverse.join('')
    return join;
}

const validate = ()=>{
    const dateValue = dateInput.value;
    const listOfDate = dateValue.split('-')
    console.log(listOfDate);
    const date = {day : listOfDate[2],month:listOfDate[1],year:listOfDate[0]}
    
    const dateStr = date.month + date.day + date.year;
    if(dateStr === reverseString(dateStr)){
        result.innerHTML = "It is a Palindrome"
    }else{
        result.innerHTML = "It is not a Palindrome"
    }

}

btn.addEventListener('click',validate)
