// In the same github repository, add new javascript file with a file that returns true if the passed string looks like a valid South African phone number.The user may fill out the form field any way they choose as long as it has the format of a valid SA number. The following are examples of valid formats for SA numbers: 01128281111 (011) 282 1111 (011) 282-1111




function telephoneCheck(str) {

    const validPatterns = [

                    //011-282-8111
                    /^\d{3}-\d{3}-\d{4}$/,
                
                    // (011) 282-8111
                    /^\(\d{3}\) \d{3}-\d{4}$/,
                
                    //(011) 282 1111
                    /^\(\d{3}\) \d{3} \d{4}$/,

                    // 0112828111
                    /^\d{10}$/,
                
                    // (011)282-8111
                    /^\(\d{3}\)\d{3}-\d{4}$/,
                
                    //011 282 8111
                    /^\d{3} \d{3} \d{4}$/,
                    ];
  
    return validPatterns.some(function(item){
        return item.test(str)
    })
                                

                }

  console.log(telephoneCheck("(011) 282-1111"));
