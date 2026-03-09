import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Step1 from "../components/signUp/Step1";
import Step2 from "../components/signUp/Step2";
import Step3 from "../components/signUp/Step3";
import Step4 from "../components/signUp/Step4";
import Step5 from "../components/signUp/Step5";
import Step6 from "../components/signUp/Step6";
import Step7 from "../components/signUp/Step7";
import Step8 from "../components/signUp/Step8";
import Step9 from "../components/signUp/Step9";

function SignUp() {
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const [step, setStep] = useState(initialEmail ? 2 : 1);
  const [email, setEmail] = useState(initialEmail);
  const navigate = useNavigate();

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(1, s - 1));

  switch (step) {
    case 1:
      return <Step1 onNext={next} onBack={() => navigate(-1)} />;
    case 2:
      return (
        <Step2
          initialEmail={email}
          onNext={(submittedEmail) => {
            setEmail(submittedEmail);
            next();
          }}
        />
      );
    case 3:
      return <Step3 email={email} onNext={next} onBack={back} />;
    case 4:
      return <Step4 onNext={next} onBack={back} />;
    case 5:
      return <Step5 onNext={next} onBack={back} />;
    case 6:
      return <Step6 onNext={next} onBack={back} />;
    case 7:
      return <Step7 onNext={next} onBack={back} />;
    case 8:
      return <Step8 onNext={next} onBack={back} />;
    case 9:
      return <Step9 onDone={() => navigate("/")} />;
    default:
      return <Step1 onNext={next} onBack={() => navigate(-1)} />;
  }
}

export default SignUp;
