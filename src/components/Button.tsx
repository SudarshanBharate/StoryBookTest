import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text or React content displayed inside the button.
   */
  children: ReactNode;

  /**
   * Prevents the user from clicking the button.
   */
  disabled?: boolean;

  /**
   * Controls the visual color style of the button.
   */
  variant?: ButtonVariant;
}

/**
 * A reusable button for user actions such as booking, saving, or cancelling.
 */
function Button({
  children,
  variant = "primary",
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button button--${variant} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
