import { useState, useEffect, useCallback } from "react";

const MESSAGE_TIMEOUT = 5000;

export const useSuccessMessage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmitSuccess = useCallback(() => setShowSuccessMessage(true), []);
  const hideMessage = useCallback(() => setShowSuccessMessage(false), []);

  useEffect(() => {
    if (!showSuccessMessage) return;

    const timerId = setTimeout(hideMessage, MESSAGE_TIMEOUT);

    return () => {
      clearTimeout(timerId);
    };
  }, [showSuccessMessage]);

  return [showSuccessMessage, onSubmitSuccess] as const;
};
