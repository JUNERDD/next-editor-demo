/**
 * 默认代码片段
 */
export const DEFAULT_CODE = `const numA = 123
const numB = 456

function foo(num1, num2) {
    return num1 + num2
}
console.log('test line')

//测试修改dom元素(此代码不会执行，因为在web worker环境中不具备操作dom的能力)
//document.body.style.backgroundColor = 'red'
//alert('弹窗')

//测试修改定时器（多输出内容）
setTimeout = (fn) => { fn(); console.log('2. 已经不是原来的定时器了, setTimeout:', setTimeout) }
setTimeout(() => { console.log('1. 定时器') })

console.log('你好世界, numA + numB = ', foo(numA, numB))`
