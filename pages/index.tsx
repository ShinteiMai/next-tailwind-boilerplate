import Image from "next/image";
import { Counter } from "@components/Common";
import { SiGithub } from "react-icons/si";

const IndexPage = () => {
  return (
    <div className="mt-24">
      <div className="flex mx-auto items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-accents-2">
          next-tailwind-boilerplate
        </h1>
        <div className="ml-4">
          <SiGithub size={32} />
        </div>
      </div>

      <p className="mt-3 text-sm text-center text-accents-1">
        A battery-packaged boilerplate for Next.js + Tailwind integrated with
        TypeScript support and full unit & integration testing modules such as
        react-testing-library and Cypress.
      </p>

      <div className="mx-auto mt-8 flex justify-around items-center max-w-sm">
        <Image src="/images/react.png" width={50} height={50} />
        <Image src="/images/tailwind.png" width={50} height={35} />
        <Image src="/images/typescript.png" width={50} height={50} />
      </div>

      <Counter className="mx-auto text-center mt-2 sm:mt-4 md:mt-8" />
    </div>
  );
};

export default IndexPage;
