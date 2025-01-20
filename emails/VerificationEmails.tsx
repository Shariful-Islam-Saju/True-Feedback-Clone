import * as React from "react";
import {
  Html,
  Body,
  Container,
  Heading,
  Button,
  Text,
} from "@react-email/components";

function VerificationEmail({
  username,
  otp,
}: {
  username: string;
  otp: string;
}) {
  return (
    <Html lang="en">
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Hello, {username}!</Heading>
          <Text style={styles.text}>
            Here is your OTP: <strong>{otp}</strong>
          </Text>
          <Text style={styles.text}>
            If you&apos;d like to verify your email, click the button below:
          </Text>
          <Button style={styles.button}>Verify Email</Button>
        </Container>
      </Body>
    </Html>
  );
}

export default VerificationEmail;

const styles = {
  body: {
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    margin: "0",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
  },
  heading: {
    color: "#333333",
    fontSize: "20px",
    marginBottom: "10px",
  },
  text: {
    color: "#555555",
    fontSize: "14px",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "14px",
  },
};
