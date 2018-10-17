module.exports = str =>
{
    if (!str || !str.trim('')) throw new Error(``);

    const chars = new Set();

    for (let i = 0; i < str.length; i++)
    {
        const c = str[i];

        if (chars.has(c)) return false;

        if (c !== ' ') chars.add(c);
    }

    return true;
}
