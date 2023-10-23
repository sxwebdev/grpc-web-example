import { Form, FormInstance, getFormInstance, notification } from "@tkcrm/ui";
import { observer } from "mobx-react-lite";
import API from "@/api";

import { helloForm } from "./formConfig";

interface FormProps {
  instance: FormInstance;
  onSave?: (values: Record<string, any>) => void;
}

const FormControls: React.FC<FormProps> = observer(({ instance }) => {
  return (
    <div className="mt-4 flex justify-end">
      <Form.Reset instance={instance} className="mr-4">
        Reset
      </Form.Reset>
      <Form.Save
        instance={instance}
        loading={instance.isLoading}
        onSave={async (values) => {
          try {
            const resp = await API.Hello.hello({ text: values.hello });
            notification.success(resp.response);
          } catch (error: any) {
            notification.error(null, error.message, {
              duration: 3000,
            });
          }
        }}
      >
        Send
      </Form.Save>
    </div>
  );
});

const FormData: React.FC<FormProps & { formTitle: string }> = observer(
  ({ instance, formTitle }) => {
    return (
      <>
        <div className="mb-5 text-xl font-semibold">{formTitle}</div>
        <Form instance={instance} />
        <FormControls instance={instance} />
      </>
    );
  }
);

const Forms: React.FC = () => {
  const helloFormInstance = getFormInstance(helloForm, {});

  return <FormData formTitle="Hello form" instance={helloFormInstance} />;
};

export default Forms;
