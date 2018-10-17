module.exports = (s1, s2) =>
{
    if (s1.length !== s2.length) return false;

    const chars = new Map();

    for (let i = 0; i < s1.length; i++)
    {
        const c = s1[i];

        chars.set(c, chars.get(c) + 1 || 1);
    }

    for (let i = 0; i < s2.length; i++)
    {
        const c = s2[i];

        if (!chars.has(c) || chars.get(c) < 1) return false;

        chars.set(c, chars.get(c) - 1);

        if (chars.get(c) === 0) chars.delete(c);
    }

    return chars.size === 0;
}
