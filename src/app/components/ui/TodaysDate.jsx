const TodaysDate = () => {
  const today = new Date()
  const formattedDate = today.toLocaleDateString()

  return (
    <div className='w-fit px-1 bg-white'>
      <p className='font-semibold'>{formattedDate}</p>
    </div>
  )
}

export default TodaysDate