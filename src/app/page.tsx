'use client'

import { ElEvent } from '@/types'
import Editor from '@monaco-editor/react'

export default function Home() {
  const handleSubmit = async (e: ElEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className="flex-center w-full max-w-7xl flex-col border">
      {/* 编辑器 */}
      <form className="flex-center w-full flex-col p-4" onSubmit={handleSubmit}>
        <Editor height="50vh" defaultLanguage="javascript" defaultValue='console.log("Hello, world!")' />
        <div className="flex justify-between pt-2">
          <button
            type="submit"
            className="flex-center select-none rounded-xl bg-blue-700 px-4 py-2 text-sm  font-bold text-white hover:opacity-80 active:brightness-90"
          >
            运行
          </button>
        </div>
      </form>

      {/* 结果 */}
      <div className="w-full border-t p-4">result</div>
    </main>
  )
}
