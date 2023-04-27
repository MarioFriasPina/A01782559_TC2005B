function first_not_repeated(){
    const str = document.getElementById('1').value;
    const iterator = str[Symbol.iterator]();
    let past = "";
    let curr = "";

    let theChar = iterator.next();

    while (!theChar.done) {
        find = past.indexOf(theChar.value);
        if (find != -1){
            curr = curr.replace(theChar.value, "");
        }
        else{
            curr = curr.concat(theChar.value);
            past = past.concat(theChar.value);
        }
        theChar = iterator.next();
    }
    document.getElementById('div1').innerHTML = curr[0];
}

function bubble_sort(list){

    let list_num = [];

    list.forEach(element => {list_num.push(parseInt(element))});
    let len = list_num.length - 1;
    let sorted = false;

    while (!sorted)
    {
        sorted = true;
        for (let i = 0; i < len; i++)
        {
            if (list_num[i] > list_num[i + 1])
            {
                [list_num[i], list_num[i + 1]] = [list_num[i + 1], list_num[i]];
                sorted = false;
            }
        }
    }
    return list_num;
}

function call_bubble_sort() {
    const str = document.getElementById('2').value;
    let list = str.split(',');

    let list_num = bubble_sort(list);

    document.getElementById('div2').innerHTML = list_num;
}

function reverse_same(array){
    let len = array.length - 1;
    for (let i = 0; i < (len / 2); i++)
    {
        console.log(array);
        [array[i], array[len - i]] = [array[len - i], array[i]];     
    }
}

function reverse_return(past_array){
    let array = past_array;
    let len = array.length - 1;
    for (let i = 0; i < (len / 2); i++)
    {
        console.log(array);
        [array[i], array[len - i]] = [array[len - i], array[i]];     
    }
    return array;
}

function call_reverse(){
    const str = document.getElementById('3').value;
    const list = str.split(',');

    reverse_same(list);

    document.getElementById('div3').innerHTML = list;
}

function upperfirst(str){
    const iterator = str[Symbol.iterator]();

    let new_str = "";
    let theChar = iterator.next();
    let first = true;

    while (!theChar.done) {
        if (theChar.value == ' ')
        {
            first = true;
            new_str += theChar.value;
        }
        else
        {
            if (first)
            {
                first = false;
                new_str += theChar.value.toUpperCase();
            }
            else
                new_str += theChar.value;
        }
        theChar = iterator.next();
    }

    return new_str;
}

function call_upperfirst(){
    const str = document.getElementById('4').value;

    let new_str = upperfirst(str);

    document.getElementById('div4').innerHTML = new_str;
}

function mcd(a, b) {
    if (!b)
        return a;
    return mcd(b, a % b);
}

function maximo_comun_divisor() {
    const str = document.getElementById('5').value;
    const list = str.split(',');

    result = mcd(parseInt(list[0]), parseInt(list[1]));
    document.getElementById('div5').innerHTML = result;
}

function hacker_speak() {
    const str = document.getElementById('6').value;
    let new_str = str.replaceAll(/[aA]/gi, '4').replaceAll(/[eE]/gi, '3').
    replaceAll(/[iI]/gi, '1').replaceAll(/[oO]/gi, '0').replaceAll(/[sS]/gi, '5');

    document.getElementById('div6').innerHTML = new_str;
}

function factoriza(num) {
    const max = Math.sqrt(num);
    let list_num = []

    for (let i=1; i < max; i++){
        if (num % i == 0) {
            list_num.push(i);
            list_num.push(num / i);
        }
    }
    return bubble_sort(list_num);
}

function call_factoriza() {
    const str = document.getElementById('7').value;
    const list_num = parseInt(str);

    document.getElementById('div7').innerHTML = factoriza(list_num);
}

function quitaDuplicados(list) {
    let unique = [];

    list.forEach(elem => {
        if (!unique.includes(elem)) {
            unique.push(elem);
        }
    });

    return unique;
}

function call_quitaDuplicados() {
    const str = document.getElementById('8').value;
    const list = str.split(',');

    document.getElementById('div8').innerHTML = quitaDuplicados(list);
}

function shorteststring(list){
    let shortest = list[0].length;

    list.forEach(elem => {
        if (shortest > elem.length) {
            shortest = elem.length;
        }
    });

    return shortest;  
}

function call_longeststring() {
    const str = document.getElementById('9').value;
    const list = str.split(',');

    document.getElementById('div9').innerHTML = shorteststring(list);
}

function palindrome(str) {
    let len = str.length - 1;
    for (let i = 0; i < (len / 2); i++)
    {
        if (str[i] != str[len -i])
            return false;
    }
    return true;
}

function call_palindrome() {
    const str = document.getElementById('10').value;

    document.getElementById('div10').innerHTML = palindrome(str);
}

function call_order(){
    const str = document.getElementById('11').value;
    let list = str.split(',');
    list.sort();
    document.getElementById('div11').innerHTML = list;
}

function median(list_num) {
    let sorted = bubble_sort(list_num);
    const len = list_num.length;

    if (len % 2 == 0) {
        return (sorted[len / 2] + sorted[(len / 2) - 1]) / 2;
    }
    return sorted[(len - 1) / 2];
}

function mode(list_num){
    let possible = quitaDuplicados(list_num);
    let repeats = new Array(possible.length).fill(0);

    list_num.forEach(element => {
        for (i = 0; i < possible.length; i++) {
            if (element == possible[i]) {
                repeats[i] += 1;
            }
        }
    })

    const maxim = Math.max(...repeats);
    let mode = []

    for (i = 0; i < possible.length; i++) {
        if (repeats[i] == maxim) {
            mode.push(possible[i]);
        }
    }

    return (mode);
}

function call_median_mode() {
    const str = document.getElementById('12').value;
    let list = str.split(',');

    let list_num = [];
    list.forEach(element => {list_num.push(parseInt(element))});
    
    let output = "Mediana: " + median(list_num) + "<br>Moda: " + mode(list_num);

    document.getElementById('div12').innerHTML = output;
}

function call_mode() {
    const str = document.getElementById('13').value;
    let list = str.split(',');

    document.getElementById('div13').innerHTML = mode(list);
}

function isPower2(num) {
    if (num < 2)
        return false;
    while (num > 1)
    {
        if (num % 2 != 0)
            return false;
        num = num / 2;
    }
    return true;
}

function call_power2() {
    const str = document.getElementById('14').value;
    let num = parseInt(str);

    document.getElementById('div14').innerHTML = isPower2(num);
}

function down_bubble_sort(list){

    let list_num = [];

    list.forEach(element => {list_num.push(parseInt(element))});
    let len = list_num.length - 1;
    let sorted = false;

    while (!sorted)
    {
        sorted = true;
        for (let i = 0; i < len; i++)
        {
            if (list_num[i] < list_num[i + 1])
            {
                [list_num[i], list_num[i + 1]] = [list_num[i + 1], list_num[i]];
                sorted = false;
            }
        }
    }
    return list_num;
}

function call_down_bubble_sort() {
    const str = document.getElementById('15').value;
    let list = str.split(',');

    let list_num = down_bubble_sort(list);

    document.getElementById('div15').innerHTML = list_num;
}