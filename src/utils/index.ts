export function clamp(num: number, min: number, max: number) {
    if (num < min) return min;
    if (num > max) return max;
    return num;
}

export function sleep(ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
}

export type ResolvedDice = {
    num: number
    roll: number
    ref?: number
}

export type DiceResult = {
    roll: number
    description?: string
}

type ResolveDiceOptions = {
    bonusDamage?: string
}

export function resolveDices(dices: string, diceOptions?: ResolveDiceOptions): ResolvedDice[] | undefined {
    const bonusDamage = diceOptions?.bonusDamage || '0';
    const formattedDices = dices.trim().toLowerCase();
    const options = formattedDices.split('/');
    if (options.length > 1) {
        const selected = prompt('Escolha dentre as seguintes opções de rolagem:\n' +
            options.map((opt, i) => `${i + 1}: ${opt}`).join('\n'));

        if (!selected) return;

        const code = parseInt(selected);

        if (isNaN(code) || code < 1 || code > options.length) return;

        return resolveDices(options[code - 1]);
    }

    const diceArray = formattedDices.split('+');
    const resolvedDices: ResolvedDice[] = [];

    for (let i = 0; i < diceArray.length; i++)
        resolvedDices.push(resolveDice(diceArray[i], bonusDamage));

    return resolvedDices;
}

function resolveDice(dice: string, bonusDamage: string = '0'): ResolvedDice {
    if (dice.includes('db/')) {
        const divider = parseInt(dice.split('/')[1]) || 1;

        const split = bonusDamage.split('d');

        let _dice = `${split[0]}d${Math.round(parseInt(split[1]) / divider)}`;

        if (split.length === 1)
            _dice = Math.round(parseInt(split[0]) / divider).toString();

        return resolveDice(_dice);
    }
    if (dice.includes('db')) return resolveDice(bonusDamage);

    const split = dice.split('d');
    if (split.length === 1) return { num: 0, roll: parseInt(dice) };
    return { num: parseInt(split[0]), roll: parseInt(split[1]) };
}