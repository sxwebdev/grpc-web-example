import React, { Suspense } from "react";
import { observer } from "mobx-react-lite";
import { Preloader } from "@tkcrm/ui";
import Forms from "./form";

const App: React.FC = observer(() => {
  return (
    <Suspense fallback={<Preloader fullScreenHeight />}>
      <div className="grid min-h-full place-content-center">
        <div className="p-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">GRPC Web example</span>
          </h1>
          <p
            className="mx-auto mt-3 max-w-md text-base text-gray-500
      sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
          >
            GRPC Web example for Alexey Dev 😉
          </p>
          <div className="mt-5 md:mt-10">
            <Forms />
          </div>
        </div>
      </div>
    </Suspense>
  );
});

export default App;
