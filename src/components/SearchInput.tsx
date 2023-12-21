"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"



//Create a form schema
const formSchema = z.object({
    input: z.string().min(2,{
        message:"Search Key Must Be 2 Chars At Least"
    }).max(50),
  })


const SearchInput = () => {
    const router = useRouter()
     // 1. Define your form.
     const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          input: "",
        },
      })

      // 2. Define a submit handler.
      function onSubmitHandler(values: z.infer<typeof formSchema>) {

        router.push(`/search/${values.input}`)
        form.reset()
      }
  return (
    // Build your form
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <FormField
        control={form.control}
        name="input"
        render={({field })=>(
            <FormItem>
                <FormControl>
                <Input placeholder="Search" {...field}  className="border border-neutral-200/50 rounded-lg max-sm:w-[140px]"/>
                </FormControl>
            </FormItem>
        )}
        />
        </form>
    </Form>
  )
}

export default SearchInput