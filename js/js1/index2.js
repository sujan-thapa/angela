function isLeap(year) {

    /**************Don't change the code above****************/

    //Write your code here.  
    if (year%4 === 0 ) {
        // const one = year%100
        // console.log(one)
        // console.log("leap1")
        if (year%100 === 0) {
            // console.log("not leap2")
            if (year%400 === 0) {
                console.log("final leap year")
                
            }else{
                console.log("not leap year")
            }

            
        }
        
    }else{
        console.log("finally not leap year")
    }





    /**************Don't change the code below****************/

}

isLeap(2000)
isLeap(2400)
isLeap(1989)
