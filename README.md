Add Client form fields:
Name
Email
Phone
Address
Contact1
Contact2


Client( drop down menu) from clients.
Product ( drop down menu) from products.
Date, Time.
Priority.
Special request: Text field


npm i -D prisma
npx prisma init
npx prisma generate
npx prisma db push


## model addProduct
productName: "",
country:"",
language:"",
price:0

## model addClient
name: "",
email: "",
phone:"",
address:"",
contact1:"",
contact2:""

## model order
client: "",
product:"",
dob:"",
priority:""


          <OrderDetails />
          <CompanyContactInFo />
          <OfficialInfo />
          <ShareCapital />
          <Shareholders />
          <Managers />
          <FinancialData />
          <FinancialIndicator />
          <BankInformation />


### https://stackoverflow.com/questions/77161069/typescript-error-with-default-value-using-react-hook-form-and-zod

## https://stackoverflow.com/questions/77810607/how-to-use-shadcn-ui-range-date-picker-inside-form

  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  file:///C:/Users/Hp/Documents/Downloads/TN-VIDE-RAPPORT-FINANCIER-VERSION-2023%20(11)%20(1).pdf