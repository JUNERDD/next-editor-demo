// 沙箱环境
self.onmessage = function (e) {
  const code = e.data

  // 捕获console.log输出
  const capturedLogs: string[] = []

  // 存储原始log
  const originalConsoleLog = console.log

  // 重写console.log
  console.log = (...args) => {
    capturedLogs.push(args.join(' '))
    originalConsoleLog(...args)
  }

  try {
    // 创建一个新的函数并在沙箱环境中执行
    const safeFunction = new Function('console', code)
    safeFunction(console)
    self.postMessage({ result: capturedLogs.join('\n') })
  } catch (error: any) {
    self.postMessage({ error: error.message })
  } finally {
    // 恢复console.log
    console.log = originalConsoleLog
  }
}
