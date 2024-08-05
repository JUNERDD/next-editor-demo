'use client'

import { DEFAULT_CODE } from '@/global'
import { ElEvent } from '@/types'
import Editor, { EditorProps } from '@monaco-editor/react'
import { useState } from 'react'

export default function Home() {
  const [code, setCode] = useState(DEFAULT_CODE)
  const [result, setResult] = useState('我是运行结果')

  /**
   * 编辑代码
   */
  const handleEditorChange: EditorProps['onChange'] = (value) => {
    if (!value) return

    setCode(value)
  }

  /**
   * 运行代码
   */
  const handleSubmit = async (e: ElEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 输出结果数组
    const capturedLogs: string[] = []

    // 保存原始log函数
    const originalConsoleLog = console.log

    // 修改log函数
    console.log = (...args) => {
      capturedLogs.push(args.join(' '))
      originalConsoleLog(...args)
    }

    try {
      eval(code)
      setResult(capturedLogs.join('\n'))
    } catch (error: any) {
      setResult(`Error: ${error.message}`)
    } finally {
      // Restore original console.log
      console.log = originalConsoleLog
    }
  }

  return (
    <main className="flex-center w-full max-w-7xl flex-col border">
      {/* 编辑器 */}
      <form className="flex-center w-full flex-col p-4" onSubmit={handleSubmit}>
        <Editor height="50vh" defaultLanguage="javascript" defaultValue={code} onChange={handleEditorChange} />
        <div className="flex justify-between pt-2">
          <button
            type="submit"
            className="flex-center select-none rounded-xl bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:opacity-80 active:brightness-90"
          >
            运行
          </button>
        </div>
      </form>

      {/* 结果 */}
      <div className="w-full whitespace-pre-wrap border-t p-4">{result}</div>
    </main>
  )
}
