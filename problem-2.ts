{
    function removeDuplicates(nums: number[]): number[] {
        let newArray: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            if (!newArray.includes(nums[i])){ 
                newArray.push(nums[i]);
            }
        }
        return newArray;
    }
    const answer: number[]= removeDuplicates([5, 2, 3, 4, 5, 8, 8, 8]);
    console.log(answer); 
    // output: [5,2,3,4,8]
    // :)
}