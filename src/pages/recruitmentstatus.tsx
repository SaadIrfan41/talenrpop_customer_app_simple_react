import {
  ChartIcon,
  ChatIcon,
  ChatSearchIcon,
  DashboardIcon,
  DeskIcon,
  FormIcon,
  HeadphonesIcon,
  PipeIcon,
  ProgressIconDown,
  ProgressIconUp,
  SettingsIcon,
  Sign_in_CircleIcon,
  StatusListIcon,
  UploadIcon,
  UserAddIcon,
  UserCircleIcon,
} from '@/utils/Icons'

const recruitmentProcess = [
  {
    id: 1,
    line1: 'New Agent Request Submitted',

    completed: true,
  },
  {
    id: 2,
    line1: 'Processing your requirements',

    completed: true,
  },
  {
    id: 3,
    line1: 'Generating Ideal Candidate Profiles',

    completed: false,
  },
  {
    id: 4,
    line1: 'Candidate Profiles Ready for Review! ',
    line2: ' ',
    completed: false,
  },
  {
    id: 5,
    line1: 'Review Call CSM: Andrew Stephens',
    line2: '',
    completed: false,
  },
  {
    id: 6,
    line1: 'Review Macros Created by TP',
    line2: ' ',
  },
  {
    id: 7,
    line1: 'Share Helpdesk Login/Credential',
    line2: '',
    completed: false,
  },
  {
    id: 8,
    line1: 'Schedule Live Training for Agent',

    completed: false,
  },
  {
    id: 9,
    line1: 'Share Helpdesk Login/Credential',

    completed: false,
  },
  {
    id: 10,
    line1: 'Agent Successfully Onboarded',

    completed: false,
  },
]
const RecruitmentStatusPage = () => {
  return (
    <div className=' flex h-full'>
      <div className='relative w-[94px]'>
        <nav className='fixed  bottom-0 left-0 top-0  flex h-full   max-w-[94px] flex-col   bg-[#D1FFAD]/75  px-3'>
          <div className='flex-grow'>
            <button>
              <StatusListIcon />
            </button>
            <button>
              <DashboardIcon />
            </button>
            <button>
              <ChatSearchIcon />
            </button>
            <button>
              <DeskIcon />
            </button>
            <button>
              <ChatIcon />
            </button>
            <button>
              <ChartIcon />
            </button>
            <button>
              <PipeIcon />
            </button>
          </div>
          <div>
            <button>
              <SettingsIcon />
            </button>
            <button>
              <UserCircleIcon />
            </button>
          </div>
        </nav>
      </div>
      <div className=' mt-20 h-full w-full flex-grow px-[5%]'>
        <div className='  ml-10 mr-16  rounded-xl bg-[#FAFAFA] pb-20 pl-3 pr-14 pt-1 shadow-xl'>
          <div className='flex text-3xl font-bold'>
            <UserAddIcon />
            <h2 className='-ml-[50px] mt-5 text-[#69C920]'>
              Recruitment Status
            </h2>
          </div>

          <div className=' relative'>
            <ol className='relative   grid grid-cols-10 grid-rows-2  text-sm  font-light text-black'>
              <div className='absolute  top-[50%] h-[2px] w-full bg-[#69C920]' />
              {recruitmentProcess.map(({ line1 }, index) => (
                <div
                  className={
                    index % 2 == 0
                      ? 'relative row-span-2 mt-auto h-1/2'
                      : 'relative row-span-1 mb-auto h-full'
                  }
                  key={index}
                >
                  {index % 2 == 0 ? (
                    <div className=' flex flex-col  items-center '>
                      <div className=''>
                        <ProgressIconDown />
                      </div>
                      <div className='ml-4 text-center  md:ml-0'>
                        <h4 className=' '>{line1}</h4>
                      </div>
                    </div>
                  ) : (
                    <div className=' flex flex-col justify-end mt-auto items-center h-full '>
                      <div className='ml-4 text-center   md:ml-0'>
                        <h4 className=' '>{line1}</h4>
                      </div>
                      <div className='flex  items-end'>
                        <ProgressIconUp />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </ol>
          </div>
        </div>
        <div className=' ml-12 mt-12  space-y-3 text-lg font-normal text-[#808080]'>
          <div className='flex items-center gap-x-3'>
            <HeadphonesIcon />
            <span>Book a call with your CSM</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <UploadIcon />
            <span>Upload training documents/fAQ’s</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <FormIcon />
            <span>Review the Macros File Created by TalentPop</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <Sign_in_CircleIcon />
            <span>Connect your helpdesk to Unleash reporting</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruitmentStatusPage
