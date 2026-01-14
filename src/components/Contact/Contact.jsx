import { useState } from "react";
import styles from "./Contact.module.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Sent:", formData);
    alert("Дякую! Повідомлення відправлено (в консоль).");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Зв'язатися зі мною</h2>
      <div className={styles.container}>
        {/* Ліва частина: Контактна інформація */}
        <div className={styles.info}>
          <p className={styles.text}>
            Відкритий до співпраці та нових можливостей. Якщо у вас є питання
            або пропозиція — пишіть!
          </p>
          <div className={styles.links}>
            <a href="mailto:chiron1600@gmail.com" className={styles.link}>
              chiron1600@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-kozak-a71992355/"
              target="_blank"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AndrewKozak2"
              target="_blank"
              className={styles.link}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Права частина: Форма */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ім'я</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Повідомлення</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Надіслати
          </button>
        </form>
      </div>
    </section>
  );
}
