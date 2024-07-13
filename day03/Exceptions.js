// result is not assigned to a variable
// CODE IS RUN AND GIVE THE DETAILS OF THE ERROR 

console.log('Test started');

try{
    console.log(result);
}catch (e) { 
    //! refererence variable of the error object that was
//! created in try block when there is an error 
    console.log('An error occurred:', e);
    
}finally
{
    console.log('This code will always run');
}

console.log('Test completed');

console.log("-------------------");

// crate error and terminate program

throw new Error('Throwing a new error because somenting went wrong');

//! yukaridaki error creater old ASla asagidaki code execude olmaz, program 
//! will be TERMINATED
console.log('Test is completed');