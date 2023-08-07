import Stepper from '@/components/CustomerIntakeForm/Stepper'
import { Bulp, HelpIcon, MessagesIcon } from '@/utils/Icons'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useCustomerFormData from '@/store/useCustomerFormData'
import Step1Img from '@/assets/step1.png'
import Step2Img from '@/assets/step2.png'
import Step3Img from '@/assets/step3.png'

const CustomerIntakeFormPage = () => {
  const { stepNumb } = useCustomerFormData()
  const [animateRef] = useAutoAnimate()
  return (
    <div className='flex'>
      <div className='relative w-[5rem]'>
        <div className='  fixed bottom-0 left-0 top-0 flex w-[5rem] flex-col justify-between border-r-2 border-[#DCDBE1]'>
          <div className='mt-10 flex flex-col items-center justify-center gap-y-6 '>
            <Bulp />

            <div className='relative flex flex-col items-center '>
              <div
                className={`relative z-10 flex h-8 w-8  items-center justify-center rounded-full  ${
                  stepNumb && stepNumb > 0 ? 'bg-[#4BBA39]' : 'bg-[#CDCDCD]'
                } text-base font-semibold text-white`}
              >
                1
              </div>
              <div
                className={` h-10 w-[0.1rem] ${
                  stepNumb && stepNumb > 0 ? 'bg-[#4BBA39]' : 'bg-[#CDCDCD]'
                } `}
              />
              <div
                className={`relative z-10 flex h-8 w-8  items-center justify-center rounded-full  ${
                  stepNumb && stepNumb > 1 ? 'bg-[#4BBA39]' : 'bg-[#CDCDCD]'
                } text-base font-semibold text-white`}
              >
                2
              </div>
              <div
                className={` h-10 w-[0.1rem] ${
                  stepNumb && stepNumb > 1 ? 'bg-[#4BBA39]' : 'bg-[#CDCDCD]'
                } `}
              />

              <div
                className={`relative z-10 flex h-8 w-8  items-center justify-center rounded-full  ${
                  stepNumb && stepNumb > 2 ? 'bg-[#4BBA39]' : 'bg-[#CDCDCD]'
                } text-base font-semibold text-white`}
              >
                3
              </div>
            </div>
          </div>
          <div className='mt-10 flex flex-col items-center justify-center gap-y-8'>
            <HelpIcon />
            <MessagesIcon />
          </div>
        </div>
      </div>
      <div ref={animateRef} className='grid w-full grid-cols-12   gap-x-5 '>
        <div className=' col-span-12 mt-10  pl-10  pr-5   lg:col-span-7  lg:pl-6 '>
          <Stepper />
        </div>
        {stepNumb && (
          <div className=' relative ml-auto hidden h-full w-full  lg:col-span-5 lg:block'>
            <div className='sticky bottom-0 top-0 '>
              <img
                // fetchPriority='high'
                // priority
                placeholder='blur'
                // fill={true}
                className='  ml-auto  h-screen w-auto  '
                src={
                  stepNumb === 1
                    ? Step1Img
                    : stepNumb === 2
                    ? Step2Img
                    : stepNumb === 3
                    ? Step3Img
                    : Step1Img
                }
                alt='Loading Image'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerIntakeFormPage
