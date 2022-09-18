export  function isLeapYear(year) {
    if(year%400===0||(year%4===0&&year%100!==0)){
        return true
    }else {
        return  false
    }
}

export function getWeekNumber(year,month,day) {
    let gapYear=year-1
    let a=Math.floor(gapYear/4)
    let b=Math.floor(gapYear/100)
    let c=Math.floor(gapYear/400)
    let n=(gapYear+a-b+c)%7
    for (let i = 1; i < month; i++) {
        switch (i) {
            case 1:
                n += 31 % 7
                break
            case 2:
                if (isLeapYear(year)) {
                    n += 29 % 7
                } else {
                    n += 28 % 7
                }
                break
            case 3:
                n += 31 % 7
                break
            case 4:
                n += 30 % 7
                break
            case 5:
                n += 31 % 7
                break
            case 6:
                n += 30 % 7
                break
            case 7:
                n += 31 % 7
                break
            case 8:
                n += 31 % 7
                break
            case 9:
                n += 30 % 7
                break
            case 10:
                n += 31 % 7
                break
            case 11:
                n += 30 % 7
                break
            default:
                new Error("输入有误")
        }
    }
    n = (n + day-1+1) % 7
    return n
}


export  function getSumDay(year,month) {
    switch (month) {
        case 1:
            return 31
        case 2:
            if(isLeapYear(year)){
                return 29
            }else {
                return 28
            }
        case 3:
            return 31
        case 4:
            return 30
        case 5:
            return 31
        case 6:
            return 30
        case 7:
            return 31
        case 8:
            return 31
        case 9:
            return 30
        case 10:
            return 31
        case 11:
            return 30
        case 12:
            return 31
        default:
            new Error("输入错误")

    }
}
