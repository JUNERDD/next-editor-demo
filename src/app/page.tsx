'use client'

import Button from '@/components/button'
import { DEFAULT_CODE } from '@/global'
import { ElEvent } from '@/types'
import Editor, { EditorProps } from '@monaco-editor/react'
import { useState, useEffect, useCallback } from 'react'

export default function Home() {
  const [code, setCode] = useState(DEFAULT_CODE)
  const [result, setResult] = useState('我是运行结果')
  const [worker, setWorker] = useState<Worker | null>(null)

  useEffect(() => {
    // 创建 Web Worker
    const newWorker = new Worker(new URL('../utils/work.ts', import.meta.url))
    newWorker.onmessage = (e) => {
      const { result, error } = e.data
      if (error) {
        setResult(`Error: ${error}`)
      } else {
        setResult(result)
      }
    }
    setWorker(newWorker)

    return () => {
      // 组件卸载时终止 Worker
      newWorker.terminate()
    }
  }, [])

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
  const handleSubmit = (e: ElEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (worker) {
      worker.postMessage(code)
    }
  }

  /**
   * 测试注入
   */
  const handleTest = useCallback(() => {
    const timer = setTimeout(() => {
      console.log('我是原来的定时器')

      clearTimeout(timer)
    })
  }, [])

  return (
    <main className="flex-center w-full max-w-7xl flex-col border">
      {/* 编辑器 */}
      <form className="flex-center w-full flex-col p-4" onSubmit={handleSubmit}>
        <Editor height="50vh" defaultLanguage="javascript" defaultValue={code} onChange={handleEditorChange} />
        <div className="flex justify-between gap-4 pt-2">
          <Button type="submit">运行</Button>
          <Button type="button" variant="secondary" onClick={handleTest}>
            测试定时器是否修改（请查看控制台）
          </Button>
        </div>
      </form>

      {/* 结果 */}
      <div className="w-full whitespace-pre-wrap border-t p-4">{result}</div>
    </main>
  )
}
