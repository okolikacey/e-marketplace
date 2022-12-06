export type optionType = {
    id: number;
    isActive: boolean;
    name: string;
}

export type filterType = {
    id: number;
    sectionName: string;
    options: optionType[]
}