import * as z from "zod";
import {UseFormReturn} from "react-hook-form";

const transactionForm = z.object({
    type: z.enum(["INCOME", "EXPENSE", "SUBSCRIPTION"]),
    amount: z.number().min(0, {message: "Amount is required."}),
    currency: z.enum(["INR", "USD"]),
    particular: z.string().min(1, {message: "Title is required."}).max(255),
    description: z.string().max(255).optional(),
    account: z.string().min(1, {message: "Account is required."}).max(255),
    date: z.date().default(new Date()),
    place: z.string().max(255).optional(),
    category: z.string().max(255).optional(),
    tags: z.array(z.string().max(255)).optional(), //TODO Add later
});

type transactionFormTypeZod = z.infer<typeof transactionForm>;

type TransactionFormType = UseFormReturn<transactionFormTypeZod>;

interface transactionFormProps {
    form: TransactionFormType,
    onSubmit: (values: z.infer<typeof transactionForm>) => void;
}

export {transactionForm};
export type { transactionFormProps, TransactionFormType, transactionFormTypeZod };

