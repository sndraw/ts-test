/**
 * Created by sn on 2019/12/3.
 */

let log = (): void => {
    console.log("This is TestModule.log")
}
let log2 = (): string => {
    console.log("This is TestModule.log2")
    return 'log2'
}

export default{
    log,
    log2
}