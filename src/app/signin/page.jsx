import SignInForm from '../components/forms/SignInForm'
import PageHeader from '../components/PageHeader'

const SignIn = () => {
  return (
    <div className='h-full w-screen flex flex-col items-center mt-[2rem] px-4'>
      <PageHeader />
      <div className='shadow-xl w-full mx-4 pb-1 md:w-1/3'>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn