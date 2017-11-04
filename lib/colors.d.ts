import { Styles } from "./styles";
export declare const ansiStyles: Styles;
declare global  {
    interface String {
        strip: string;
        stripColors: string;
        bgBlack: string;
        bgBlue: string;
        bgCyan: string;
        bgGreen: string;
        bgMagenta: string;
        bgRed: string;
        bgWhite: string;
        bgYellow: string;
        black: string;
        blue: string;
        bold: string;
        cyan: string;
        dim: string;
        gray: string;
        green: string;
        grey: string;
        hidden: string;
        inverse: string;
        italic: string;
        magenta: string;
        red: string;
        reset: string;
        strikethrough: string;
        underline: string;
        white: string;
        yellow: string;
    }
}
export interface Stylettes {
    (str: string): string;
    bgBlue?: Stylettes;
    bgCyan?: Stylettes;
    bgGreen?: Stylettes;
    bgMagenta?: Stylettes;
    bgRed?: Stylettes;
    bgWhite?: Stylettes;
    bgYellow?: Stylettes;
    black?: Stylettes;
    blue?: Stylettes;
    bold?: Stylettes;
    cyan?: Stylettes;
    dim?: Stylettes;
    gray?: Stylettes;
    green?: Stylettes;
    grey?: Stylettes;
    hidden?: Stylettes;
    inverse?: Stylettes;
    italic?: Stylettes;
    magenta?: Stylettes;
    red?: Stylettes;
    reset?: Stylettes;
    strikethrough?: Stylettes;
    underline?: Stylettes;
    white?: Stylettes;
    yellow?: Stylettes;
    _styles: Array<keyof Styles>;
    toString(): string;
}
export declare class Colors {
    private static build(styleKeys);
    private static applyStyle;
    bgBlack: Stylettes;
    bgBlue: Stylettes;
    bgCyan: Stylettes;
    bgGreen: Stylettes;
    bgMagenta: Stylettes;
    bgRed: Stylettes;
    bgWhite: Stylettes;
    bgYellow: Stylettes;
    black: Stylettes;
    blue: Stylettes;
    bold: Stylettes;
    cyan: Stylettes;
    dim: Stylettes;
    gray: Stylettes;
    green: Stylettes;
    grey: Stylettes;
    inverse: Stylettes;
    italic: Stylettes;
    magenta: Stylettes;
    red: Stylettes;
    strikethrough: Stylettes;
    underline: Stylettes;
    white: Stylettes;
    yellow: Stylettes;
    private ansiStyles;
    private styles;
    private enabled;
    constructor();
    strip: (str: string) => string;
    stylize(str: string, style: keyof Styles): string;
    stringify(color: string, func: () => string): any;
    private init();
}
export declare const colors: Colors;
