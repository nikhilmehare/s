import { useState } from "react";
import { sanitize } from "./utils";
import Loading from "./Loading";

const SimpleForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div>
      <div className=" mx-auto p-4 md:p-8 sm:w-full sm:max-w-xl">
        <div className="rounded-md sm:mt-0  sm:flex-shrink-0 space-y-3">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Your email"
            className="border border-gray-600  focus:outline-none flex items-center justify-center 
             px-5 py-3 focus:ring-gray-500 focus:ring-1 focus:border-transparent w-full rounded-lg h-10 px-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button
            className=" mt-3 w-full flex items-center justify-center px-5 py-2  text-base leading-6 font-medium rounded-md text-white 
             bg-gray-900 focus:outline-none  transition duration-150 ease-in-out"
            onClick={handleFormSubmit}
          >
            Notify me
          </button>
        </div>
      </div>
      <div className="min-h-42px">
        {"sending" === status ? (
          <Loading
            showSpinner
            message="Sending..."
            contentColorClass="text-green-500"
            hasVisibilityToggle={false}
          />
        ) : null}
        {"error" === status || error ? (
          <div
            className="text-red-600 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-green-500 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default SimpleForm;
