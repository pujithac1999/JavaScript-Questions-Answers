// asyn --> this operation return the promise 
// await --> it is used to await the promise to settle 

async function fetchData() {
    try {
        const res = await fetch("http://localhost:3000/Names");
        const data = await res.json();
        console.log(data);
    } catch(error) {
        throw err;
    }
}

fetchData();