export class QuestionBase<T>
{
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: { key: string, value: string }[];
    validationMessage:string;


    constructor(data: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        type?: string,
        options?:{ key: string, value: string }[]
    } = {}) {
        this.value = data.value;
        this.key = data.key || '';
        this.label = data.label || '';
        this.required = !!data.required;
        this.order = data.order === undefined ? 1 : data.order;
        this.controlType = data.controlType || '';
        this.type = data.type || '';
        this.options=data.options;

    }


}