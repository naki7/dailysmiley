import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export const metadata = {
    title: "Daily Smiley · Dashboard",
  };


export default function DashboardPage(){

    return(
        <Main>
            <Dashboard/>
        </Main>
    )
}