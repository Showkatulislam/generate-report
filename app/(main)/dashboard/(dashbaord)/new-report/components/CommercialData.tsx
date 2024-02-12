import TextField from "@/components/Inputs/textField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
importText: z.string().min(2, {
    message: "import must be need.",
  }),
  importTexSub : z.string().min(2, {
    message: "import Text Sub  must be need.",
  }),
  suppliersLocal : z.string().min(2, {
    message: "suppliers Local  must be need.",
  }),
  exportText : z.string().min(2, {
    message: "export Text must be need.",
  }),
  exporttextSub : z.string().min(2, {
    message: " export text Sub must be need.",
  }),
  clientsLocal : z.string().min(2, {
    message: "Clients Local must be need.",
  }),
});
interface ReportProps{
  reportId:string
}
export const CommercialData = ({reportId}:ReportProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        importText:"",    
        importTexSub:"",
        suppliersLocal:"",
        exportText:"",    
        exporttextSub:"", 
        clientsLocal:"" 
    },
  });
  const loading=form.formState.isSubmitted
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    await axios.post("/api/commercialdata",{...values,reportId})
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Commercial Data" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <TextField
              name="importText"
              placeholder="Import Text "
              form={form}
            />
          </div>
          <div className="col-span-6">
            <TextField
              name="importTexSub"
              placeholder="Import Text Sub"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <TextField
              name="suppliersLocal"
              placeholder="Suppliers Local"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <TextField
              name="exportText"
              placeholder="Export Text"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <TextField
              name="exporttextSub"
              placeholder="Export Text Sub"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <TextField
              name="clientsLocal"
              placeholder="Clients Local "
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

