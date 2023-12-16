import LoanRequestForm from '../components/forms/LoanRequestForm'
import PageHeader from '../components/PageHeader'
import TimelineComponent from '../components/ui/TimelineComponent'
import { wait } from '../utils/wait'

const LoanRequestPage = async () => {
  await wait(2000)
  return (
    <div className='w-full flex flex-col px-4 pb-6'>
      <PageHeader />
      {/* <TimelineComponent /> */}
      <LoanRequestForm />
    </div>
  )
}

export default LoanRequestPage