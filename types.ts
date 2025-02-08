import { StaticImageData } from 'next/image';

export interface ProductItem {
    title: string;
    catogery: any; // replace 'any' with proper type from catogery-info
    index: number;
    link: string;
    pic1: StaticImageData;
    pic2?: StaticImageData;
    pic3?: StaticImageData;
    pic4?: StaticImageData;
    main: boolean;
    challange: string[];
    solution: string[];
    results: string[];
}