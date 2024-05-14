type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
     let currentValue = init; 

    return {
        increment: () => {
           return currentValue += 1; 
        },
        decrement: () => {
            return currentValue -= 1; 
        },
        reset: () => {
            return currentValue = init; 
        },
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
