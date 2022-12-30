import InputUnstyled from "@mui/base/InputUnstyled";
import { Box, Button } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddTransactionMutation } from "../services/transactions";
import { TransactionType } from "../store/types/transactions.type";
import { Input } from "./Input";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  amount: Yup.number()
    .typeError("You must specify a number")
    .integer()
    .required(),
  type: Yup.mixed<TransactionType>()
    .oneOf(Object.values(TransactionType))
    .required(),
});

type FormDto = {
  name: string;
  amount: string;
  type: TransactionType;
};

const initialValues: FormDto = {
  name: "",
  amount: "",
  type: TransactionType.Expense,
};

const CustomInputElement = styled("input")({
  fontFamily: "'Alegreya Sans', sans-serif",
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: 1,
  padding: 12,
  border: "solid 1px #CCCCCC",
  borderLeft: 0,
  borderRight: 0,
  textAlign: "center",
  width: "100%",
});

const Fieldset = styled("fieldset")({
  margin: 0,
  padding: 0,
  border: 0,
});

export default function CashFlowForm() {
  const [addTransaction] = useAddTransactionMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, formikBag) => {
      addTransaction({
        name: values.name,
        type: values.type,
        amount: parseInt(values.amount),
      });
      formikBag.resetForm();
    },
  });

  return (
    <form>
      <Fieldset disabled={formik.isSubmitting}>
        <InputLabel htmlFor="name">Name</InputLabel>

        <Input
          name="name"
          id="name"
          placeholder="eg.: Shopping"
          value={formik.values.name}
          onChange={formik.handleChange}
          tabIndex={1}
        />
        {formik.touched.name && formik.errors.name && (
          <FormHelperText error>{formik.errors.name}</FormHelperText>
        )}
      </Fieldset>
      <InputLabel htmlFor="amount" sx={{ mt: 2 }}>
        Amount
      </InputLabel>
      <Fieldset disabled={formik.isSubmitting}>
        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            disableElevation
            tabIndex={3}
            color="success"
            sx={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              minWidth: 103,
            }}
            onClick={(e) => {
              e.preventDefault();
              formik.setFieldValue("type", TransactionType.Income);
              formik.submitForm();
            }}
            disabled={formik.isSubmitting}
          >
            Income
          </Button>
          <InputUnstyled
            slots={{ input: CustomInputElement }}
            name="amount"
            placeholder="3000"
            id="amount"
            style={{ width: "100%", display: "flex" }}
            value={formik.values.amount}
            onChange={formik.handleChange}
            tabIndex={2}
            type="tel"
          />
          <Button
            variant="contained"
            disableElevation
            tabIndex={4}
            color="error"
            sx={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              minWidth: 103,
            }}
            onClick={(e) => {
              e.preventDefault();
              formik.setFieldValue("type", TransactionType.Expense);
              formik.submitForm();
            }}
            disabled={formik.isSubmitting}
          >
            Expense
          </Button>
        </Box>
        {formik.touched.amount && formik.errors.amount && (
          <FormHelperText error>{formik.errors.amount}</FormHelperText>
        )}
      </Fieldset>
    </form>
  );
}
