
type mods = Record<string, boolean|string>;

export const classNames = (cls: string, mods: mods = {}, additional: string[] = []):string => {

    return [
        cls, 
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value])=> Boolean(value))
            .map((className) => className)

    ].join(' ');

}