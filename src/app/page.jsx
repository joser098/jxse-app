import Landing from "@/components/AppComponents/Landing";
import LandingHeader from "@/components/AppComponents/LandingHeader";

export default function App() {
  return (
    <>
      <LandingHeader />

      <main>
        <div>
          <Landing />
        </div>
        {/* <div>
          <Landing />
        </div> */}
      </main>
    </>
  );
}
