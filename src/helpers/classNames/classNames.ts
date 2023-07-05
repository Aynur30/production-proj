
type mods = Record<string, Boolean|string>;





export const classNames = (cls: string, mods: mods, additional: string[]):string => {

    return [
        cls, 
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value])=> Boolean(value))
            .map((className) => className)

    ].join(' ');

}