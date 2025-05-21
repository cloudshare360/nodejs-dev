What is Callback?
A Callback in Node.js is an asynchronous equivalent for a function. It is a special type of function passed as an argument to another function. Node.js makes heavy use of callbacks. Callbacks help us make asynchronous calls. All the APIs of Node are written in such a way that they support callbacks.

Programming instructions are executed synchronously by default. If one of the instructions in a program is expected to perform a lengthy process, the main thread of execution gets blocked. The subsequent instructions can be executed only after the current I/O is complete. This is where callbacks come in to the picture.

The callback is called when the function that contains the callback as an argument completes its execution, and allows the code in the callback to run in the meantime. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

The syntax of implementing callback in Node.js is as follows −
```
function function_name(argument, function (callback_argument){
   // callback body 
})
```

The setTimeout() function in Node.js is a typical example of callback. The following code calls the asynchronous setTimeout() method, which waits for 1000 milliseconds, but doesn't block the thread. Instead, the subsequent Hello World message, followed by the timed message.
```
setTimeout(function () { 
   console.log('This prints after 1000 ms'); 
}, 1000);

console.log("Hello World");

```