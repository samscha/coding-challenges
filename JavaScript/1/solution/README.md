```javascript
module.exports = str =>
{
    const chars = new Set();

    for (let i = 0; i < str.length; i++)
    {
        const c = str[i];

        if (chars.has(c)) return false;

        chars.add(c);
    }

    return true;
}
```
