'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default () => {
    const router = useRouter()
  return (
    <>
      Dashboard Setttings{" "}
      <Link href="/dashboard/manage/settings/layout">Goto Layout</Link>

      <button onClick={()=>{
        router.push("dashboard")
      }}>Goto Layout via useRouter</button>
    </>
  );
};
