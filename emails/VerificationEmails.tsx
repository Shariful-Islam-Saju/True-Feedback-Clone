import * as React from "react";
import {
  Html,
  Body,
  Container,
  Heading,
  Button,
  Text,
  Section,
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
          <Heading style={styles.heading}>Welcome, {username}!</Heading>
          <Text style={styles.greetingText}>
            Hi {username}, I’m <strong>Shariful Islam</strong>, and I’m thrilled
            to welcome you to our platform! Please verify your email address to
            start exploring all the features we have to offer.
          </Text>
          <Section style={styles.otpSection}>
            <Text style={styles.otpText}>Your OTP Code:</Text>
            <Text style={styles.otpCode}>{otp}</Text>
          </Section>
          <Text style={styles.instructionText}>
            To complete your registration, please click the button below:
          </Text>
          <Button href="#" style={styles.button}>
            Verify Email
          </Button>
          <Text style={styles.footerText}>
            If you didn’t sign up for this account, you can safely ignore this
            email.
          </Text>
          <Text style={styles.signature}>
            Best regards,
            <br />
            <strong>Shariful Islam</strong>
            <br />
            Web Developer
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default VerificationEmail;

const styles = {
  body: {
    backgroundColor: "#f4f4f7",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    padding: "40px 0",
    margin: "0",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    padding: "30px",
    maxWidth: "480px",
    margin: "auto",
    textAlign: "center" as "center",
  },
  heading: {
    color: "#1a1a1a",
    fontSize: "22px",
    marginBottom: "20px",
    fontWeight: "600",
  },
  greetingText: {
    color: "#4a4a4a",
    fontSize: "16px",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  otpSection: {
    marginBottom: "20px",
  },
  otpText: {
    color: "#4a4a4a",
    fontSize: "14px",
    marginBottom: "5px",
  },
  otpCode: {
    color: "#007BFF",
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "2px",
  },
  instructionText: {
    color: "#4a4a4a",
    fontSize: "14px",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#ffffff",
    padding: "12px 30px",
    borderRadius: "6px",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "600",
    margin: "auto",
    cursor: "pointer",
  },
  footerText: {
    color: "#888888",
    fontSize: "12px",
    marginTop: "20px",
    lineHeight: "1.4",
  },
  signature: {
    color: "#4a4a4a",
    fontSize: "14px",
    marginTop: "30px",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
};
