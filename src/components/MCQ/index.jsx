import React, { useState } from "react";
import { Section } from "../exports";
import styles from "./styles.module.css";
import { Button, Radio, Space, Form } from "antd";

const MultipleChoiceQuestion = ({ question, options, answerId }) => {
  const [answeredState, setAnsweredState] = useState();
  const [selectedOption, setselectedOption] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      if (selectedOption === answerId) {
        setAnsweredState("correct");
      } else {
        setAnsweredState("wrong");
      }
    } else {
      alert("Please select answer before question submission. ");
    }
  };

  const handleOptionChange = (e) => {
    setselectedOption(e.target.value);
  };

  return (
    <Section>
      <div
        className={`${styles.container} ${
          answeredState === "correct"
            ? styles.correct
            : answeredState === "wrong"
            ? styles.wrong
            : styles.unanswered
        }`}
      >
        <p className={styles.question}>Q. {question}</p>
        <form onSubmit={handleSubmit}>
          <Radio.Group onChange={handleOptionChange}>
            <Space direction="vertical">
              {options.map((option, key) => {
                return (
                  <Radio key={key} value={option.id}>
                    {option.title}
                  </Radio>
                );
              })}
            </Space>
          </Radio.Group>
          <div className={styles.submitButton}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default MultipleChoiceQuestion;
