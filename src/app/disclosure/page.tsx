// disclosure.tsx
import React from "react";
import disclosureData from "./data";

const Disclosure = () => {
  const { discountedRate, APR, paymentOptions } = disclosureData;
  const { threeYears, fourYears, fiveYears } = paymentOptions;

  return (
    <div className="max-w-[750px] mx-auto pt-12">
      <div>*Annual Percentage Rate.</div>
      <div>
        Rates and terms are based on Excel FCU underwriting criteria, a $3,000
        minimum and are subject to change without notice. Existing Excel FCU
        loans are ineligible for refinance. The discounted rate as low as{" "}
        {discountedRate}%* APR is based on {APR}% APR* less 0.50% APR* with an
        Excel checking account in good standing with direct deposit and
        automatic loan payments. The first payment is due within 90 days of loan
        disbursement. Interest continues to accrue. This offer is subject to
        change without notice. Assuming an $18,000 loan amount, at{" "}
        {threeYears.APR} %APR*, and a 3 year term you would make 36 monthly
        payments of ${threeYears.monthlyPayment}. Assuming an $18,000 loan
        amount, at 4.99%APR*, and a 4 year term you would make 48 monthly
        payments of ${fourYears.monthlyPayment}. Assuming an $18,000 loan
        amount, at {fiveYears.APR}%APR*, and a 5 year term you would make 60
        monthly payments of ${fiveYears.monthlyPayment}.
      </div>
    </div>
  );
};

export default Disclosure;
