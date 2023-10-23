import { createRoot } from "react-dom/client";
import { ErrorBoundary, UIContext, UIContextClass } from "@tkcrm/ui";

import App from "@/components/app";
import "@/assets/css/index.css";

const rootElement = document.querySelector("#root");
rootElement &&
  createRoot(rootElement).render(
    <ErrorBoundary>
      <UIContext.Provider value={new UIContextClass({})}>
        <App />
      </UIContext.Provider>
    </ErrorBoundary>
  );
