
export interface IPkgInfo {
    price: number,
    styles: string[],
}

// Maps package names with their info (i.e. price, styles)
export const packageInfo: { [key: string]: IPkgInfo } = {
    "Mercury": {
        price: 10,
        styles: ["M_A", "M_B"]
    },
    "Venus": {
        price: 20,
        styles: ["V_A", "V_B", "V_C"]
    },
    "Earth": {
        price: 30,
        styles: ["E_A", "E_B"]
    },
    "Mars": {
        price: 40,
        styles: ["Ms_A", "Ms_B", "Ms_C", "Ms_D"]
    }
}

export const packageOptions: string[] = ['Mercury', 'Venus', 'Earth', 'Mars'];

export const states: string[] = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];