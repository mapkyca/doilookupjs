
import DOIResolver from "./index.js";

const resolver = new DOIResolver();

console.log(await resolver.resolve('10.5281/ZENODO.4277945'))