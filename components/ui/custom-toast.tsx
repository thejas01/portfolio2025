import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface CustomToastProps {
  message: string
}

export const CustomToast: React.FC<CustomToastProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4 flex items-center space-x-3"
    >
      <div className="flex-shrink-0">
        <CheckCircle className="w-6 h-6 text-green-500" />
      </div>
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{message}</p>
    </motion.div>
  )
}

