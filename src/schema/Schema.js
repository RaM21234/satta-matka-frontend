import * as yup from "yup";

const entrySchema = yup.object({
  entryText: yup.string().required("Entry is required"),
});

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeeklyupdateSchema = yup.object().shape({
  day: yup
    .string()
    .oneOf(daysOfWeek, "Invalid day")
    .required("Day is required"),
  data: yup
    .array()
    .of(yup.number().typeError("Data must be a number"))
    .required("Data is required")
    .test(
      "length",
      "Data must exactly contain 12 numbers",
      (arr) => arr?.length === 12
    ),
  createdAt: yup.date().default(() => new Date()),
});

const validHeadings = [
  "MAIN STARLINE",
  "BAAZI BAAR BAAR LIVE",
  "NEW KALYAN STAR LINE",
  "Mumbai Rajshree Star Line Result",
];

const TimelyResultSchema = yup.object().shape({
  heading: yup
    .string()
    .oneOf(validHeadings, "Invalid heading")
    .required("Heading is required"),
  result: yup.string().required("Result is required"),
  time: yup.date().default(() => new Date()),
});

const liveUpdateSchema = yup.object().shape({
  startTime: yup.string().required("Start time is required"),
  endTime: yup.string().required("End time is required"),
  number: yup
    .string()
    .matches(/^\d+$/, "Number must be a valid number")
    .required("Number is required"),
  dateOfNumber: yup.date().required("Date of number is required"),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const signupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const TrickSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

const subhankLuckyNumberSchema = yup.object().shape({
  number: yup.string().required("Number is required"),
});
const luckyNumberSchema = yup.object().shape({
  number: yup.string().required("Number is required"),
});

const finalAnkSchema = yup.object().shape({
  number: yup.string().required("Number is required"),
});

const resultSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  result: yup.string().required("Result is required"),
});

export {
  signupSchema,
  loginSchema,
  liveUpdateSchema,
  TrickSchema,
  TimelyResultSchema,
  WeeklyupdateSchema,
  entrySchema,
  subhankLuckyNumberSchema,
  luckyNumberSchema,
  finalAnkSchema,
  resultSchema,
};
