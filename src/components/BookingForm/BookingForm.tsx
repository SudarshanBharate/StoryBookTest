import type { FormEvent } from "react";
import Button from "../Button";
import "./BookingForm.css";

interface BookingFormProps {
  /**
   * Main heading displayed above the form fields.
   */
  title?: string;

  /**
   * Text displayed on the submit button.
   */
  submitLabel?: string;

  /**
   * Prevents the user from submitting the form.
   */
  disabled?: boolean;

  /**
   * Runs after the user submits valid form data.
   */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

/**
 * A semantic form for collecting basic booking information.
 */
function BookingForm({
  title = "Book your stay",
  submitLabel = "Book now",
  disabled = false,
  onSubmit,
}: BookingFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevents the browser from refreshing the page after form submission.
    event.preventDefault();

    // Calls onSubmit only when a function was provided.
    onSubmit?.(event);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className="booking-form__title">{title}</h2>

      <fieldset className="booking-form__fields">
        <legend>Booking details</legend>

        <div className="booking-form__field">
          <label htmlFor="guest-name">Full name</label>
          <input
            id="guest-name"
            name="guestName"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="booking-form__field">
          <label htmlFor="check-in">Check-in date</label>
          <input
            id="check-in"
            name="checkIn"
            type="date"
            required
          />
        </div>

        <div className="booking-form__field">
          <label htmlFor="guests">Number of guests</label>

          <select id="guests" name="guests" defaultValue="1">
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </div>
      </fieldset>

      <Button type="submit" disabled={disabled}>
        {submitLabel}
      </Button>
    </form>
  );
}

export default BookingForm;