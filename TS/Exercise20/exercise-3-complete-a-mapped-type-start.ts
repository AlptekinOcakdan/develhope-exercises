/**
 * START: Follow the instructions below.
 */

type CountryData = {
    name: string;
    languages: string[];
    population: number;
};

// Complete the syntax for this mapped type.
// Hint: Mapped types are generic.
//
// Replace the `never` type with the correct type.
//
// These changes should fix all the type errors.

type Descriptions = {
    [Property in keyof CountryData]: string;
};

const countryDataDescriptions: Descriptions = {
    name: "The name of the country.",
    languages: "The languages spoken in the country.",
    population: "The population of the country.",
};

// ----

export {};
