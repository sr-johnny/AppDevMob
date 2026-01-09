import { StepContainer } from "@/components/step-container";
import { Dashboard } from "@/components/dashboard";
import { Link, Redirect, router } from "expo-router";

export default function Index() {

  return (
    <Dashboard
      content={
        <>
          <StepContainer src="alpendre"/>

          <StepContainer src="blu" />

          <StepContainer src="casa" />

          <StepContainer src="dom" />

          <StepContainer src="elandia" />
        </>
      }
    ></Dashboard>
  );
}
