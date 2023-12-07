const Alert = ({ children }) => {
  return (
    <div className='text-center text-red-500 font-bold px-2'>
      {children}
    </div>
  )
}

export { Alert }