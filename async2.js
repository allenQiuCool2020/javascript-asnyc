// Promises / Async-Await
const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = false; // Corrected `True` to `true`
            if (preHeatOven) {
                resolve('Preheat oven to 180 degrees');
            } else {
                reject('Failed task');
            }
        }, 1000); // Closing setTimeout correctly
    });
};
 
const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addChoco = true; // Corrected `True` to `true`
            if (addChoco) {
                resolve('Place butter and chocolate chips, stir until melted and smooth');
            } else {
                reject('Failed task');
            }
        }, 1000); // Closing setTimeout correctly
    });
};
 
const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSaltFlour = true; // Corrected `True` to `true`
            if (addSaltFlour) {
                resolve('Add flour, cocoa, and salt, and stir until smooth');
            } else {
                reject('Failed task');
            }
        }, 1000); // Closing setTimeout correctly
    });
};
 
const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true; // Corrected `True` to `true`
            if (bakeMixture) {
                resolve('Bake for 24 mins for a really gooey center');
            } else {
                reject('Failed task');
            }
        }, 1000); // Closing setTimeout correctly
    });
};
 
const bakeChocolateBrownies = async () => {
    try {
        const taskOne = await preHeatOven();
        console.log(taskOne);
 
        const taskTwo = await addSugarAndChocoChips();
        console.log(taskTwo);
 
        const taskThree = await addFlourCocoaAndSalt();
        console.log(taskThree);
 
        const taskFour = await bakeMixture();
        console.log(taskFour);
 
        console.log('Enjoy! Your perfect chocolate brownies');
    } catch (error) {
        console.error('Error:', error); // Handle rejection properly
    }
};
 
bakeChocolateBrownies();
