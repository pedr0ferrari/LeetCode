function createCounter(n: number): () => number {
    
    return function() {
    const result = n
     n = n + 1
     return result
    }
}


 
 const counter = createCounter(10)
 counter() // 10
 counter() // 11
 counter() // 12
