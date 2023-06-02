//# server typescript program sample for schedule * * * * * first run at 2100-01-01 00:00

//# using rfs sample;

import { myAddFunction, hypotenuse } from "./util";

{
    for (const x of [1,2,3]) {
        Log([x]);
    }

    const myDtf = dtf.Parse(" yyyy \"-\\\"-\" MM \"-\\\"-\" dd");

    try {
        ThrowError("Math is broken");
    } catch (error) {
        Log(["Caught an error", error]);
    }

    Log(["2+2 is ", myAddFunction(2, 2)]);

    Log(["a=3, b=4, c=", hypotenuse(3, 4)]);

    const myMap = {a: 1, b: 2};
    const myMapA = myMap?.GetAt("a");
    // myMap?.GetAt("a") = 42;

    Log(["Done"]);
}