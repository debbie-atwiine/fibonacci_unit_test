function fibonacci(num) {   
    if(num <= 1)
        return num;
    if (num == 2){
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

module.exports = fibonacci;


//pair programming partner: ARAFAT MAGEZI