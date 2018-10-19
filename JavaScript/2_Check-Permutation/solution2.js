module.exports = (s1, s2) =>
{
    if (s1.length !== s2.length) return false;

    const a1 = s1.split('').sort();
    const a2 = s2.split('').sort();

    return a1.every((c, i) => c === a2[i]);
}
