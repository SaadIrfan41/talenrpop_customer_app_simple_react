import useCustomerFormData from '@/store/useCustomerFormData'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import { useAutoAnimate } from '@formkit/auto-animate/react'

const Stepper = () => {
  const [animateRef] = useAutoAnimate()
  const { stepNumb } = useCustomerFormData()

  return (
    <div ref={animateRef}>
      {stepNumb === 1 ? (
        <Step1 />
      ) : stepNumb === 2 ? (
        <Step2 />
      ) : stepNumb === 3 ? (
        <Step3 />
      ) : (
        <div className=' grid h-[90dvh] w-[90vw] place-content-center '>
          <div className='spinner'>
            <div className='bounce1'></div>
            <div className='bounce2'></div>
            <div className='bounce3'></div>
          </div>
        </div>
      )}
      {/* <Step2 /> */}
      {/* <div className=' grid h-[90dvh] w-[90vw] place-content-center'>
        <div className='spinner'>
          <div className='bounce1'></div>
          <div className='bounce2'></div>
          <div className='bounce3'></div>
        </div>
      </div> */}
    </div>
  )
}

export default Stepper
