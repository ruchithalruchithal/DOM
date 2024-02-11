//Promises are used to handle the results of an asynchronous operation,
//for example like making an API call or reading from disk

//Promise constructor is having only 1 parameter, which is callback
//callback is having 2 parameters,
//which is resolve function(When promise is in success)
//and reject function (when promise is in fail)

/*
Pending: A pending Promise hasn't begun its operations yet.
Fulfilled: When a promise resolves after its operations finished.
Rejected: When a promise fails to complete its operations successfully.
*/

const isCashAvailable = true;

//promise declaration
const atmPromise = new Promise(function (resolve, reject) {
  //LOGIC
  if (isCashAvailable) {
    const response = {
      message: "CASH IS AVAILABLE TO WITHDRAW",
    };
    resolve(response);
  } else {
    const response = {
      message: "CASH NOT AVAILABLE",
    };
    reject(response);
  }
});

//handle promise data
//RESOLVE--> THEN
//REJECT--> CATCH

atmPromise
  .then(function (successResponse) {
    console.log(successResponse.message);
  })
  .catch(function (failResponse) {
    console.log("My custom error:-" + failResponse.message);
  });

const SCORE = 60;

const gradePromise = new Promise(function (pass, fail) {
  if (SCORE > 80) {
    const result = {
      message: "Pass with Grade A",
    };
    pass(result);
  } else if (SCORE <= 80 && SCORE > 60) {
    const result = {
      message: "Pass with Grade B",
    };
    pass(result);
  } else if (SCORE <= 60 && SCORE > 40) {
    const result = {
      message: "Pass with Grade C",
    };
    pass(result);
  } else {
    const result = {
      message: "Fail with Grade D",
    };
    fail(result);
  }
});

gradePromise
  .then(function (passData) {
    console.log(passData.message);
  })
  .catch(function (failData) {
    console.error(failData.message);
  });
