import InputField from "@/components/Inputs/InputField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import {  z } from "zod";

const formSchema = z.object({
    turnover: z.coerce.number({
        required_error: "Please enter a turnover.",
        invalid_type_error:
          "turnover must contain only numbers and decimals.",
      }),
      nprofit: z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      oprofit  : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      damorliztion  : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      equityballocation  : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      supplieraccounts  : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      purchases : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      clientaccounts  : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      stocks  : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
      total  : z.coerce.number({
        required_error: "Please enter a Net profit.",
        invalid_type_error:
          "Net Profit must contain only numbers and decimals.",
      }),
});
interface ReportProps{
  reportId:string
}
export const FinancialData = ({reportId}:ReportProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    turnover:0,         
    nprofit:0,          
    oprofit:0,          
    damorliztion:0,     
    equityballocation:0,
    supplieraccounts:0, 
    purchases:0,        
    clientaccounts:0,   
    stocks:0, 
    total:0
    },
  });
  const loading=form.formState.isSubmitted
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await axios.post("/api/financialdata",{...values,reportId})
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Financial Data" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField
              name="turnover"
              placeholder="Turnover"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="nprofit "
              placeholder="Net Profit "
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="oprofit"
              placeholder="oprofit"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="damorliztion"
              placeholder="damorliztion"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="equityballocation"
              placeholder="equityballocation"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="supplieraccounts "
              placeholder="supplieraccounts "
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="purchases"
              placeholder="purchases"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="clientaccounts"
              placeholder="clientaccounts"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="stocks"
              placeholder="stocks"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="total"
              placeholder="Total"
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
