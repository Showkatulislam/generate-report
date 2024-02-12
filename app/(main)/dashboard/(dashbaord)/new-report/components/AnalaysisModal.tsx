import DropDownField from "@/components/Inputs/DropDownField";
import InputField from "@/components/Inputs/InputField";
import TextField from "@/components/Inputs/textField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  NaceGroupDropdownItems,
  Payments,
  currency,
  industrialSectordropdownItem,
  riskRating,
} from "@/public/dropdownData";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  riskRating: z.string().min(2, {
    message: "Risk Rating must be need.",
  }),
  paymentExperience: z.string().min(2, {
    message: "Payment Experience Text Sub  must be need.",
  }),
  recommendCredit: z.string().min(2, {
    message: "recommend Credit Local  must be need.",
  }),
  recommendCreditText: z.string().min(2, {
    message: "Recommend Credit  Text must be need.",
  }),
  equivalentToCredit: z.string().min(2, {
    message: " equivalentToCredit Sub must be need.",
  }),
  equivalentToCreditText: z.string().min(2, {
    message: "equivalentToCredit  text must be need.",
  }),
  NaceGroup: z.string().min(2, {
    message: "Nace Group  text must be need.",
  }),
  industrialSector: z.string().min(2, {
    message: "industrial Sector  text must be need.",
  }),
  secondaryEstablishment: z.string().min(2, {
    message: "secondary Establishment  text must be need.",
  }),
  officailpublication: z.string().min(2, {
    message: "officailpublication  text must be need.",
  }),
  largeScaleAffair: z.string().min(2, {
    message: "Large Scale Affair  text must be need.",
  }),
});
interface ReportProps {
  reportId: string;
}
export const AnalaysisModal = ({ reportId }: ReportProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      riskRating: "",
      paymentExperience: "",
      recommendCredit: "",
      recommendCreditText: "",
      equivalentToCredit: "",
      equivalentToCreditText: "",
      NaceGroup: "",
      industrialSector: "",
      secondaryEstablishment: "",
      officailpublication: "",
      largeScaleAffair: "",
    },
  });
  const loading = form.formState.isSubmitted;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    await axios.post("/api/analaysismodal", { ...values, reportId });
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Analaysis Data" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <DropDownField
              name="riskRating"
              placeholder="Risk Rating"
              type1={true}
              items={riskRating}
              form={form}
            />
          </div>
          <div className="col-span-6">
            <DropDownField
              name="paymentExperience"
              placeholder="Payment Experience"
              type1={true}
              items={Payments}
              form={form}
            />
          </div>
          <div className="col-span-1">
            <DropDownField
              name="recommendCredit"
              placeholder="."
              type1={true}
              items={currency}
              form={form}
            />
          </div>
          <div className="col-span-5">
            <InputField
              name="recommendCreditText"
              placeholder="Recommend Credit"
              form={form}
            />
          </div>
          <div className="col-span-1">
            <DropDownField
              name="equivalentToCredit"
              placeholder=" ."
              type1={true}
              items={currency}
              form={form}
            />
          </div>
          <div className="col-span-5">
            <InputField
              name="equivalentToCreditText"
              placeholder="Equivalent To Credit"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <DropDownField
              name="NaceGroup"
              placeholder="Nace Group"
              type1={true}
              items={NaceGroupDropdownItems}
              form={form}
            />
          </div>
          <div className="col-span-6">
            <DropDownField
              name="industrialSector"
              placeholder="Industrial Sector"
              type1={true}
              items={industrialSectordropdownItem}
              form={form}
            />
          </div>
          <div className="col-span-6">
            <TextField
              name="secondaryEstablishment"
              placeholder="Secondary Establishment"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <TextField
              name="officailpublication"
              placeholder="Officail Publication"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <TextField
              name="largeScaleAffair"
              placeholder="Large Scale Affair"
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
