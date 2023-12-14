import './loading.module.css'

const Loading = () => {
  return (
    <div className='bg-emerald-50 w-screen h-screen mx-auto flex justify-center items-center p-4'>
      <div className="page">
        <div className="container">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="h3">loading</div>
        </div>
      </div>
    </div>
  )
}

export default Loading