const HelloTesting = artifacts.require("HelloTesting");

contract("HelloTesting", () => {
    it("Should return HelloTesting", async () => {
        const helloTesting = await HelloTesting.deployed();
        const result = await helloTesting.print();
        console.log(result);
        assert(result === "HelloTesting");



    })

    it("Should return Check 2", async () => {
        const helloTesting = await HelloTesting.deployed();
        const result2 = await helloTesting.print1();
        console.log(result2);
        assert(result2 === "Check 2");
    })

})