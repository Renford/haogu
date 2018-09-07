
export var plusOne = function (digits) {
  if (digits.length === 0) {
    return []
  }

  let result = digits
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      result[i] = digits[i] + 1
      break
    }

    result[i] = 0
    if (i === 0) {
      result.splice(0, 0, 1)
    }
  }
  return result
}

var pivotIndex = function (nums) {
  let result = -1
  for (let i = 0; i < nums.length; i++) {
    let left = i - 1
    let right = i + 1
    let leftSum = 0
    let rightSum = 0
    while (left >= 0) {
      leftSum += nums[left]
      left -= 1
    }

    while (right <= nums.length - 1) {
      rightSum += nums[right]
      right += 1
    }

    if (leftSum === rightSum) {
      result = i
      break
    }
  }

  return result
}

var dominantIndex = function (nums) {
  let result = -1

  result = nums

  return result
}

var reverseString = function (s) {
  if (s.length === 0) {
    return ''
  }

  let array = s.split('')

  let i = 0
  let j = s.length - 1
  while (i < j) {
    [array[i++], array[j--]] = [array[j], array[i]]
  }

  return array.join('')
}

var twoSum = function (numbers, target) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    let index = binarySearch(numbers, target - numbers[i])
    if (index > -1 && index !== i) {
      result = [i + 1, index + 1]
      if (i > index) {
        result = [index + 1, i + 1]
      }
      break
    }
  }
  return result
}

var binarySearch = function (numbers, num) {
  let i = 0
  let j = numbers.length - 1

  while (i <= j) {
    console.log('i=======j', i, j)
    let mid = Math.floor((i + j) / 2)
    if (num > numbers[mid]) {
      i = mid + 1
    } else if (num < numbers[mid]) {
      j = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

var rotate = function (nums, k) {
  if (nums.length <= 1) {
    return
  }

  for (let i = 0; i < k; i++) {
    let val = nums[nums.length - 1]
    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    nums[0] = val
  }
}

var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return
  }

  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++
    } else {
      if (zeroCount > 0) {
        nums[i - zeroCount] = nums[i]
        nums[i] = 0
      }
    }
  }
}

var reverseWords = function (str) {
  let result = ''

  // while (str.splice)

  return result
}

var removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return
  }

  let prev = ''
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === prev) {
      count++
    } else {
      prev = nums[i]
      nums[i - count] = nums[i]
    }
  }

  return nums.length - count
}

export default {
  plusOne,
  pivotIndex,
  dominantIndex,
  reverseString,
  twoSum,
  rotate,
  moveZeroes,
  reverseWords,
  removeDuplicates
}
