import { PencilLine } from 'lucide-react'
import { memo } from 'react'

interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <header className="flex-center-i justify-between gap-3 border-b border-zinc-200 px-4 py-2">
      <PencilLine />
      <h2>在线编辑器</h2>
    </header>
  )
}

export default memo(AppHeader)
