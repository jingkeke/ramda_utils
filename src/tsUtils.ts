
// 上面的测试
const test = <T extends object>(a: T): T => {
    a = a
    return a
}
const test2 = <T extends object>(a: T) => {
    return a
}

const test3 = <T extends object>(a: T) => { }

interface Lengthwise {
    length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length) // Now we know it has a .length property, so no more error
    return arg
}

type ToggleableComponentProps<P extends object = { length: number }> = {
    show: string
    toggle: string
} & P
const he = { name: 'jing' }
const aaa: ToggleableComponentProps = {
    show: 'ff',
    toggle: 'length',
    length: 112,
}

class Greeter<T> {
    static ofType<T extends string>() {
        return Greeter as Constructor<Greeter<T>>
    }
    greeting: T
    constructor(message: T) {
        this.greeting = message
    }
    greet() {
        return this.greeting
    }
}

let greeter = Greeter.ofType<string>()
