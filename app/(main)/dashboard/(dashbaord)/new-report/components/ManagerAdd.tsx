import InputField from "@/components/Inputs/InputField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be need.",
  }),
  companyName: z.string().min(2, {
    message: "Company Name must be need.",
  }),
  fuction: z.string().min(2, {
    message: "Function must be need.",
  }),
  nationatity: z.string().min(2, {
    message: "Nationality must be need.",
  })
});
interface ManagerAddProps{
  reportId:string
}
export const ManagerAdd = ({reportId}:ManagerAddProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:"",
        companyName:"",
        fuction:"",
        nationatity:""
    },
  });
  const loading=form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    await axios.post("/api/manager",{...values,reportId})
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Managers" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField
              name="name"
              placeholder="Manager Name"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="companyName"
              placeholder="Company Name"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="fuction"
              placeholder="Function"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="nationatity"
              placeholder="Nationatity"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <Button disabled={loading} type="submit" variant="primary" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
