interface TodoInfoProps {
  todoCount: number
  completedCount: number
}

const TodoInfo = ({ todoCount, completedCount }: TodoInfoProps) => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <div className='text-blue'>생성된 할 일</div>
        <div className='flex items-center justify-center rounded-full bg-gray-400 px-2 py-0.5 text-xs text-gray-200'>
          {todoCount}
        </div>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <div className='text-purple'>완료한 일</div>
        <div className='flex items-center justify-center rounded-full bg-gray-400 px-2 py-0.5 text-xs text-gray-200'>
          {completedCount}
        </div>
      </div>
    </div>
  )
}

export default TodoInfo
