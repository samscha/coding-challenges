module.exports = (s1, s2) =>
{
    if (s1.length !== s2.length) return false;

    const chars = new Map();

    for (let i = 0; i < s1.length; i++)
    {
        const c1 = s1[i];
        const c2 = s2[i];

        if (c1 === c2) continue;

        let m1 = chars.get(c1);
        let m2 = chars.get(c2);

        if (!m1) chars.set(c1, 1);
        else if (m1 === -1) chars.delete(c1);
        else chars.set(c1, ++m1);

        if (!m2) chars.set(c2, -1);
        else if (m2 === 1) chars.delete(c2);
        else chars.set(c2, --m2);
    }

    return chars.size === 0;
}
