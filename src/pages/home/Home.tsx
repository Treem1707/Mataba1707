import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <div className='flex-1 h-full bg-slate-50'>Home Page</div>
    </GeneralLayout>
  )
}

export default Home