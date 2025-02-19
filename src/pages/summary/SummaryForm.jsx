import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CheckboxLabel = (
  <span>
    I agree to <storng style={{ color: "blue" }}> Terms and Conditions </storng>
  </span>
);

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);
  return (
    <>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={tcChecked}
            onChange={(e) => setTcChecked(e.target.checked)}
            label={CheckboxLabel}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!tcChecked}>
          Confirm order
        </Button>
      </Form>
    </>
  );
};

export { SummaryForm };
