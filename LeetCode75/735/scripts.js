/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    // this stack is going to store the past asteroids
    let stack = [];

    // this loop wil iterate the array and fill the stack
    for (let asteroid of asteroids) {
        // if the asteroid is < 0 we push it to the stack
        if (asteroid > 0) {
            stack.push(asteroid)
        } 
        // otherwise (if it is < 0), we need to do some verifications
        else {
            // if the stack is not empty, the last added asteroid is > 0 and smaller than the current asteroid
            // we pop it from the stack
            while (
                stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -asteroid
            ){
                stack.pop()
            }
            // otherwise, if the stack is empty or the last added asteroid is < 0
            // we push the current asteroid into the stack
            if(stack.length === 0 || stack[stack.length - 1] < 0){
                stack.push(asteroid)
            } 
            // the last verification, if the current asteroid is the same size of the last added one
            // we pop the last added one from the stack
            else if(-asteroid === stack[stack.length - 1]){
                stack.pop()
            }
        }

    }

    // in the end, we return the stack
    return stack
};