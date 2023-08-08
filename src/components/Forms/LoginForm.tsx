import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Loader2 } from 'lucide-react'
// import { toast } from 'react-hot-toast'
// import { useLocation, useNavigate } from 'react-router-dom'
import { loginFormSchema } from '@/lib/validations/auth/authValidations'

const LoginForm = () => {
  // const navigate = useNavigate()
  // const state = useLocation().state

  const [loading, setloading] = useState(false)
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    setloading(true)

    // router.push("/");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col  space-y-8 '
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className=' mx-auto w-full max-w-md'>
              <FormControl>
                <Input
                  className=' py-6 placeholder:text-lg placeholder:font-normal focus-visible:ring-[#69C920] focus-visible:ring-offset-1 focus-visible:ring-offset-[#69C920] '
                  placeholder='Email'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className=' mx-auto w-full max-w-md'>
              <FormControl>
                <Input
                  type='password'
                  className=' py-6 placeholder:text-lg placeholder:font-normal focus-visible:ring-[#69C920] focus-visible:ring-offset-1 focus-visible:ring-offset-[#69C920] '
                  placeholder='Password'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={loading}
          asChild
          className=' mx-auto bg-[#69C920] px-6  text-2xl '
          type='submit'
        >
          {loading ? (
            <button>
              Loggin In
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            </button>
          ) : (
            <button>Login</button>
          )}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
