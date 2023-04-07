import { redirect } from "next/navigation";

const FourOhFour = (): JSX.Element => {
  redirect("/");
};

export default FourOhFour;
