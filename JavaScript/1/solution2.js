module.exports = str =>
{
    if (!str || !str.trim('')) throw new Error(``);

    for (let i = 0; i < str.length; i++)
    {
        for (let j = i + 1; j < str.length; j++)
        {
            if (str[i] === str[j] && str[i] !== ' ') return false;
        }
    }

    return true;
}
