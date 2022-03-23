import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h2>Features</h2>
      <ul>
        <li>See all drinks available for review.</li>
        <li>Submit a new drink for others to review.</li>
      </ul>
      <p>
        This project was made using React, Redux, Typescript and AWS Amplify.
      </p>
    </div>
  );
};

export default AboutPage