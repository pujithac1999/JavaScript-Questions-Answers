// local storage:
// it allows us to storage the data with no expiry Date. the data persists even the browser 
// is close or reopened
// It will share data across all the tabs and windows
// Maximum storage limit is 5 - 10MB.

localStorage.setItem('username','Puji'); //  save  data to local storage
let username= localStorage.getItem("username"); // to retrive the data from local storage
localStorage.removeItem(username); // removes the data from localstorage
localStorage.clear(); // it removes the storage

// session storage:
// it allows to store for the duration of page session
// data is only available for the window or tab where it was stored
sessionStorage.setItem('sessionId', 12);
let sessionId = sessionStorage.getItem("sessionId");
sessionStorage.removeItem(sessionId);
sessionStorage.clear();