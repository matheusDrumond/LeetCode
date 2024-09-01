/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // declaring the variables that will be the pointers and one that will store the largest area found
  let left = 0,
    right = height.length - 1,
    maxArea = 0;

  // here is the loop that will iterate the array
  while (right > left) {
    // to calculate the area, we need 2 measurements, length that is 'right - left'
    // and the width that ,in this case, will be the shorter line, 'cause the water would stop there
    // then we multiply length by width to have area
    let length = right - left;
    let width = Math.min(height[left], height[right]);
    let area = length * width;

    // if the found area is largest than the current maxArea, we replace it
    if (area > maxArea) {
      maxArea = length * width;
    }

    // at the end, we'll move the pointer that has the shortest line, or in case that both are the same height
    // the coice of moving the right pointer is arbitrary 'cause it would make no difference to find a larger area
    height[left] > height[right] ? right-- : left++;
  }

  // at the end, we return the largest area found
  return maxArea;
};
