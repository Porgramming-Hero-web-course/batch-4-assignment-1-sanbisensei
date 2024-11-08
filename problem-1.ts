{
    function sumArray(nums: number[]): number{
        let sumNums = 0;
        for(let i = 0 ; i<nums.length ; i++){
            sumNums = sumNums + nums[i]
        }
        return sumNums;
    }
    
    const answer : number = sumArray([5,2,3,4,5]);
    // output will be 19
    // :)
    console.log(answer);
}
