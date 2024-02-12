import { FormField, FormItem,FormLabel,FormControl, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
interface InputFieldProps{
    form:any,
    name:string,
    placeholder:string,
    disable?:boolean,
    type?:string

}
const TextField = ({type,disable,form,name, placeholder}:InputFieldProps) => {
    return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{placeholder}</FormLabel>
              <FormControl>
                <Textarea disabled={disable}  placeholder={placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    );
};

export default TextField;