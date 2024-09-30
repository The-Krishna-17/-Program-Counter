    //variable decleration
    
    const increaseBtn = document.querySelector('#increase');
    const decreaseBtn = document.querySelector('#decrease');
    const resetBtn = document.querySelector('#reset');
    let count = 0;

    //adding eventlistner

    //function for increaseBtn
    increaseBtn.addEventListener('click', function(){
        count ++; //increases the count by 1 per click
        document.querySelector('#content').innerHTML = count;
    });

    //function for decreaseBtn
    decreaseBtn.addEventListener('click', function(){
        count --; //decreases the count by 1 per click
        document.querySelector('#content').innerHTML = count;
    });

    //function for resetBtn
    resetBtn.addEventListener('click', function(){
        count = 0; //reset the count to 0 when button is clicked
        document.querySelector('#content').innerHTML = count;
    });
