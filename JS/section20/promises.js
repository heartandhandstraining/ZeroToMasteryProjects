const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');

    } else {
        reject('Error, it broke');
    }
});

promise
.then(result => result + '!')
.then(result2 => result2 + '?')
.catch(() => console.log('errror!')) // catch() will only catch errors lexically, if none, the resolution from the chained promise is returned
.then(result3 => {                      // to next chain, or to the browser.
    console.log(result3 + '!');
})

// example to show how the returned value of the promise is only returned when the data is ready: 
/*
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiiiiii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Mr Miyagi')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me your looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})
*/