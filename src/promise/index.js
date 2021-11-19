const somethingWillHappen = ()=>{
    return new Promise((resolve, reject)=>{
        if (true){
            resolve("Heyjsjsjs");
        }else{
            reject("ohohoho no");
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));


const somethingWillHappen2 = ()=>{
    return new Promise((resolve, rejct)=>{
        if(true){
            setTimeout(()=>{
                resolve("Trueee");
            },2000)
        }else{
            const error = new Error("Whooop");
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log("Array of results", response);
})
.catch(err =>{
    console.error(err);
})