import MailchimpSubscribe from "react-mailchimp-subscribe";
import SimpleForm from "./SimpleForm";

const FormSubscribe = () => {
  const MAILCHIMP_URL = process.env.MAILCHIMP;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <SimpleForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default FormSubscribe;
