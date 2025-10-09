import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-4">
            {/* HEADER WITH GRADIENT */}
            <div
              className="card-header text-white text-center rounded-top-4"
              style={{
                background: "linear-gradient(90deg, #28a745, #007bff)"
              }}
            >
              <h2 className="mb-0">Contact Us</h2>
              <small className="text-light">We’d love to hear from you!</small>
            </div>

            <div className="card-body p-4">
              {submitted ? (
                <div className="alert alert-success text-center">
                  <h5 className="mb-2">Thank You!</h5>
                  <p>We’ve received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg shadow-sm"
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control form-control-lg shadow-sm"
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary rounded-pill shadow"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="card-footer bg-light text-center rounded-bottom-4">
              <small className="text-muted">
                You can also reach us at{" "}
                <a href="mailto:contact@tourguide.com">
                  contact@tourguide.com
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
