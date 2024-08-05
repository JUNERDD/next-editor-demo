import AppHeader from '@/components/app-header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-center-i h-full flex-col gap-10 p-4 pt-24">
      {/* 头部 */}
      <AppHeader />

      {/* 内容 */}
      {children}
    </div>
  )
}
