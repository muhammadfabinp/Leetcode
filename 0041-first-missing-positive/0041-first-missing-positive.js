var firstMissingPositive = function(nums) {

    let n = nums.length;

    // Put every valid number in its correct index
    for (let i = 0; i < n; i++) {

        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            let correctIndex = nums[i] - 1;

            [nums[i], nums[correctIndex]] =
            [nums[correctIndex], nums[i]];
        }
    }

    // Find the first number that is not in its correct position
    for (let i = 0; i < n; i++) {

        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};