//creare funzione da applicare ai template strings.
//sostituire i caratteri speciali in un restituirlo
console.log(html `<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(arrayStr, ...vars) {
    let reuslt = arrayStr[0];
    vars.forEach((v, i) => result += safe(v) + arrayStr[i + 1]);
    return result;
}

function safe(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}