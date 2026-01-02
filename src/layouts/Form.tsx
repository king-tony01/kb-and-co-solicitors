"use client";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import { useState, useRef } from "react";
import styles from "./styles/style.module.css";
import TextArea from "@/components/inputs/TextArea";

function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [consultation, setConsultation] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    summary: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Check if all fields are filled
  const isFormValid = Object.values(consultation).every(
    (val) => val.trim() !== ""
  );
  const disabled = loading || !isFormValid;

  async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isFormValid) {
      setError("Please fill in all fields");
      setShowError(true);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setShowError(false);
      setShowSuccess(false);

      const currentDate = new Date().toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const currentYear = new Date().getFullYear();

      const consultationTemplate = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>New Consultation Request - KB & Co Solicitors</title>
    <!--[if mso]>
    <style>
        * { font-family: sans-serif !important; }
    </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <!--<![endif]-->
    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f4f4f5;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        a {
            text-decoration: none;
        }

        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }

        .im {
            color: inherit !important;
        }

        img.g-img+div {
            display: none !important;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u~div .email-container {
                min-width: 320px !important;
            }
        }

        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u~div .email-container {
                min-width: 375px !important;
            }
        }

        @media only screen and (min-device-width: 414px) {
            u~div .email-container {
                min-width: 414px !important;
            }
        }
    </style>
    <style>
        .primary {
            background: #1a1a1a;
        }

        .bg_white {
            background: #ffffff;
        }

        .bg_light {
            background: #f8f8f8;
        }

        .bg_gradient {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        }

        .bg_dark {
            background: #1a1a1a;
        }

        .bg_gold {
            background: #464158;
        }

        .email-section {
            padding: 2.5em;
        }

        .btn {
            padding: 14px 32px;
            display: inline-block;
            background: #464158;
            color: #ffffff;
            border-radius: 6px;
            font-weight: 600;
            text-decoration: none;
        }

        .btn.btn-secondary {
            background: #1a1a1a;
            color: #ffffff;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #1a1a1a;
            margin-top: 0;
            font-weight: 700;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 1.6;
            color: #525252;
        }

        a {
            color: #d4af37;
            font-weight: 500;
        }

        .logo h1 {
            margin: 0;
        }

        .logo h1 a {
            color: #1a1a1a;
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        .heading-section h2 {
            color: #1a1a1a;
            font-size: 32px;
            margin-top: 0;
            line-height: 1.3;
            font-weight: 700;
        }

        .heading-section .subheading {
            margin-bottom: 20px !important;
            display: inline-block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #464158;
            font-weight: 600;
        }

        .message-box {
            background: #fafaf9;
            border-left: 4px solid #464158;
            padding: 24px;
            margin: 20px 0;
            border-radius: 8px;
        }

        .info-row {
            margin: 16px 0;
        }

        .info-label {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }

        .info-value {
            color: #525252;
            font-size: 15px;
            word-break: break-word;
        }

        .priority-badge {
            display: inline-block;
            background: #1a1a1a;
            color: #464158;
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-left: 10px;
        }

        .footer {
            color: #71717a;
            font-size: 13px;
        }

        .footer a {
            color: #1a1a1a;
            text-decoration: none;
        }

        .footer a:hover {
            color: #464158;
        }

        .divider {
            border: none;
            border-top: 1px solid #e5e5e5;
            margin: 30px 0;
        }

        @media screen and (max-width: 500px) {
            .email-section {
                padding: 1.5em;
            }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f4f4f5;">
    <center style="width: 100%; background-color: #f4f4f5;">
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <!-- BEGIN BODY -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <!-- Logo & Header -->
                <tr>
                    <td valign="top" class="bg_white" style="padding: 2em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td class="logo" style="text-align: left;">
                                    <h1><a href="#">KB & CO</a></h1>
                                </td>
                                <td style="text-align: right;">
                                    <span style="color: #71717a; font-size: 13px;">${currentDate}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <!-- Hero Section -->
                <tr>
                    <td valign="middle" class="bg_gradient email-section" style="text-align: center; padding: 3em 2.5em;">
                        <div class="heading-section">
                            <h2 style="color: #ffffff; margin-bottom: 8px;">New Consultation Request <span class="priority-badge">PRIORITY</span></h2>
                            <p style="color: rgba(255, 255, 255, 0.9); font-size: 14px; margin: 0;">A new client has submitted a consultation request</p>
                        </div>
                    </td>
                </tr>

                <!-- Consultation Content -->
                <tr>
                    <td class="bg_white email-section">
                        <div class="heading-section">
                            <span class="subheading">Client Information</span>
                        </div>
                        
                        <div class="info-row">
                            <div class="info-label">Full Name</div>
                            <div class="info-value">${consultation.firstName} ${consultation.lastName}</div>
                        </div>

                        <div class="info-row">
                            <div class="info-label">Email Address</div>
                            <div class="info-value">
                                <a href="mailto:${consultation.email}" style="color: #1a1a1a;">${consultation.email}</a>
                            </div>
                        </div>

                        <div class="info-row">
                            <div class="info-label">Phone Number</div>
                            <div class="info-value">
                                <a href="tel:${consultation.phone}" style="color: #1a1a1a;">${consultation.phone}</a>
                            </div>
                        </div>

                        <hr class="divider">

                        <div class="info-row">
                            <div class="info-label">Case Summary</div>
                        </div>
                        
                        <div class="message-box">
                            <p style="margin: 0; color: #3f3f46; line-height: 1.8; white-space: pre-wrap;">${consultation.summary}</p>
                        </div>

                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 30px;">
                            <tr>
                                <td>
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td style="text-align: center;">
                                                <a href="mailto:${consultation.email}" class="btn">Reply to ${consultation.firstName}</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td class="bg_light email-section" style="padding: 2em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td valign="middle" class="footer" style="text-align: center;">
                                    <p style="margin: 0 0 10px 0;">
                                        <strong style="color: #1a1a1a;">KB & Co Solicitors</strong><br>
                                        Providing expert legal counsel and representation
                                    </p>
                                    <p style="margin: 15px 0 0 0; color: #a1a1aa; font-size: 12px;">
                                        © ${currentYear} KB & Co Solicitors. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>

</html>`;

      const API_ENDPOINT =
        process.env.NEXT_PUBLIC_API_ENDPOINT ||
        "https://email-service-475704943074.us-central1.run.app/send-email";

      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: process.env.NEXT_PUBLIC_EMAIL_TO || "enquiries@kbsolicitors.com",
          subject: `New Consultation Request - ${consultation.firstName} ${consultation.lastName}`,
          text: `Name: ${consultation.firstName} ${consultation.lastName}\nEmail: ${consultation.email}\nPhone: ${consultation.phone}\n\nSummary:\n${consultation.summary}`,
          html: consultationTemplate,
        }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

      console.log("Success:", data);
      setShowSuccess(true);

      // Reset form
      setConsultation({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        summary: "",
      });

      // Reset form HTML elements
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Failed to send request. Please try again.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={sendRequest} ref={formRef}>
      <div className={styles.grid}>
        <Input
          value={consultation.firstName}
          type="text"
          label="First name"
          placeholder="e.g John"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, firstName: val }));
          }}
        />
        <Input
          value={consultation.lastName}
          type="text"
          label="Last name"
          placeholder="e.g Doe"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, lastName: val }));
          }}
        />
      </div>
      <div className={styles.grid}>
        <Input
          value={consultation.email}
          type="email"
          label="Email"
          placeholder="e.g john.doe@example.com"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, email: val }));
          }}
        />
        <Input
          value={consultation.phone}
          type="tel"
          label="Phone"
          placeholder="e.g +123 456 7890"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, phone: val }));
          }}
        />
      </div>
      <TextArea
        value={consultation.summary}
        label="Brief Summary"
        placeholder="Briefly explain the services you need..."
        onChange={(val) => {
          setConsultation((prev) => ({ ...prev, summary: val }));
        }}
      />
      <br />
      <Button
        label={loading ? "Sending..." : "Request"}
        onClick={() => {}}
        disabled={disabled}
        loading={loading}
      />
      {/* Success Modal */}
      {showSuccess && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowSuccess(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#10b981" />
                <path
                  d="M14 24l8 8 12-12"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.modalTitle}>
              Consultation Sent Successfully!
            </h3>
            <p className={styles.modalDescription}>
              Thank you for reaching out. We'll get back to you shortly.
            </p>
            <button
              className={styles.modalButton}
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Error Modal */}
      {showError && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowError(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#ef4444" />
                <path
                  d="M16 16l16 16M32 16l-16 16"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.modalTitle}>Error</h3>
            <p className={styles.modalDescription}>
              {error || "An error occurred. Please try again."}
            </p>
            <button
              className={styles.modalButton}
              onClick={() => setShowError(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default Form;
