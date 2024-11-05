function receivesAFunction(callbackFunction) {
    return callbackFunction()
}
receivesAFunction(function() {return "I'm a callback function!"})

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I'm an anonymous function!")
    }
}