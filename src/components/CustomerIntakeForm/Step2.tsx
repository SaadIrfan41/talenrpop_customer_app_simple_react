import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import {
  CustomerIntakeFormStep2Types,
  CustomerIntakeformStep2Schema,
} from '@/utils/zodSchema'
import { CheckIcon } from '@/utils/Icons'
const platformArray = ['Zendesk', 'Gorgias', 'Re-Amaze', 'Hubspot']
const EcommercePlatform = ['Facebook', 'Email']
// import useClickOutside from '@/utils/useClickOutside'
// import Flatpickr from 'react-flatpickr'
import { useAutoAnimate } from '@formkit/auto-animate/react'
// import { useMediaQuery } from '@mantine/hooks'
import useCustomerFormData from '@/store/useCustomerFormData'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Calendar } from '../ui/calendar'
import { CalendarIcon } from 'lucide-react'
// const genders = ['Any', 'Male', 'Female']

const Step2 = () => {
  const [showPlateformArray, setShowPlateformArray] = useState(false)
  const [customPlateformName, setCustomPlateformName] = useState(false)
  const [showQA_Sheet, setShowQA_Sheet] = useState(false)

  const form = useForm<CustomerIntakeFormStep2Types>({
    resolver: zodResolver(CustomerIntakeformStep2Schema),
    defaultValues: { platformName: [] },
  })
  const {
    setStepNumb,

    setCustomerServicePlatform,

    setPlatformNames,

    setEcommercePlatform,

    setqaSheetAvaliable,

    setQaSheet,

    setNumAgents,

    setAgentWorkingHours,

    setAgentWorkingDays,

    setGenderPreference,

    setAgentStartUpDate,
  } = useCustomerFormData()
  const submitData = async (data: CustomerIntakeFormStep2Types) => {
    if (data.customPlatformName && data.platformName) {
      data.platformName.push(data.customPlatformName)
    }

    console.log(data)

    setCustomerServicePlatform(data.customerServicePlatformAvaliable)
    setPlatformNames(data.platformName ? data.platformName : [])
    setEcommercePlatform(data.ecommercePlatform)
    setqaSheetAvaliable(data.qaSheetAvaliable)
    setQaSheet(data.qaSheetAvaliable === 'true' ? data.qaSheet : null)
    setNumAgents(data.numOfAgents),
      setGenderPreference(data.genderPreference),
      setAgentStartUpDate(new Date(data.agentsStartingDate)),
      setAgentWorkingDays(data.agentWorkingDays)
    setAgentWorkingHours(data.agentWorkingHours)

    setStepNumb(3)
  }
  const [animateRef] = useAutoAnimate()

  return (
    <Form
      {...form}
      //   ref={formRef}
      // onSubmit={form.handleSubmit(submitData)}
    >
      <form
        onSubmit={form.handleSubmit(submitData)}
        className={` flex flex-col gap-y-5 pb-16 pl-[8%]`}
      >
        <div className=' flex w-full gap-x-16    md:gap-x-40 xl:gap-x-32 2xl:gap-x-52 '>
          <h1 className={` text-3xl font-bold text-[#69C920] `}>
            Customer Intake Form
          </h1>
          <button
            type='submit'
            disabled={form.formState.isSubmitting}
            className=' hidden  h-[30px] w-[6.563rem] rounded-[10px] bg-[#8FD758] pb-1 text-xl font-bold text-white sm:block sm:text-xl   lg:hidden xl:block'
          >
            Next
          </button>
        </div>
        {/* CUSTOMER SERVICE PLATEFORM AVAILABILITY */}
        <div ref={animateRef} className='flex flex-col gap-y-2  '>
          <div className='flex flex-col'>
            <div className='flex items-center '>
              <span className=' w-full text-lg font-normal text-[#666666] '>
                Do You Have A Customer Service Platform In Place Already?
              </span>
            </div>
          </div>
          <FormField
            control={form.control}
            name='customerServicePlatformAvaliable'
            render={({ field }) => (
              <FormItem className='  w-full  '>
                <FormControl>
                  <div className='w-full text-lg font-normal text-[#666666] outline-none transition-all duration-300'>
                    <label className='flex cursor-pointer items-center gap-x-3'>
                      <Input
                        type='radio'
                        className='peer sr-only'
                        {...field}
                        value={'Yes'}
                        onClick={() => {
                          setShowPlateformArray(true)
                        }}
                      />
                      <div className='text-white peer-checked:text-[#D0F289]'>
                        <CheckIcon />
                      </div>
                      <span>{'Yes'}</span>
                    </label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='customerServicePlatformAvaliable'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <div className='w-full text-lg font-normal text-[#666666] outline-none transition-all duration-300'>
                    <label className='flex cursor-pointer items-center gap-x-3'>
                      <Input
                        type='radio'
                        className='peer sr-only'
                        {...field}
                        value={'No'}
                        onClick={() => {
                          setShowPlateformArray(false),
                            form.resetField('customPlatformName')
                        }}
                      />
                      <div className='text-white peer-checked:text-[#D0F289]'>
                        <CheckIcon />
                      </div>
                      <span>{'No'}</span>
                    </label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {showPlateformArray && (
            <div ref={animateRef} className='flex flex-col gap-y-3 '>
              <div ref={animateRef} className='flex flex-col'>
                <h1 className=' w-full text-lg font-normal text-[#666666]'>
                  What Platform do you use?
                </h1>
                {form.formState.errors.platformName && (
                  <span className=' text-red-400'>
                    {form.formState.errors.platformName.message}
                  </span>
                )}
              </div>
              <div className='flex flex-col gap-y-3 '>
                {platformArray.map((name, index) => (
                  <div
                    className='w-full  text-lg    font-normal text-[#666666] outline-none transition-all duration-300'
                    key={index}
                  >
                    <label className='flex cursor-pointer items-center gap-x-3'>
                      <input
                        type='checkbox'
                        className='peer sr-only'
                        {...form.register('platformName')}
                        value={name}
                      />
                      <div className='text-white peer-checked:text-[#D0F289]'>
                        <CheckIcon />
                      </div>
                      <span>{name}</span>
                    </label>
                  </div>
                ))}
              </div>
              <div className='w-full  text-lg    font-normal text-[#666666] outline-none transition-all duration-300'>
                <label className='flex cursor-pointer items-center gap-x-3'>
                  <input
                    onClick={() => {
                      setCustomPlateformName(!customPlateformName),
                        form.resetField('customPlatformName')
                    }}
                    type='checkbox'
                    className='peer sr-only'
                  />
                  <div className='text-white peer-checked:text-[#D0F289]'>
                    <CheckIcon />
                  </div>
                  <span>Other</span>
                </label>
              </div>

              {customPlateformName && (
                <div
                  ref={animateRef}
                  className='w-full  pl-8  text-lg   font-normal text-[#666666] outline-none transition-all duration-300'
                >
                  <input
                    type='text'
                    {...form.register('customPlatformName')}
                    placeholder='Platform Name'
                    className='h-8 w-full max-w-[14.375rem] rounded-lg border  border-black/20 px-3 py-4 outline-none placeholder:text-lg placeholder:font-normal placeholder:text-[#666666]'
                  />
                  {form.formState.errors.customPlatformName && (
                    <span className=' text-red-400'>
                      {form.formState.errors.customPlatformName.message}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        {/* <div ref={animateRef} className='flex flex-col gap-y-2  '>
        <div ref={animateRef} className='flex flex-col'>
          <div className='flex items-center '>
            <span className=' w-full text-lg font-normal text-[#666666] '>
              Do You Have A Customer Service Platform In Place Already?
            </span>
            <button
              type='submit'
              disabled={form.formState.isSubmitting}
              className=' hidden  h-[30px] w-[6.563rem] rounded-[10px] bg-[#8FD758] pb-1 text-xl font-bold text-white sm:block sm:text-xl   lg:hidden xl:block'
            >
              Next
            </button>
          </div>
          {errors.customerServicePlatformAvaliable && (
            <span className=' -mt-1 text-red-400 '>
              {errors.customerServicePlatformAvaliable.message}
            </span>
          )}
        </div>
        <div className='w-full text-lg font-normal text-[#666666] '>
          <label className='flex cursor-pointer items-center gap-x-3'>
            <input
              // defaultChecked={tasks[index] === task}
              // checked={tasks[index] === task}
              type='radio'
              className='peer sr-only'
              {...register('customerServicePlatformAvaliable')}
              value='Yes'
              onClick={() => {
                setShowPlateformArray(true)
              }}
            />
            <div className='text-white peer-checked:text-[#D0F289]'>
              <CheckIcon />
            </div>
            <span>Yes</span>
          </label>
        </div>
        <div className='w-full  text-lg  font-normal text-[#666666]  '>
          <label className='flex cursor-pointer items-center gap-x-3'>
            <input
              // defaultChecked={tasks[index] === task}
              // checked={tasks[index] === task}
              type='radio'
              className='peer sr-only'
              {...register('customerServicePlatformAvaliable')}
              value='No'
              onClick={() => {
                setShowPlateformArray(false),
                  resetField('platformName'),
                  resetField('customPlatformName')
              }}
            />
            <div className='text-white peer-checked:text-[#D0F289]'>
              <CheckIcon />
            </div>
            <span>No</span>
          </label>
        </div>
        {showPlateformArray && (
          <div ref={animateRef} className='flex flex-col gap-y-3 '>
            <div ref={animateRef} className='flex flex-col'>
              <h1 className=' w-full text-lg font-normal text-[#666666]'>
                What Platform do you use?
              </h1>
              {errors.platformName && (
                <span className=' text-red-400'>
                  {errors.platformName.message}
                </span>
              )}
            </div>
            <div className='flex flex-col gap-y-3 '>
              {platformArray.map((name, index) => (
                <div
                  className='w-full  text-lg    font-normal text-[#666666] outline-none transition-all duration-300'
                  key={index}
                >
                  <label className='flex cursor-pointer items-center gap-x-3'>
                    <input
                      type='checkbox'
                      className='peer sr-only'
                      {...register('platformName')}
                      value={name}
                    />
                    <div className='text-white peer-checked:text-[#D0F289]'>
                      <CheckIcon />
                    </div>
                    <span>{name}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className='w-full  text-lg    font-normal text-[#666666] outline-none transition-all duration-300'>
              <label className='flex cursor-pointer items-center gap-x-3'>
                <input
                  onClick={() => {
                    setCustomPlateformName(!customPlateformName),
                      resetField('customPlatformName')
                  }}
                  type='checkbox'
                  className='peer sr-only'
                />
                <div className='text-white peer-checked:text-[#D0F289]'>
                  <CheckIcon />
                </div>
                <span>Other</span>
              </label>
            </div>

            {customPlateformName && (
              <div
                ref={animateRef}
                className='w-full  pl-8  text-lg   font-normal text-[#666666] outline-none transition-all duration-300'
              >
                <input
                  type='text'
                  {...register('customPlatformName')}
                  placeholder='Platform Name'
                  className='h-8 w-full max-w-[14.375rem] rounded-lg border  border-black/20 px-3 py-4 outline-none placeholder:text-lg placeholder:font-normal placeholder:text-[#666666]'
                />
                {errors.customPlatformName && (
                  <span className=' text-red-400'>
                    {errors.customPlatformName.message}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div> */}
        {/* CUSTOMER SERVICE PLATEFORM */}

        {/* Ecommerce PlatformName */}
        {/* <div className='flex flex-col gap-y-2 '>
        <div ref={animateRef} className='flex flex-col'>
          <h5 className=' w-full text-lg font-normal text-[#666666]'>
            What E-Commerce Platform Does Your Virtual Assistant Need Access To?
          </h5>
          {errors.ecommercePlatform && (
            <span className=' text-red-400'>
              {errors.ecommercePlatform.message}
            </span>
          )}
        </div>
        <div className='flex flex-col gap-y-3 '>
          {EcommercePlatform.map((name, index) => (
            <div
              className='w-full  text-lg    font-normal text-[#666666] outline-none transition-all duration-300'
              key={index}
            >
              <label className='flex cursor-pointer items-center gap-x-3'>
                <input
                  type='checkbox'
                  className='peer sr-only'
                  {...register('ecommercePlatform')}
                  value={name}
                />
                <div className='text-white peer-checked:text-[#D0F289]'>
                  <CheckIcon />
                </div>
                <span>{name}</span>
              </label>
            </div>
          ))}
        </div>
      </div> */}
        <div ref={animateRef} className='flex flex-col gap-y-3 '>
          <div ref={animateRef} className='flex flex-col'>
            <h1 className=' w-full text-lg font-normal text-[#666666]'>
              What E-Commerce Platform Does Your Virtual Assistant Need Access
              To?
            </h1>
            {form.formState.errors.ecommercePlatform && (
              <span className=' text-red-400'>
                {form.formState.errors.ecommercePlatform.message}
              </span>
            )}
          </div>
          <div className='flex flex-col gap-y-1 '>
            {EcommercePlatform.map((name, index) => (
              <div
                className='w-full  text-lg    font-normal text-[#666666] outline-none transition-all duration-300'
                key={index}
              >
                <label className='flex cursor-pointer items-center gap-x-3'>
                  <input
                    type='checkbox'
                    className='peer sr-only'
                    {...form.register('ecommercePlatform')}
                    value={name}
                  />
                  <div className='text-white peer-checked:text-[#D0F289]'>
                    <CheckIcon />
                  </div>
                  <span>{name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/*QA SHEET AVAILABILITY */}

        <div ref={animateRef} className='flex flex-col gap-y-2  '>
          <div className='flex flex-col'>
            <div className='flex items-center '>
              <span className=' w-full text-lg font-normal text-[#666666] '>
                Do You Have A Question/Answer Sheet Created Yet For Your Most
                Common Questions Created Yet?
              </span>
            </div>
          </div>
          <FormField
            control={form.control}
            name='qaSheetAvaliable'
            render={({ field }) => (
              <FormItem className='  w-full  '>
                <FormControl>
                  <div className='w-full text-lg font-normal text-[#666666] outline-none transition-all duration-300'>
                    <label className='flex cursor-pointer items-center gap-x-3'>
                      <Input
                        type='radio'
                        className='peer sr-only'
                        {...field}
                        value={'Yes'}
                        onClick={() => {
                          setShowQA_Sheet(true)
                        }}
                      />
                      <div className='text-white peer-checked:text-[#D0F289]'>
                        <CheckIcon />
                      </div>
                      <span>{'Yes'}</span>
                    </label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='qaSheetAvaliable'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <div className='w-full text-lg font-normal text-[#666666] outline-none transition-all duration-300'>
                    <label className='flex cursor-pointer items-center gap-x-3'>
                      <Input
                        type='radio'
                        className='peer sr-only'
                        {...field}
                        value={'No'}
                        onClick={() => {
                          setShowQA_Sheet(false), form.resetField('qaSheet')
                        }}
                      />
                      <div className='text-white peer-checked:text-[#D0F289]'>
                        <CheckIcon />
                      </div>
                      <span>{'No'}</span>
                    </label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {showQA_Sheet && (
            <div className='flex flex-col gap-y-2'>
              <FormLabel className='text-lg font-normal text-[#666666] outline-none'>
                Great! Can You Upload It Here For Our Team To Review And Format
                For Your Virtual Assistant?
              </FormLabel>
              <FormDescription>
                <span>
                  File should be in{' '}
                  <strong className=''> PDF or Document (.docx)</strong>
                </span>
              </FormDescription>

              <input
                {...form.register('qaSheet')}
                accept='.pdf,.doc,.docx'
                id='typingTestScore'
                type='file'
                className='block w-full   text-sm mt-2
      text-slate-500 file:mr-4 file:rounded-xl
      file:border-0 file:bg-[#8FD758]
      file:px-4 file:py-2
      file:text-sm file:font-semibold
      file:text-white
      hover:file:cursor-pointer'
              />
              {form.formState.errors.qaSheet && (
                <span className='text-red-400'>
                  {form.formState.errors.qaSheet?.message as string}
                </span>
              )}
            </div>
          )}
        </div>
        <div className='flex flex-col  gap-y-2'>
          <FormLabel className='text-lg font-normal text-[#666666] outline-none'>
            How Many Customer Service Agents Are You Looking To Add To Your
            Team?
          </FormLabel>
          <FormField
            control={form.control}
            name='numOfAgents'
            render={() => (
              <FormItem className='  w-full max-w-[190px] ' ref={animateRef}>
                <FormControl>
                  <input
                    // defaultChecked={tasks[index] === task}
                    // checked={tasks[index] === task}

                    placeholder='Agents'
                    type='number'
                    {...form.register('numOfAgents', { valueAsNumber: true })}
                    className=' max-w-[8.563rem] rounded-lg border-2 border-[#666666]/20 px-5 pb-3 pt-3 outline-none placeholder:text-lg placeholder:font-normal placeholder:text-[#666666]'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className=' flex flex-col  gap-y-2'>
          <FormLabel className='text-lg font-normal text-[#666666] outline-none'>
            What Hours Would You Like Your Dedicated Agent To Be Working?
          </FormLabel>
          <FormDescription>
            <strong className=''> E.g (5 days, 8 hours per day)</strong>
          </FormDescription>
          <div className='flex gap-x-9'>
            <FormField
              control={form.control}
              name='agentWorkingDays'
              render={() => (
                <FormItem className='  w-full max-w-[190px] ' ref={animateRef}>
                  <FormControl>
                    <input
                      // defaultChecked={tasks[index] === task}
                      // checked={tasks[index] === task}

                      placeholder='Days'
                      type='number'
                      {...form.register('agentWorkingDays', {
                        valueAsNumber: true,
                      })}
                      className=' max-w-[8.563rem] rounded-lg border-2 border-[#666666]/20 px-5 pb-3 pt-3 outline-none placeholder:text-lg placeholder:font-normal placeholder:text-[#666666]'
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='agentWorkingHours'
              render={() => (
                <FormItem className='  w-full max-w-[190px] ' ref={animateRef}>
                  <FormControl>
                    <input
                      // defaultChecked={tasks[index] === task}
                      // checked={tasks[index] === task}

                      placeholder='Hours'
                      type='number'
                      {...form.register('agentWorkingHours', {
                        valueAsNumber: true,
                      })}
                      className=' max-w-[8.563rem] rounded-lg border-2 border-[#666666]/20 px-5 pb-3 pt-3 outline-none placeholder:text-lg placeholder:font-normal placeholder:text-[#666666]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name='genderPreference'
          render={({ field }) => (
            <FormItem ref={animateRef} className=' max-w-xs   '>
              {/* <FormLabel>Role</FormLabel> */}
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className='h-14  text-lg font-normal text-black focus:ring-1 focus:ring-[#69C920]  focus:ring-offset-1 focus:ring-offset-[#69C920]'>
                  <SelectTrigger>
                    <SelectValue placeholder='Choose Agent Gender' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Male'>Male</SelectItem>
                  <SelectItem value='Female'>Female</SelectItem>
                  <SelectItem value='Any'>Any</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='agentsStartingDate'
          render={({ field }) => (
            <FormItem className='flex flex-col max-w-fit'>
              <FormLabel className='text-lg font-normal text-[#666666] outline-none'>
                When Would You Like Your Agent(s) Up And Running?
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] py-6 text-lg font-normal focus-visible:ring-[#69C920]  focus-visible:ring-offset-1 focus-visible:ring-offset-[#69C920]',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'yyyy-MM-dd')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto text-black h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* SUBMIT BUTTON SMALL SCREEN */}
        <button
          type='submit'
          disabled={form.formState.isSubmitting}
          className=' rounded-xl bg-[#8FD758] px-8 py-1 text-2xl font-bold text-white sm:hidden  sm:text-2xl lg:block   xl:hidden'
        >
          Next
        </button>
      </form>
    </Form>
  )
}

export default Step2
