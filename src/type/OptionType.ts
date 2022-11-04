export interface OptionType{
    name:string;
    description:string;
    imgUrl:string;
}

export class OptionTypeC{
    name:string;
    description:string;
    imgUrl:string;
    constructor(instance: OptionTypeC) {
        this.name=instance.name;
        this.description=instance.description;
        this.imgUrl=instance.imgUrl;
    }
}
