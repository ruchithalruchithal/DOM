//HOW TO CONVERT ANY FUNCTION TO ASYNC
//STEP-1: ADD `async` keyword;
//STEP-2: IF IT IS A RESOLVE FUCTION JUST RETURN THE DATA
//STEP-3: IF IT IS A REJECT FUCTION JUST THROW THE DATA AS ERROR

//ALTERNATIVE OF RESOLVE
/*
function gradePass(grade){
   const result = {
      message: `Pass with Grade ${grade}`
    }
   
   
   return Promise.resolve(result);
}
*/

async function gradePass(grade) {
    const result = {
      message: `Pass with Grade ${grade}`,
    };
  
    return result;
  }
  
  //ALTERNATIVE OF REJECT
  /*
     function gradeFail(grade){
        const result = {
           message: `Pass with Grade ${grade}`
         }
        
        return Promise.reject(result);
     }
     
     */
  
  async function gradeFail(grade) {
    const result = {
      message: `Fail with Grade ${grade}`,
    };
  
    throw new Error(result);
  }
  
  //LOGICAL FUNCTION
  function calculateGrade(SCORE) {
    if (SCORE > 80) {
      return gradePass("A");
    } else if (SCORE <= 80 && SCORE > 60) {
      return gradePass("B");
    } else if (SCORE <= 60 && SCORE > 40) {
      return gradePass("C");
    } else {
      return gradeFail("D");
    }
  }
  
  calculateGrade(95)
    .then((passData) => console.log(passData.message))
    .catch((err) => console.log(err.message));
  