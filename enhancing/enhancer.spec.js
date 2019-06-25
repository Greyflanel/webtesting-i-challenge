const enhancer = require('./enhancer.js');

it("runs the test", () => {
    expect(null).toBeNull()
});

describe("enhancer", () => {

describe('repair()', () => {
    it('should repair durability to 100', () => {

        const exampleItem = {
            name: "Mogwai",
            durability: 0,
            enhancement: 0,
        }
        const expectedItem = {
            name: "Mogwai",
            durability: 100,
            enhancement: 0,
        }
        const repairedItem = enhancer.repair(exampleItem);
        expect(repairedItem).toStrictEqual(expectedItem)
    });
    
})

describe('succeed()', () => {
    it('should increase enhancement by 1', () => {

        const exampleTwoItem = {
            name: "Mogwai",
            durability: 0,
            enhancement: 0,
        }

        

        const exampleEnhancedItem = {
            name: "Mogwai",
            durability: 0,
            enhancement: 20,
        }

        const expectedEnhancedItem = {
            name: "Mogwai",
            durability: 0,
            enhancement: exampleTwoItem.enhancement + 1,
        }

        const enhancedItem = enhancer.succeed(exampleTwoItem);
        expect(enhancedItem).toStrictEqual(expectedEnhancedItem);


        const alreadyEnhancedItem = enhancer.succeed(exampleEnhancedItem );
        expect(alreadyEnhancedItem).toStrictEqual(alreadyEnhancedItem);
    })
})
});

