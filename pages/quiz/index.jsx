import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import db from "../../db.json";
import Widget from "../../src/components/Widget";
import QuizLogo from "../../src/components/QuizLogo";
import QuizBackground from "../../src/components/QuizBackground";
import Footer from "../../src/components/Footer";
import GitHubCorner from "../../src/components/GitHubCorner";
import Image from "../../src/components/Image";
import OptionQuiz from "../../src/components/OptionQuiz";
import ButtonQuestion from "../../src/components/ButtonQuestion";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const SmallText = styled.small`
  color: #fefefe8a;
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #ffffff26;
  width: 50px;
  position: absolute;
`;

const QuizContent = ({ ...props }) => {
  return (
    <Widget>
      <Widget.Header>
        <h2>
          {`Pergunta ${props.questionIndex + 1} de ${props.total_questions}`}
        </h2>
      </Widget.Header>
      <Image src={props.question.image} />
      <Widget.Content>
        <h2>{props.question.title}</h2>
        <SmallText>{props.question.description}</SmallText>
        <Hr />
        <form
          onSubmit={(infos) => {
            infos.preventDefault();
            props.onSubmit();
          }}
        >
          <ul>
            <li>
              {props.alternatives.map((item, key) => {
                return (
                  <OptionQuiz
                    onChange={(infos) => {
                      infos.preventDefault();
                      props.onChange(infos);
                    }}
                    key={key}
                    content={item}
                    number={key + 1}
                  />
                );
              })}
            </li>
          </ul>
          <ButtonQuestion>Confirmar</ButtonQuestion>
        </form>
      </Widget.Content>
    </Widget>
  );
};

export default function Quiz() {
  const INITIAL = {
    reset: false,
    screenState: "LOADING",
    selectedOption: 0,
    acertos: 0,
    currentQuestion: 0,
  };
  const [reset, setReset] = useState(INITIAL.reset);
  const [screenState, setScreenState] = useState(INITIAL.screenState);
  const [selectedOption, setSelectedOption] = useState(INITIAL.selectedOption);
  const [acertos, setAcertos] = useState(INITIAL.acertos);
  const total_questions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(
    INITIAL.currentQuestion
  );
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const alternatives = question.alternatives;
  const answer = question.answer;

  useEffect(() => {
    setTimeout(() => {
      setReset(false);
      setScreenState("QUIZ");
    }, 1 * 1000);
  }, [reset]);

  const handleSubmit = () => {
    if (selectedOption === answer) {
      setAcertos(acertos + 1);
    }

    const nextQuestion = questionIndex + 1;
    if (nextQuestion < total_questions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState("FINISH");
    }
  };

  const handleChange = (e) => {
    const selected = e.target.value - 1;
    setSelectedOption(selected);
  };

  const handleClickReset = () => {
    setReset(true);
    setScreenState(INITIAL.screenState);
    setSelectedOption(INITIAL.selectedOption);
    setAcertos(INITIAL.acertos);
    setCurrentQuestion(INITIAL.currentQuestion);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === "LOADING" && (
          <Widget>
            <Widget.Header>Carregando...</Widget.Header>
            <Widget.Content>
              <FontAwesomeIcon icon={faSpinner} size="lg" />
            </Widget.Content>
          </Widget>
        )}
        {screenState === "QUIZ" && (
          <QuizContent
            question={question}
            questionIndex={questionIndex}
            total_questions={total_questions}
            alternatives={alternatives}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        )}
        {screenState === "FINISH" && (
          <Widget>
            <Widget.Header>{`PONTUAÇÂO FINAL:`}</Widget.Header>
            <Widget.Result>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row",
                  alignItems: "end",
                }}
              >
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={
                    acertos <= 2
                      ? "/svg/emojiCrying.svg"
                      : acertos > 2 && acertos < 5
                      ? "/svg/emojiGrinningSwet.svg"
                      : "/svg/emojiPartying.svg"
                  }
                  alt="emoji"
                />
                <div>
                  <h4
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >{`Você acertou ${acertos} de ${total_questions}`}</h4>
                  <p style={{ marginTop: ".5rem" }}>
                    {acertos <= 2
                      ? "Você precisa assistir mais!"
                      : acertos > 2 && acertos < 5
                      ? "Opa, quase lá!"
                      : "Sensacional!"}
                  </p>
                </div>
              </div>
              <ButtonQuestion.Reset
                onClick={handleClickReset}
                title="Jogar Novamente"
              >
                <FontAwesomeIcon icon={faRedoAlt} />
              </ButtonQuestion.Reset>
            </Widget.Result>
          </Widget>
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ogrds" />
    </QuizBackground>
  );
}
