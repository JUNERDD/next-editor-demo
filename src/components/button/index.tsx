import { cn } from '@/app/lib/utils'
import { ElProps } from '@/types'
import { cva, VariantProps } from 'class-variance-authority'
import { memo } from 'react'

const buttonVariants = cva(
  'flex-center select-none rounded-xl px-4 py-2 text-sm font-bold hover:opacity-80 active:brightness-90',
  {
    variants: {
      variant: {
        primary: 'text-white bg-blue-700',
        secondary: 'bg-zinc-100'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

interface ButtonProps extends ElProps<'button'>, VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ children, variant, className, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  )
}

export default memo(Button)
