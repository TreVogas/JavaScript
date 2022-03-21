var count = 0;
//this function get 1 or -1 in depending which button user taps.
function changeCount(num){
    count +=num;
    document.getElementById("count").innerHTML = count;
}